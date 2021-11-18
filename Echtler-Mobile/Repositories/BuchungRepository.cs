using Echtler_Mobile.Data;
using Echtler_Mobile.Models;
using Microsoft.EntityFrameworkCore;

namespace Echtler_Mobile.Repositories
{
    public class BuchungRepository : IBuchungRepository
    {
        private readonly ApplicationDbContext _context;
        private int PriceingSeasonTable = 1;
        public BuchungRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<Buchung> CreateBuchung(Buchung buchung)
        {
            buchung.Id = 0;
            buchung.Price = calculatePrice(buchung.StartDate, buchung.EndDate);
            if (String.IsNullOrEmpty(buchung.UserId))
                throw new ArgumentNullException(nameof(buchung.UserId));

            string? userEmail = _context.Users.FirstOrDefault(x => x.Id == buchung.UserId).Email;

            if (string.IsNullOrEmpty(userEmail))
                throw new ArgumentNullException(nameof(userEmail));

            buchung.Name = userEmail;

            _context.Buchungen.Add(buchung);
            await _context.SaveChangesAsync();
            return buchung;
        }

        public async Task DeleteBuchung(int id)
        {
            var recordToDelete = await _context.Buchungen.FindAsync(id);
            if (recordToDelete != null)
            {
                _context.Buchungen.Remove(recordToDelete);
            }
            else
            {
                throw new ArgumentNullException();
            }
            await _context.SaveChangesAsync();
        }

        public async Task<Buchung> GetBuchung(int id)
        {
            return await _context.Buchungen.FindAsync(id) ?? throw new ArgumentNullException();
        }

        public IEnumerable<Buchung> GetBuchungen()
        {
            return _context.Buchungen.ToList();
        }

        public async Task<Buchung> UpdateBuchung(Buchung buchung)
        {
            _context.Entry(buchung).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return buchung;
        }

       
        public float calculatePrice(DateTime start, DateTime end)
        {
            var DatesArray = Enumerable.Range(0, 1 + end.Subtract(start).Days)
                              .Select(offset => start.AddDays(offset))
                              .ToArray();
            float currentPrice = 0.0f;
            foreach (var date in DatesArray)
            {
                var pricingSeason = _context.PricingSeasons.Where(x => x.StartDate.Date <= date.Date && x.EndDate.Date >= date.Date && x.SeaonTable == PriceingSeasonTable);
                if(pricingSeason.Count() == 1)
                {
                    currentPrice += pricingSeason.First().Price;

                }
                //todo: handle this. should not be something else than 1
            }
            return currentPrice;

        }
    }
}

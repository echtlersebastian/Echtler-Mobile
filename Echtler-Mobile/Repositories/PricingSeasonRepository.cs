using Echtler_Mobile.Data;
using Echtler_Mobile.Models;
using Microsoft.EntityFrameworkCore;

namespace Echtler_Mobile.Repositories
{
    public class PricingSeasonRepository : IPricingSeasonRepository
    {
        private readonly ApplicationDbContext _context;

        public PricingSeasonRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<PricingSeason> Create(PricingSeason season)
        {
            season.Id = 0;
            _context.PricingSeasons.Add(season);
            await _context.SaveChangesAsync();
            return season;
        }

        public async Task Delete(int id)
        {
            var recordToDelete = await _context.PricingSeasons.FindAsync(id);
            if (recordToDelete != null)
            {
                _context.PricingSeasons.Remove(recordToDelete);
            }
            else
            {
                throw new ArgumentNullException();
            }
            await _context.SaveChangesAsync();
        }

        public async Task<PricingSeason> GetSeason(int id)
        {
            return await _context.PricingSeasons.FindAsync(id) ?? throw new ArgumentNullException();

        }

        public IEnumerable<PricingSeason> GetSeasons()
        {
            return _context.PricingSeasons.ToList();
        }

        public async Task<PricingSeason> Update(PricingSeason season)
        {

            _context.Entry(season).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return season;
        }
    }
}

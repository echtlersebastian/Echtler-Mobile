using Echtler_Mobile.Data;
using Echtler_Mobile.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace Echtler_Mobile.Repositories
{
    public class WohnmobilRepository : IWohnmobilRepository
    {
        private readonly ApplicationDbContext _context;

        public WohnmobilRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Wohnmobil> CreateWohnmobil(Wohnmobil womo)
        {
            womo.Id = 0;
            _context.Wohnmobile.Add(womo);
            await _context.SaveChangesAsync();
            return womo;
        }

        public async Task Delete(int id)
        {
            var recordsToDelete = await _context.Wohnmobile.FindAsync(id);
            if (recordsToDelete != null)
            {
                _context.Wohnmobile.Remove(recordsToDelete);
            }
            else
            {
                throw new ArgumentNullException();
            }
            await _context.SaveChangesAsync();
        }

        public async Task<Wohnmobil> GetWohnmobil(int id)
        {
            return await _context.Wohnmobile.FindAsync(id) ?? throw new ArgumentNullException();
        }

        public IEnumerable<Wohnmobil> GetWohnmobils()
        {
            return _context.Wohnmobile.ToList();
        }

        public async Task<Wohnmobil> Update(Wohnmobil womo)
        {
            _context.Entry(womo).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return womo;
        }
    }
}

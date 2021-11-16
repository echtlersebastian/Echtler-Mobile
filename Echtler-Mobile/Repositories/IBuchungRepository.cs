using Echtler_Mobile.Models;

namespace Echtler_Mobile.Repositories
{
    public interface IBuchungRepository
    {
        IEnumerable<Buchung> GetBuchungen();
        Task<Buchung> GetBuchung(int id);
        Task<Buchung> CreateBuchung(Buchung season);
        Task<Buchung> UpdateBuchung(Buchung season);
        Task DeleteBuchung(int id);
    }
}

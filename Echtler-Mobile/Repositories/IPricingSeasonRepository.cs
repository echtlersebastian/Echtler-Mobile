using Echtler_Mobile.Models;

namespace Echtler_Mobile.Repositories
{
    public interface IPricingSeasonRepository
    {
        IEnumerable<PricingSeason> GetSeasons();
        Task<PricingSeason> GetSeason(int id);
        Task<PricingSeason> Create(PricingSeason womo);
        Task<PricingSeason> Update(PricingSeason womo);
        Task Delete(int id);
    }
}

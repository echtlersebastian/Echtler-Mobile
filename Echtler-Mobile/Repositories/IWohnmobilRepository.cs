using Echtler_Mobile.Models;

namespace Echtler_Mobile.Repositories
{
    public interface IWohnmobilRepository
    {
        IEnumerable<Wohnmobil> GetWohnmobils();
        Task<Wohnmobil> GetWohnmobil(int id);
        Task<Wohnmobil> CreateWohnmobil(Wohnmobil womo);
        Task<Wohnmobil> Update(Wohnmobil womo);
        Task Delete(int id);
        
    }
}

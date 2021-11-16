using Duende.IdentityServer.EntityFramework.Options;
using Echtler_Mobile.Models;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace Echtler_Mobile.Data
{
    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions options, IOptions<OperationalStoreOptions> operationalStoreOptions)
            : base(options, operationalStoreOptions)
        {

        }

        public DbSet<Wohnmobil> Wohnmobile { get; set; }
        public DbSet<Buchung> Buchungen { get; set; }
        public DbSet<PricingSeason> PricingSeasons { get; set; }
    }
}
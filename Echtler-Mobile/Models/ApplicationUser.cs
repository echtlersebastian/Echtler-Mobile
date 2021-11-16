using Microsoft.AspNetCore.Identity;

namespace Echtler_Mobile.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string? Vorname { get; set; }
        public string? Nachname { get; set; }
        public string? Straße { get; set; }
        public string? Hausnummer { get; set; }
        public string? Postleitzahl { get; set; }
        public string? Stadt { get; set; }


    }
}
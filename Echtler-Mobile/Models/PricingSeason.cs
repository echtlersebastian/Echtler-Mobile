namespace Echtler_Mobile.Models
{
    public class PricingSeason
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public float Price { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; } 
        /// <summary>
        /// Season Table means, that multiple Season Prices can exist concurrently.
        /// </summary>
        public int SeaonTable { get; set; }

    }
}

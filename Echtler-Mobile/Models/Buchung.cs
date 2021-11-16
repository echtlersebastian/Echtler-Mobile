namespace Echtler_Mobile.Models
{
    public class Buchung
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public int WohnmobilID { get; set; }
        public string Name { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public float Price { get; set; }

    }
}

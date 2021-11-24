using Echtler_Mobile.Data;
using Echtler_Mobile.Models;

namespace Echtler_Mobile.Repositories
{
    public class CalendarRepository : ICalendarRepository
    {
        private readonly ApplicationDbContext _context;

        public CalendarRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public bool isDateAvailable(DateTime date)
        {
            var bookingsOnTheDay = _context.Buchungen.Where(x => x.StartDate.Date <= date.Date && x.EndDate.Date >= date.Date); 
            int WomoCount = _context.Wohnmobile.Count();
            int bookingCount = bookingsOnTheDay.Count();

            if(bookingCount < WomoCount)
            {
                return true;
            }
            else
            {
                return false;
            }



        }
        public List<DateTime> getAllBookedDates()
        {
            var allBookings = _context.Buchungen.Where(x => x.EndDate <= DateTime.Now.AddYears(2)) ;
            var bookedDates = new List<DateTime>();

            foreach (Buchung b in allBookings)
            {
                for (var dt = b.StartDate; dt <= b.EndDate; dt = dt.AddDays(1))
                {
                    bookedDates.Add(dt.Date);
                }
            }

            return bookedDates.Distinct().ToList() ;


        }
        public bool isDateRangeAvailable(DateTime startdate, DateTime enddate)
        {
            var bookingsDuringThisTime = _context.Buchungen.Where(x => (x.StartDate.Date <= startdate.Date && enddate.Date <= x.EndDate.Date) || (startdate.Date <= x.StartDate.Date && (enddate.Date <= x.EndDate.Date && enddate.Date > x.StartDate.Date)) || (enddate.Date >= x.EndDate.Date && (enddate.Date >= x.StartDate.Date && startdate.Date < x.EndDate.Date)) || (x.StartDate.Date >= startdate.Date && enddate.Date >= x.EndDate.Date)).ToList();

            var WomosBelegt = bookingsDuringThisTime.Select(o => o.WohnmobilID).Distinct().ToList();
            int WomoCount = _context.Wohnmobile.Count();
            if (!WomosBelegt.Any())
            {
                return true;
            }
            if (WomosBelegt.Count == WomoCount)
            {
                return false;
            }else if(WomosBelegt.Count > WomoCount)
            {
                throw new ArgumentNullException("Not able to check Date Range, because more campers are busy than are in the system.");
            }
            else
            {
                return true;
            }


        }
    }
}

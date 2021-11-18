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

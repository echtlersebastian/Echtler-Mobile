namespace Echtler_Mobile.Repositories
{
    public interface ICalendarRepository
    {
        bool isDateRangeAvailable(DateTime startdate, DateTime enddate);
        bool isDateAvailable(DateTime date);
        List<DateTime> getAllBookedDates();
    }
}

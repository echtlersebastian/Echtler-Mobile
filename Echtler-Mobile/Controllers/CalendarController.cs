using Microsoft.AspNetCore.Mvc;
using Echtler_Mobile.Models;
using Echtler_Mobile.Repositories;
using Microsoft.AspNetCore.Authorization;

namespace Echtler_Mobile.Controllers
{
    [AllowAnonymous]
    [ApiController]
    public class CalendarController : Controller
    {
        private readonly ICalendarRepository _calendarRepository;

        public CalendarController(ICalendarRepository calendarRepository)
        {
            _calendarRepository = calendarRepository;
        }
        [Route("api/Calendar/isDateRangeAvailable")]
        [HttpGet]
        public bool isDateRangeAvailable(DateTime startDate, DateTime endDate)
        {
            return _calendarRepository.isDateRangeAvailable(startDate, endDate);
        }
    }
}

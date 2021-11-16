using Echtler_Mobile.Models;
using Echtler_Mobile.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Echtler_Mobile.Controllers
{
    [Authorize]
    [ApiController]
    public class BuchungController : ControllerBase
    {
        private readonly IBuchungRepository _buchungRepository;

        public BuchungController(IBuchungRepository buchungRepository)
        {
            _buchungRepository = buchungRepository;
        }
        [Route("api/Buchung/Details")]
        [HttpGet]
        // GET: BuchungController
        public async Task<ActionResult<Buchung>> Detials(int id)
        {
            return await _buchungRepository.GetBuchung(id);
        }

        [Route("api/Buchung/GetBuchungen")]
        [HttpGet]
        // GET: BuchungController/Details/5
        public IEnumerable<Buchung> GetBuchungen()
        {
            return _buchungRepository.GetBuchungen();
        }

        [Route("api/Buchung/Create")]
        [HttpPost]
        // GET: BuchungController/Create
        public async Task<ActionResult<Buchung>> Create([FromBody] Buchung buchung)
        {
            var newBuchung = await _buchungRepository.CreateBuchung(buchung);
            return CreatedAtAction(nameof(Buchung),new {id = newBuchung.Id}, newBuchung);
        }
        [Route("api/Buchung/Update")]
        [HttpPost]
        public async Task<Buchung> Update(Buchung buchung)
        {
            return await _buchungRepository.UpdateBuchung(buchung);
        }
        [Route("api/Buchung/Delete")]
        [HttpDelete]
        public async Task<ActionResult> Delete(int id)
        {
            var recordToDelete = await _buchungRepository.GetBuchung(id);
            if (recordToDelete == null)
                return NotFound();
            await _buchungRepository.DeleteBuchung(recordToDelete.Id);
            return NoContent();
        }
    }
}

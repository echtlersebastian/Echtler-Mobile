using Echtler_Mobile.Models;
using Echtler_Mobile.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Echtler_Mobile.Controllers
{
    [Authorize]
    [ApiController]
    public class WohnmobilController : ControllerBase
    {
        private readonly IWohnmobilRepository _wohnmobilRepository;

        public WohnmobilController(IWohnmobilRepository wohnmobilRepository)
        {
            _wohnmobilRepository = wohnmobilRepository;
        }

        // GET: WohnmobilController/Details/5
        [Route("api/Wohnmobil/details")]
        [HttpGet]
        public async Task<ActionResult<Wohnmobil>> Details(int id)
        {
            return await _wohnmobilRepository.GetWohnmobil(id);
        }

        [Route("api/Wohnmobil/GetWohnmobils")]
        [HttpGet]
        public IEnumerable<Wohnmobil> GetWohnmobils()
        {
            return _wohnmobilRepository.GetWohnmobils();
        }

        // POST: WohnmobilController/Create
        [Route("api/Wohnmobil/Create")]
        [HttpPost]
        public async Task<ActionResult<Wohnmobil>> Create([FromBody] Wohnmobil womo)
        {
            var newWohnmobil = await _wohnmobilRepository.CreateWohnmobil(womo);
            return CreatedAtAction(nameof(newWohnmobil), new { id = newWohnmobil.Id }, newWohnmobil);
        }

        // POST: WohnmobilController/Update/5
        [Route("api/Wohnmobil/Update")]
        [HttpPost]
        public async Task<Wohnmobil> Update(Wohnmobil womo)
        {
           return await _wohnmobilRepository.Update(womo);
        }

        // GET: WohnmobilController/Delete/5

        [Route("api/Wohnmobil/Delete")]
        [HttpDelete]
        public async Task<ActionResult> Delete(int id)
        {
            var recordToDelete = await _wohnmobilRepository.GetWohnmobil(id);
            if (recordToDelete == null)
                return NotFound();
            await _wohnmobilRepository.Delete(recordToDelete.Id);
            return NoContent();

        }
    }
}

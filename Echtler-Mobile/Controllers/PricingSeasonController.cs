using Echtler_Mobile.Models;
using Echtler_Mobile.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Echtler_Mobile.Controllers
{

    [Authorize]
    [ApiController]
    public class PricingSeasonController : ControllerBase
    {
        private readonly IPricingSeasonRepository _pricingSeasonRepository;

        public PricingSeasonController(IPricingSeasonRepository pricingSeasonRepository)
        {
            this._pricingSeasonRepository = pricingSeasonRepository;
        }
        // GET: PricingSeasonController
        [Route("api/PricingSeasons/Details")]
        [HttpGet]
        public async Task<ActionResult<PricingSeason>> Detials(int id)
        {
            return await _pricingSeasonRepository.GetSeason(id);
        }
        [Route("api/PricingSeasons/GetSeasons")]
        [HttpGet]
        // GET: BuchungController/Details/5
        public IEnumerable<PricingSeason> GetBuchungen()
        {
            return _pricingSeasonRepository.GetSeasons();
        }

        [Route("api/PricingSeasons/Create")]
        [HttpPost]
        // GET: PricingSeasonController/Create
        public async Task<ActionResult<PricingSeason>> Create([FromBody] PricingSeason season)
        {
            var newSeason = await _pricingSeasonRepository.Create(season);
            return CreatedAtAction(nameof(PricingSeason), new { id = newSeason.Id }, newSeason);
        }

        [Route("api/PricingSeasons/Update")]
        [HttpPost]
        public async Task<PricingSeason> Update(PricingSeason season)
        {
            return await _pricingSeasonRepository.Update(season);
        }
        [Route("api/PricingSeasons/Delete")]
        [HttpDelete]
        public async Task<ActionResult> Delete(int id)
        {
            var recordToDelete = await _pricingSeasonRepository.GetSeason(id);
            if (recordToDelete == null)
                return NotFound();
            await _pricingSeasonRepository.Delete(recordToDelete.Id);
            return NoContent();
        }


    }

}


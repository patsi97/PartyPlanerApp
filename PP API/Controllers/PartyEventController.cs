using Microsoft.AspNetCore.Mvc;
using PP.API.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PP.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class PartyEventController : ControllerBase
    {

        private PartyContext _partyContext;
        //creating constructor, dependency injection
        public PartyEventController(PartyContext partyContext)
        {
            //initialization 
            _partyContext = partyContext;
        }
            // GET api/values
            [HttpGet]
            public ActionResult<IEnumerable<PartyEvent>> Get()
            {
            return _partyContext.PartyEvents;
            }

            // GET api/values/5
            [HttpGet("{id}")]
            public ActionResult<string> Get(int id)
            {
                return "value";
            }

            // POST api/values
            [HttpPost]
            public void Post([FromBody] string value)
            {
            }

            // PUT api/values/5
            [HttpPut("{id}")]
            public void Put(int id, [FromBody] string value)
            {
            }

            // DELETE api/values/5
            [HttpDelete("{id}")]
            public void Delete(int id)
            {
            }
        }
    }
  

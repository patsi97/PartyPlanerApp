using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PP.API.DAL
{
    public class PartyEvent
    {
        public Guid ID { get; set; } = Guid.NewGuid();
        public string Name { get; set; }
        public DateTime Start { get; set; }
        public int NumberOfPeople { get; set; }
        public string Location { get; set; }
        
}
}

using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PP.API.DAL
{
    public class PartyContext: DbContext
    {
        public PartyContext(DbContextOptions options):base(options)
        {
            
        }

        public DbSet<PartyEvent> PartyEvents { get; set; }
    }

}

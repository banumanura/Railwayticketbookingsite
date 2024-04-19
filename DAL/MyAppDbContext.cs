﻿using System.Collections.Generic;
using Train_Web_Project.Models;
using Microsoft.EntityFrameworkCore;

namespace Train_Web_Project.DAL
{
    public class MyAppDbContext : DbContext
    {
        public MyAppDbContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Train_Project> Info { get; set; }
    }
}

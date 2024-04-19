using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using Train_Web_Project.DAL;
using Train_Web_Project.Models;

namespace Train_Web_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly MyAppDbContext _context;

        public UserController(MyAppDbContext context)
        {
            _context = context;
        }

        [HttpPut("{id}")] //edit API 
        public IActionResult Put(int id, [FromBody] Train_Project model)
        {

            try
            {
                var t = _context.Info.Find(id);
                t.Date = model.Date;
                t.ArrivalLocation = model.ArrivalLocation;
                t.DepatureLocation = model.DepatureLocation;
                t.Price = model.Price;
                _context.SaveChanges();
                return Ok("working");
            }
            catch (Exception)
            {
                return BadRequest("not working");
            }
        }

        [HttpGet] //get api
        public IActionResult Get()
        {
            try
            {
                var data = _context.Info.ToList();
                return Ok(data);
            }
            catch (Exception)
            {
                return BadRequest("not working");
            }
        }

        [HttpDelete("{id}")] //delete api
        public IActionResult Delete(int id)
        {
            try
            {
                var info = _context.Info.Find(id);
                _context.Info.Remove(info);
                _context.SaveChanges();
                return Ok("working");
            }
            catch (Exception)
            {
                return BadRequest("not working");
            }
        }

        [HttpPost]      //add api
        public IActionResult Post(Train_Project model)
        {
            try
            {            
                _context.Info.Add(model);
                _context.SaveChanges();
                return CreatedAtAction(nameof(Get), new { id = model.Id });
            }
            catch (Exception)
            {
                return BadRequest("not working");
            }
        }

        [HttpGet("detail")] //add api
        public IActionResult SearchInfo([FromQuery] string arrivalLocation, [FromQuery] string depatureLocation, [FromQuery] DateTime date)
        {
            try
            {
                arrivalLocation = arrivalLocation.ToLower();
                depatureLocation = depatureLocation.ToLower();

                var v = new DateOnly(date.Year, date.Month, date.Day);

                var vals = _context.Info.Where(val =>
                    val.ArrivalLocation.ToLower() == arrivalLocation &&
                    val.DepatureLocation.ToLower() == depatureLocation &&
                    val.Date == v).ToList();              
                return Ok(vals);
            }
            catch (Exception)
            {
                return BadRequest("not working");
            }
        }
    }
}

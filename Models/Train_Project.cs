using System.ComponentModel.DataAnnotations;

namespace Train_Web_Project.Models
{
    public class Train_Project
    {
        public int Id { get; set; }
        [Required]
        public DateOnly Date { get; set; }
        [Required]
        public string ArrivalLocation { get; set; }
        [Required]
        public string DepatureLocation { get; set; }
        [Required]
        public int Price { get; set; }
    }
}

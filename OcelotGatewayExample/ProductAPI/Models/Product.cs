﻿namespace ProductAPI.Models
{
    public class Product
    {
        public int ProductId { get; set; }
        public string? ProductName { get; set; }
        public string? ProductDescrption { get; set; }
        public int ProductPrice { get; set; }
        public int ProductStock { get; set; }
    }
}

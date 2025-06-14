using Microsoft.AspNetCore.Mvc;
using ProductAPI.Services;
using ProductAPI.Models;

namespace ProductAPI.Controllers
{
    public class ProductCotnroller : ControllerBase
    {
        private readonly IProductService productService;
        public ProductCotnroller(IProductService _productService) 
        {
            productService = _productService;
        }

        [HttpGet]
        public IEnumerable<Product> ProductList()
        {
            var productList = productService.GetProductList();
            return productList;
        }

        [HttpGet("{id}")]
        public Product GetProductById(int id)
        {
            return productService.GetProductById(id);
        }

        [HttpPost]
        public Product AddProduct(Product product)
        {
            return productService.AddProduct(product);
        }

        [HttpPut]
        public Product UpdateProduct(Product product)
        {
            return productService.UpdateProduct(product);
        }

        [HttpDelete("{id}")]
        public bool DeleteProduct(int id)
        {
            return productService.DeleteProduct(id);
        }
    }
}

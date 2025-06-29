import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ProductsService } from '../../Data/Services/products.service';
import { Product } from '../../Data/Models/Product';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'ocelot-products',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  ProductList?: Observable<Product[]>;
  ProductList1?: Observable<Product[]>;
  productForm: any;
  productId = 0;

  constructor(private formBuilder: FormBuilder, private productService: ProductsService, private router: Router, private toastr: ToastrService) {

  }

  public ngOnInit() {
    this.productForm = this.formBuilder.group({
      productName: ['', [Validators.required]],
      productPrice: ['', [Validators.required]],
      productDescription: ['', [Validators.required]],
      productStock: ['', [Validators.required]]
    });
    this.getProductList();
  }

  public getProductList() {
    this.ProductList1 = this.productService.getProductList();
    this.ProductList = this.ProductList1;
  }

  public postProduct(product: Product) {
    const product_Master = this.productForm.value;
    this.productService.postProductData(product_Master).subscribe(() => {
      this.getProductList();
      this.productForm.reset();
      this.toastr.success('Data Saved Successfully');
    });
  }

  public productDetailsToEdit(id: string) {
    this.productService.getProductDetailsById(id).subscribe(productResult => {
      this.productId = productResult.productId;
      this.productForm.controls['productName'].setValue(productResult.productName);
      this.productForm.controls['productPrice'].setValue(productResult.productPrice);
      this.productForm.controls['productDescription'].setValue(productResult.productDescription);
      this.productForm.controls['productStock'].setValue(productResult.productStock);
    })
  }

  public updateProduct(product: Product) {
    product.productId = this.productId;
    const product_Master = this.productForm.value;
    this.productService.updateProduct(product_Master).subscribe(() => {
      this.toastr.success('Data Updated Successfully');
      this.productForm.reset();
      this.getProductList();
    })
  }

  public deleteProduct(id: number) {
    if (window.confirm('Do you want to delete this product?')) {
      this.productService.deleteProductById(id).subscribe(() => {
        this.toastr.success('Data Deleted SUccessfully');
        this.getProductList();
      })
    }
  }

  public clear(product: Product) {
    this.productForm.reset();
  }
}

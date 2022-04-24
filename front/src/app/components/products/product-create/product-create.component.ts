import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from './product.model';
import { ProductService } from '../../../service/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductDTO } from 'src/app/model/Products.dto';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
})
export class ProductCreateComponent implements OnInit {
  form: FormGroup;
  valores: number;
  feriados: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  arr: number[] = [1, 2, 3];
  product: Product = {
    name: '',
    price: 0,
  };
  constructor(
    private service: ProductService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit(): void {}

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required]],
      valores: [0]
    });
  }

  createProduct() {
    
    const newProduct = new ProductDTO();
    Object.assign(newProduct, this.form.value);

    console.log(newProduct);

    // this.service.create(newProduct).subscribe(() => {
    //   this.service.showMessage('Operação executada');
    //   this.router.navigate(['/products']);
    // });
  }

  addValores() {
    const equals = this.arr.some((item) => item === this.valores);

    if (equals) {
      return;
    }

    this.arr.push(this.valores);
  }

  removeValores(index: number) {
    this.arr.splice(index, 1);
  }

  backToProduct() {
    return this.router.navigate(['/products']);
  }
}

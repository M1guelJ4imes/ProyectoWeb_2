import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../interfaces/products';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrl: './add-edit-product.component.css'
})
export class AddEditProductComponent {
  form: FormGroup;
  loading:boolean=false;
  id: number;
  operacion: string= 'Agregar ';

  constructor(private fb: FormBuilder,
    private _productService: ProductService,
    private router: Router,
    private toastr: ToastrService,
  private aRouter: ActivatedRoute ) {
    this.form= this.fb.group({
      name: ['',Validators.required],
      description: ['',Validators.required],
      price: [null,Validators.required],
      stock: [null,Validators.required]
    })
    this.id= Number(aRouter.snapshot.paramMap.get('id'));
    console.log(this.id)
  }

  ngOnInit(): void{
    if(this.id !=0){
      //Es editar
      this.operacion= 'Editar ';
      this.getProducts(this.id);
    }

  }

  getProducts(id:number){
    this.loading=true;
    this._productService.getProduct(id).subscribe((data:Product)=>{
      console.log(data)
      this.loading=false
      this.form.setValue({
        name: data.name,
        description: data.description,
        price: data.price,
        stock: data.stock
      })
    })
  }

  addProduct() {
    console.log(this.form.value.name);

    const products: Product= {
      name: this.form.value.name,
      description: this.form.value.description,
      price: this.form.value.price,
      stock: this.form.value.stock
    }
    
    this.loading= true;
    if(this.id !==0){
      //Editar
      products.id= this.id;
      this._productService.updateProduct(this.id, products).subscribe(() => {
        this.loading=false;
        this.toastr.info(`El producto ${products.name} fue actualizado con exito!`, 'Producto  Actualizado');
        this.router.navigate(['/']);
      })
    }else{
      //Es agregar
      this._productService.saveProduct(products).subscribe(() => {
      this.loading=false;
      this.toastr.success(`El producto ${products.name} fue registrado con exito!`, 'Producto Registrado');
      this.router.navigate(['/']);
    })
    }

    
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import {MatDialogRef} from  '@angular/material/dialog'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {


  productList = ["Voice", "SMS", "WhatsApp"]
  productForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, private api : ApiService, private dialogRef : MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      company : ['', Validators.required],
      category : ['', Validators.required],
      productList : ['', Validators.required],
      price : ['', Validators.required],
      date : ['', Validators.required],
      comment : ['', Validators.required],
      products : ['', Validators.required],
    })
  }

addProduct(){
  // if(this.productForm.valid){
  //   this.api.postProduct(this.productForm.value)
  //   .subscribe({
  //     next:()=>{
  //       alert("Product add Successfully")
  //       this.productForm.reset();
  //       this.dialogRef.close('save');
  //     },
  //     error:()=>{
  //       alert("Error while adding the product")
  //     }
  //   })
  // }

  
  console.log(this.productForm.value);
}


}

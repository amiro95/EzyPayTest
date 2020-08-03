import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ezypay-home',
  templateUrl: './ezypay-home.component.html',
  styleUrls: ['./ezypay-home.component.scss']
})
export class EzypayHomeComponent implements OnInit {
  validateForm!: FormGroup;
  type: any;
  MonthLov: any[] = [
    {
    label: '1',
    value: 1,
    },
    {
      label: '2',
      value: 2,
    },
    {
      label: '3',
      value: 3,
    }];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      amount: [null],
      type: [null],
      duration: [null]
    });
  }



  submitForm(): void {
    console.log(this.validateForm.value);
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  typeChange(){
    this.type = this.validateForm.value.type;
    console.log("TYPE: " + this.type);
  }

  onChange(event:any){
    console.log(event)
  }
}

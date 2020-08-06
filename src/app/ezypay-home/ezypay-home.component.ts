import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EzypayHomeService } from '../ezypay-home/ezypay-home.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-ezypay-home',
  templateUrl: './ezypay-home.component.html',
  styleUrls: ['./ezypay-home.component.scss']
})
export class EzypayHomeComponent implements OnInit {
  subscriptionForm!: FormGroup;
  type: any;
  minVal = 1;
  maxVal: number;
  tooltipInfo: string;
  subsAmount: any;
  subsType: any;
  subsDate = '';
  subsResp: any[] = [];

  constructor(
    private fb: FormBuilder,
    private api: EzypayHomeService, 
    private nzMessage: NzMessageService
  ) { }

  ngOnInit(): void {
    this.subscriptionForm = this.fb.group({
      amount: [null],
      type: [null],
      duration: [null]
    });
  }


  submitForm(): void {
    const subscriptionType = this.subscriptionForm.value.type;
    const amount = this.subscriptionForm.value.amount;
    const duration = this.subscriptionForm.value.duration;
    this.api.subscription(subscriptionType,amount,duration).subscribe(
      resp => {
        this.subsDate = '';
        this.subsAmount = resp.amount;
        this.subsType = resp.subscriptionType;
        resp.invoiceDates.forEach(obj => {
          this.subsDate += obj + '<br>';
        });
        document.getElementById('date').innerHTML = this.subsDate;
        this.nzMessage.create('success', 'Subscription Successful');
      },
      err => {
        this.nzMessage.create('error', 'Subscription Failed');
      }
    )

  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  typeChange() {
    this.type = this.subscriptionForm.value.type;
    switch (this.type) {
      case 'Daily':
        this.maxVal = 90;
        this.tooltipInfo = 'Maximum is 90';
        break;
      case 'Weekly':
        this.maxVal = 12;
        this.tooltipInfo = 'Maximum is 12';
        break;
      case 'Monthly':
        this.maxVal = 3;
        this.tooltipInfo = 'Maximum is 3';
        break;
    }
    console.log("TYPE: " + this.type);
  }

  onChange(event: any) {
    console.log(event)
  }
}

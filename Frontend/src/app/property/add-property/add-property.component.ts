import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('staticTabs') staticTabs?: TabsetComponent;
  constructor(private router: Router) { }

  propertyType : Array<string> = ['House','Apartment','Dupler'];
  furnishType : Array<string> = ['Fully','Semi','Unfernished'];

  ngOnInit(): void {
  }

  onBack(){
    this.router.navigate(['/']);
  }

  onSubmit(Form: NgForm){
    console.log(Form);
  }

  selectTab(tabId: number) {
    if (this.staticTabs?.tabs[tabId]) {
      this.staticTabs.tabs[tabId].active = true;
      console.log(tabId);
    }
  }
}

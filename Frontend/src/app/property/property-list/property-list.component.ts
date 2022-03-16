
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/Service/housing.service';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: IProperty[];
  sellFlag: number = 1;
  constructor(private route: ActivatedRoute, private hosuingService:HousingService) { }

  ngOnInit(): void {
    let current_route : string = this.route.snapshot.url.toString();
    if(current_route === "rent-property"){
      this.sellFlag = 0;
    }
    //console.log(this.sellFlag);
    
    this.hosuingService.getAllProperties(this.sellFlag).subscribe(
    response => {
      this.properties = response;
      //console.log(response);
      },
      error =>{
        console.log(error);
      }
    )

  }

}

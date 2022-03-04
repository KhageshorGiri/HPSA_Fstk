
import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/Service/housing.service';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: IProperty[];

  constructor(private hosuingService:HousingService) { }

  ngOnInit(): void {

   this.hosuingService.getAllProperties().subscribe(
    response => {
      this.properties = response;
      console.log(response);
      },
      error =>{
        console.log(error);
      }
    )

  }

}

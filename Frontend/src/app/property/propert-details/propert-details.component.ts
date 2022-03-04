import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-propert-details',
  templateUrl: './propert-details.component.html',
  styleUrls: ['./propert-details.component.css']
})
export class PropertDetailsComponent implements OnInit {

  public propertyID : number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.propertyID = this.route.snapshot.params['id'];
  }

}

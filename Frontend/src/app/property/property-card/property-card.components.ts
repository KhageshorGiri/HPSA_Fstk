import { Component } from "@angular/core"

@Component({   
    selector: 'app-property-card',
    templateUrl :'porperty-card.component.html',
    styleUrls: ['porperty-card.component.css']
})

export class PropertyCardComponent { 
    Property: any = {
        "Id":1,
        "Type": "House",
        "Price" : 17000
    }
}
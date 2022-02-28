import { Component, Input } from "@angular/core"

@Component({   
    selector: 'app-property-card',
    templateUrl :'porperty-card.component.html',
    styleUrls: ['porperty-card.component.css']
})

export class PropertyCardComponent { 

    @Input() property : any

    
}
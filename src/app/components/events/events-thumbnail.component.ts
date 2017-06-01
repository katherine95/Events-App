import { Component, Input, Output } from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    template: `
    <div>
    <div class="well hoverwell thumbnail" id="demo">
        <h2>{{event?.name}}</h2>
        <div>Date:{{event?.date}}</div>
        <div [ngSwitch]="event?.time">
        Time: {{event?.time}}
        <span *ngSwitchCase='8.00 am'> Early start</span>
        <span *ngSwitchCase='10.00 am'> Late start</span>
        <span *ngSwitchDefault> Normal start</span></div>
        <div>Price:$ {{event?.price}}</div>
        <div>
        Location:{{event?.location?.address}}, {{event?.location?.city}}, {{event?.location?.country}}
        </div>
    </div>
    </div>
    `,
    styles:[`
    .thumbnail { min-height: 210px; }
    .pad-left { margin-left: 10; }
    .well div { color:bbb;}
    `]
})
export class EventsThumbnailComponent{
    @Input() event:any

    }
 
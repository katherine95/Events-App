"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var EventsThumbnailComponent = (function () {
    function EventsThumbnailComponent() {
    }
    return EventsThumbnailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], EventsThumbnailComponent.prototype, "event", void 0);
EventsThumbnailComponent = __decorate([
    core_1.Component({
        selector: 'event-thumbnail',
        template: "\n    <div>\n    <div class=\"well hoverwell thumbnail\" id=\"demo\">\n        <h2>{{event?.name}}</h2>\n        <div>Date:{{event?.date}}</div>\n        <div [ngSwitch]=\"event?.time\">\n        Time: {{event?.time}}\n        <span *ngSwitchCase='8.00 am'> Early start</span>\n        <span *ngSwitchCase='10.00 am'> Late start</span>\n        <span *ngSwitchDefault> Normal start</span></div>\n        <div>Price:$ {{event?.price}}</div>\n        <div>\n        Location:{{event?.location?.address}}, {{event?.location?.city}}, {{event?.location?.country}}\n        </div>\n    </div>\n    </div>\n    ",
        styles: ["\n    .thumbnail { min-height: 210px; }\n    .pad-left { margin-left: 10; }\n    .well div { color:bbb;}\n    "]
    })
], EventsThumbnailComponent);
exports.EventsThumbnailComponent = EventsThumbnailComponent;
//# sourceMappingURL=events-thumbnail.component.js.map
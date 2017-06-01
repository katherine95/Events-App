"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
// Component Imports
var home_component_1 = require("./components/events/home.component");
var events_list_component_1 = require("./components/events/events-list.component");
var events_thumbnail_component_1 = require("./components/events/events-thumbnail.component");
var navbar_component_1 = require("./nav/navbar.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [
            home_component_1.HomeComponent,
            events_list_component_1.EventsListComponent,
            events_thumbnail_component_1.EventsThumbnailComponent,
            navbar_component_1.NavBarComponent
        ],
        bootstrap: [home_component_1.HomeComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
import { Component } from '@angular/core';

@Component({
    selector: 'home-app',
    template: `
    <nav-bar></nav-bar>
    <events-list></events-list>`
})

export class HomeComponent {

    /**
     * Here is where you add all the logic for the component. Remember, since you are using
     * TypeScript, you should strong type all your variables.
     * 
     * For the template definition, you can decide to use the inline definitions like I have
     * in this example, or use an actual HTML file.
     * To use the HTML file, change the template tag to templateUrl, delete the content within
     * the `` then put the value as the path to the HTML file, in this case it will be:
     * 
     * templateUrl: './home.component.html'
     */
}
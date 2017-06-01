# Angular Starter Repository

## Recommended
- Visual Studio Code
- Node v6 
- Npm v3.10.10

## Getting started
To start working on the code, fork this repo then clone it to your local environment by following the instructions below:

- Click on the `Fork` link on the top right part of this screen and wait for the fork to complete
- Once done, you will have an exact copy in your repo
- Clone it or download it to your local development environment
- Once downloaded, cd into the directory and run `npm install` to install all the dependencies as specified in the package.json file
- To test that your local copy is working, run `npm start`
- Note that `.js` and `.js.map` files are hidden in the text editor (Visual Studio Code) because they are not necessarilly used. The setting for this is in the `.vscode` folder
- Ignore the many files that are in the editor for now. Focus on getting this running first then we can go through the files
 
Now you can start working on the new project.

## Creating the root component
The files are already bootstrapped and as long as the code was visible in the browser following the steps above, you should have everything you need.

To start working on the root component, follow the steps below (For this example, I will use the home component):
- create a new folder inside the components folder (app/components) with the name being the component you want to create
- inside the new folder, add the three files `*.component.ts`, `*.component.html`, `*.component.css`
- the `*.component.ts` file holds all the logic for the component you are working on
- the `*.component.html` file holds the view for the component if you decide not to use the inline templates that are defined in the component
- the `*.component.css` file holds all the styles for the component

Since this is the root component, we have to follow some steps to make sure it renders to the browser.
- First, we have to register it in the `app.module` file. An app can have many modules but only one root module. In this case we use only one; the `app.module.ts` file
- To register it, we first import the component then add it to `declarations`: because we have to declare all the components managed by the module in this array. Also, since this is the root module (the first module to be loaded), we have to add it to the bootstrap array
- run `npm start` if the server wasn't already running and if you had defined an inline template in the `*.component.ts` file, you should now see it in the browser
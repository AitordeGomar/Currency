# Currency

# What is it?

Currency is an Angular project where you can choose different currencies exchanges rates to Polish złoty. You are able to add them to a list to keep them organized, as well as removing them individually or all of them at once with a confirmation pop-up.

# Technical Info

This project has been created by Aitor de Gomar Sánchez requested by https://bluewom.com/en . The task consisted on creating a simple web user interface which connects with NBP web API (http://api.nbp.pl/) including:
* List of favourite currencies, which user wants to follow
* Possibility to add currency to the list
* Possibility to remove one or all currencies from the list
* Possibility to cancel currency remove - confirmation popup

# Deployment service

You will find this repository on the following link: https://currency-degomar.web.app/ hosted by Firebase.

# Sequence / logic explained

* api.service.ts file is created to get data from the external web API.
* app.component file contains a navigation bar and a router-outlet to toggle home/currencyList view.
* navbar.component includes two simple buttons to navigate,
* currencylist.component contains some ngIf directives according to boolean values and tables that collect and display the data from api.service.ts.
* home.component shows a select HTML tag with some options (currencies from table C) to choose and a "add" button managed by a JavaScript switch statement and a if conditional that push the selected option on a displayed table in case it was not already added (repeated values are avoided).
* On clicking the "add" button, a table shows up: it uses a ngFor to map a favourite list Array and display the information adding a button which you can use to delete it.
* Finally the "remove" buttons is set to show a confirmation pop-up in case it was pressed by accident. 2 kind of buttons: "remove all" button clears out your array of FavList after confirming. Individual button confirmation message is customized to show you the currency code (USD, EUR...) you are clicking in order to avoid any misunderstading due to the short distance between each button.

# Structure

Currency is divided into two different parts:

## Home view

Home is structured into a title and a navigation bar (common in both parts) and a dropdown list to choose and add to a chart that is hidden as long as the favourite list is empty and it appears whenever any currency is added.

This chart shows the code symbol, ask price, bid price and a remove button for each one.

## Currency List view

This view contains the title and the navigation bar and you are asked to choose one of the three options (different types) and, once you choose any, you are able to see the whole list with the name, code and mid (or ask and bid) price.


## Personal considerations

* The rates are not up-to-date. I chose an arbitrary day because sometimes today info throws a 404 error.
* The favourite list does not save before you change the view (navigating to Currency list view) so you will find it empty when you are back to Home view.
* I considered to keep a basic style. I discarded a bif variety of colours and effects in order to show a simple and professional website.
* If you navigate through different commits you will find many elements not included in the final version

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

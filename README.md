# Learn Angular RAAAAAHHH

## What is Angular ?

- Uses a component based architecture.
- Has many built-in features vs React and Vue.

## Installing and Using Angular CLI

- Run the command `npm install @angular/cli --global` (one time for ur machine).

## Create a New project

- Run the command `ng new [project_name]`
- Then answer some project related questions...

## Commands

- Start App in Development Mode -> `ng serve`.
- Create a component -> `ng generate component [directory/path] [--standalone]`.
  - `[directory/path]` is relative from 'src/app' directory.
  - `--standalone` (optional, tho default) makes the component a standalone components.
    - `--standalone=false` to not make it a standalone.
- Create a service -> `ng generate service [directory/path]`
- Create a module -> `ng generate module [directory/path] [--routing]`
  - `--routing` (optional) creates a dedicated file for **in-module routing**
    - 'in-module' routing is the routing inside a specific module.
- Create a pipe -> `ng generate pipe [directory/path]`

## Some Concepts

#### Services

- Functionality that can be accessed by many components. Put in a separate controller (a separate collection of methods).
- App-wide Scope.
- Tasks like fetching data from server, validating user input, or logging directly to the console.

#### Observables

- Similar to a Promise. Handles asyncronous operations.
- Are a stream of events or data.
- Observables vs Promises:
  - Observable is 0 to Many Results; Promises is 0 to 1 Result.
  - Observables can stream data over a period of time, than sending data all at once;
    Promises sends all data once it is completed.

**Subscribing to Observables**

- Without subscribing, the stream (observable) wont start to emit values.
- Has 3 Methods:
  1. To Process EACH TIME an item (can be data or an event) is emitted from observable
  2. Process any error that occurs
  3. Clean up everything once the observer completes. (Seldom Used)

#### Standalone Components

- Allows to write components, directives and pipes without creating an associated '@NgModule'
- Kinda like made to make creating components better than with NgModules.
- Self Contained, and directly MANAGE THEIR OWN dependencies in the 'imports'.
- Lazy-loaded.
- This is the '@Component' with "standalone: true".

#### Modules

- (Not recommended tho since Standalone components is introduced now...)
- The one with the '@NgModule'.
- Used to separate and segment application into parts.
- Kinda like a mini-application in your app.
- Ex: A huge App with a dashboard, user, profile sections that has lots of components and stuff,
  - Modules Can help organize load.
  - Modules use lazy loading (only requesting specific/necessary parts) instead of loading the whole app.

#### Pipes

- Are simple functions used in templates to accept input value and return a transformed value.
  - Ex: Formatting Date, Trunctating text, adding currency signs to prices, etc.
- Can be used throughout the application

## Notes ko

- Component Library: [PrimeNG](https://primeng.org/installation) \(Seems Good!\)
- Wag muna pansinin yung `.spec.ts` files.

* [Tutorial Link](https://www.youtube.com/watch?v=f7BJFTEbc10&t=295s)

#### Component Stucture

- `.component.html`, `.component.scss`, `.component.spec.ts`, and `.component.ts` comprises 1 component.
- Normally, any component will be in a dedicated directory.
- The main file of the component is the `.component.ts` file.
- `.spec.ts` file is only for testing. Can ignore (for now). Its not connected with the component in `.component.ts` file.

#### Extensions Installed

- Angular Language Service
- Auto Rename Tag

---

## Topics

- Components - `home/home.component.ts`
- Observables - `services/products.services.ts`
- Routing - `app.routes.ts`
- Server (Another project but not explained since focus is in angular)
- Services - `services/api.service.ts`
- Dependency Injection - `services/api.service.ts` and `services/products.service.ts`
- Layouting - `app.component.html`, `app.component.ts`, `app/layout`, `styles.scss`
- HTML [Directives](https://angular.dev/guide/directives#tracking-items-with-ngfor-trackby) - `home.component.html` and `home.component.ts`
- Passing Data to Components (@Input) - `product.component.ts`, `product.component.html` and `home.component.html`
- Property Binding - `product.component.html` and `product.component.ts`
- Event Binding (@Output) - `product.component.html` and `product.component.ts`
- Two Way Binding - `product.component.html`
- Input Element Double Binding - `home.component.html`, `home.component.ts` and `product.component.ts`
- Modules - `app/modules/*`, `app.routes.ts`
- Page Routing - `header.component.html` and `header.component.ts`
- Pipes - `app/pipes/*`, `product.component.ts` and `product.component.html`
- Popup Dialog - `home.ts`, `home.html`, `form-dialog.ts`, `form-dialog.html`, `product.ts`, and `product.html`
- Form Validator - `form-dialog.ts` and `form-dialog.html`

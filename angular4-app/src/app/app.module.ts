import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { SandboxComponent } from './components/component1/sandbox.component';
import { Sandbox2Component } from './components/component2/sandbox2.component';
import {ObjectComponent} from './components/object/object.component';
import { Component3Component } from './components/component3/component3.component';
import { Component4Component } from './components/component4/component4.component';
import { Component5Component } from './components/component5/component5.component';
import { Component6Component } from './components/component6/component6.component';
import { Component7Component } from './components/component7/component7.component';
import { Component8Component } from './components/component8/component8.component';
import { EventsComponent } from './components/events/events.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { FormSubmitionComponent } from './components/form-submition/form-submition.component';
import { TemplateDrivenValidComponent } from './components/template-driven-valid/template-driven-valid.component';

@NgModule({
  declarations: [
    AppComponent,
    SandboxComponent,
    Sandbox2Component,
    ObjectComponent,
    Component3Component,
    Component4Component,
    Component5Component,
    Component6Component,
    Component7Component,
    Component8Component,
    EventsComponent,
    TwoWayBindingComponent,
    FormSubmitionComponent,
    TemplateDrivenValidComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SandboxComponent } from './components/component1/sandbox.component';
import { Sandbox2Component } from './components/component2/sandbox2.component';
import {ObjectComponent} from './components/object/object.component';

@NgModule({
  declarations: [
    AppComponent,
    SandboxComponent,
    Sandbox2Component,
    ObjectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

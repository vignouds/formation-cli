import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormationComponent } from './formation/formation.component';
import { InterpolateComponent } from './interpolate/interpolate.component';
import { DirectiveComponent } from './directive/directive.component';
import { StyleComponent } from './style/style.component';
import { FormationItemComponent } from './formation-item/formation-item.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { LifecycleOnchangeComponent } from './lifecycle-onchange/lifecycle-onchange.component';

@NgModule({
  declarations: [
    AppComponent,
    FormationComponent,
    InterpolateComponent,
    DirectiveComponent,
    StyleComponent,
    FormationItemComponent,
    LifecycleComponent,
    LifecycleOnchangeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

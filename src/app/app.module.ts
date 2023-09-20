import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UnitInputComponent } from './unit-input/unit-input.component';
import { FormsModule } from '@angular/forms';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    AppComponent,
    UnitInputComponent,
    VirtualScrollComponent,
  ],
  imports: [
    BrowserModule,FormsModule,DragDropComponent,ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

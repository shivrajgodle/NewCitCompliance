import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';


import {MenubarModule} from 'primeng/menubar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SidebarModule} from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FlexLayoutModule } from '@angular/flex-layout';
import {TableModule} from 'primeng/table';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuItem} from 'primeng/api';
import {ToggleButtonModule} from 'primeng/togglebutton';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent
  ],
  imports: [
    MenubarModule,
    SidebarModule,
    BrowserAnimationsModule,
    ButtonModule,
    ToolbarModule,
    FileUploadModule,
    HttpClientModule,
    DialogModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    TableModule,
    ToggleButtonModule,
    BrowserModule,
    AppRoutingModule,
    PanelMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
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

import {ToggleButtonModule} from 'primeng/togglebutton';

@NgModule({
  declarations: [
  ],

  imports: [
    SidebarModule,
    ButtonModule,
    SidebarModule,
    ButtonModule,
    ToolbarModule,
    FileUploadModule,
    HttpClientModule,
    DialogModule,
    InputTextModule,
    FormsModule,
    FlexLayoutModule,
    TableModule,
    ReactiveFormsModule,
    ToggleButtonModule
  ],
})
export class SharedModule { }

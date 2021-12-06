import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared_module/shared.module';
import { AdministratorRoutingModule } from './administrator-routing.module';
import { ClientMasterComponent } from './client-master/client-master.component';
import {ToastModule} from 'primeng/toast';
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
import { UserComponent } from './user/user.component';
import {DropdownModule} from 'primeng/dropdown';
import { DocumentManagerComponent } from './document-manager/document-manager.component';
import { ProjectComponent } from './project/project.component';
import { AngularFileUploaderModule } from "angular-file-uploader";
import {CardModule} from 'primeng/card';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuItem} from 'primeng/api';
import { AssignTeamComponent } from './assign-team/assign-team.component';
import { MtProjectsComponent } from './mt-projects/mt-projects.component';



@NgModule({
  declarations: [
    ClientMasterComponent,
    UserComponent,
    DocumentManagerComponent,
    ProjectComponent,
    AssignTeamComponent,
    MtProjectsComponent
  ],
  imports: [
    CommonModule,
    AdministratorRoutingModule,
    SidebarModule,
    ToastModule,
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
    ToggleButtonModule,
    DropdownModule,
    AngularFileUploaderModule,
    PanelMenuModule, 
    CardModule,
    ProgressSpinnerModule   
  ]
})
export class AdministratorModule { }

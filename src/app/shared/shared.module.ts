import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ShowComponent } from "./show/show.component";
import { DropdownDirective } from "./directives/dropdown.directive";
import { NotificationComponent } from './notification/notification.component';





@NgModule({
  declarations: [ShowComponent, DropdownDirective, NotificationComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [CommonModule, FormsModule, ShowComponent],
})

export class SharedModule{}

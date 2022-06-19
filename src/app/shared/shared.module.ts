import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ShowComponent } from "./show/show.component";
import { DropdownDirective } from "./directives/dropdown.directive";





@NgModule({
  declarations: [ShowComponent, DropdownDirective],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [CommonModule, FormsModule, ShowComponent],
})

export class SharedModule{}

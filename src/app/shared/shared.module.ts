import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ShowComponent } from "./show/show.component";




@NgModule({
  declarations: [ShowComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [CommonModule, FormsModule]
})

export class SharedModule{}

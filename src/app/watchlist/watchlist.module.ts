import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { ShowDetailsComponent } from "./show-details/show-details.component";
import { ShowListComponent } from "./show-list/show-list.component";
import { WatchlistEditorComponent } from "./watchlist-editor/watchlist-editor.component";
import { WatchlistComponent } from "./watchlist.component";


@NgModule({
  declarations: [
  WatchlistComponent,
  WatchlistEditorComponent,
  ShowListComponent,
  ShowDetailsComponent
  ],
  imports: [SharedModule, RouterModule]
})
export class WatchlistModule {}

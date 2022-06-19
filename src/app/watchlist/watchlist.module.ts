import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { ShowDetailsComponent } from "./show-details/show-details.component";
import { ShowListComponent } from "./show-list/show-list.component";
import { WatchlistEditorComponent } from "./watchlist-editor/watchlist-editor.component";
import { WatchlistComponent } from "./watchlist.component";
import { WatchlistHomeComponent } from './watchlist-home/watchlist-home.component';


@NgModule({
  declarations: [
  WatchlistComponent,
  WatchlistEditorComponent,
  ShowListComponent,
  ShowDetailsComponent,
  WatchlistHomeComponent
  ],
  imports: [SharedModule, RouterModule]
})
export class WatchlistModule {}

import { NgModule } from "@angular/core";
import { ShowDetailsComponent } from "./show-details/show-details.component";
import { ShowListComponent } from "./show-list/show-list.component";
import { WatchlistEditorComponent } from "./watchlist-editor/watchlist-editor.component";
import { WatchlistComponent } from "./watchlist.component";
import { WatchlistHomeComponent } from './watchlist-home/watchlist-home.component';
import { SortShowsPipe } from "../shared/pipes/sortShows.pipe";
import { WatchlistRoutingModule } from "./watchlist-router.module";
import { SharedModule } from "../shared/shared.module";





@NgModule({
  declarations: [
  WatchlistComponent,
  ShowListComponent,
  WatchlistEditorComponent,
  ShowDetailsComponent,
  WatchlistHomeComponent,
  SortShowsPipe
  ],
  imports: [SharedModule, WatchlistRoutingModule]
})
export class WatchlistModule {}

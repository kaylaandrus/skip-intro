import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { ShowDetailsComponent } from "./show-details/show-details.component";
import { ShowResolverService } from "./show-resolver.service";
import { WatchlistEditorComponent } from "./watchlist-editor/watchlist-editor.component";
import { WatchlistHomeComponent } from "./watchlist-home/watchlist-home.component";
import { WatchlistComponent } from "./watchlist.component";

const routes: Routes = [
  {
    path: "",
    component: WatchlistComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "", component: WatchlistHomeComponent },
      { path: "new", component: WatchlistEditorComponent},
      { path: ":id",
        component: ShowDetailsComponent,
        resolve: [ShowResolverService]
      },
      { path: ":id/edit",
        component: WatchlistEditorComponent,
        resolve: [ShowResolverService]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WatchlistRoutingModule {}

import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

import { ShowResultsComponent } from "./show-results/show-results.component";
import { ShowSearchComponent } from "./show-search/show-search.component";
import { WhatToWatchComponent } from "./what-to-watch.component";


@NgModule({
  declarations: [
    WhatToWatchComponent,
    ShowSearchComponent,
    ShowResultsComponent
  ],
  imports: [SharedModule,
  RouterModule.forChild([{ path: "", component: WhatToWatchComponent }])
]
})
export class StreamingLibraryModule {}

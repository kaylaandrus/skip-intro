import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

import { ShowResultsComponent } from "./show-results/show-results.component";
import { ShowSearchComponent } from "./show-search/show-search.component";
import { WhatToWatchComponent } from "./what-to-watch.component";
import { AmazonprimeComponent } from "./streaming-services/amazonprime/amazonprime.component";
import { DisneyplusComponent } from "./streaming-services/disneyplus/disneyplus.component";
import { HbomaxComponent } from "./streaming-services/hbomax/hbomax.component";
import { HuluComponent } from "./streaming-services/hulu/hulu.component";
import { NetflixComponent } from "./streaming-services/netflix/netflix.component";

@NgModule({
  declarations: [
    WhatToWatchComponent,
    ShowSearchComponent,
    ShowResultsComponent,
    AmazonprimeComponent,
    DisneyplusComponent,
    HbomaxComponent,
    HuluComponent,
    NetflixComponent
  ],
  imports: [SharedModule,
  RouterModule.forChild([{ path: "", component: WhatToWatchComponent }])
]
})
export class StreamingLibraryModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatInputModule, MatProgressSpinnerModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api/api.service';
import { SearchResultListComponent } from './map/search-result-list/search-result-list.component';
import { GoogleService } from './card/google.service';
import { ApiGermanService } from './api/api-german.service';
import { ApiAustriaService } from './api/api-austria.service';
import { CardService } from './card/card.service';
import { MapHomeComponent } from './map-home/map-home.component';

@NgModule({
    imports: [
        CommonModule,
        AgmCoreModule,
        FlexLayoutModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        HttpClientModule
    ],
    providers: [
        {provide: ApiService, useClass: ApiGermanService},
        {provide: CardService, useClass: GoogleService},
    ],
    declarations: [MapComponent, SearchResultListComponent, MapHomeComponent]
})
export class MapModule {
}

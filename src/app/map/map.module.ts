import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatInputModule, MatProgressSpinnerModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api/api.service';
import { SearchResultListComponent } from './map/search-result-list/search-result-list.component';
import { GoogleService } from './card/google.service';
import { ApiGermanService } from './api/api-german.service';
import { CardService } from './card/card.service';
import { MapHomeComponent } from './map-home/map-home.component';
import { PoiMapsApiLoaderService } from './card/poi-maps-api-loader.service';
import { DocumentRef, WindowRef } from '@agm/core/utils/browser-globals';

export const key = '1234';

    @NgModule({
        imports: [
            CommonModule,
            AgmCoreModule,
            FlexLayoutModule,
            MatCardModule,
            MatInputModule,
            MatButtonModule,
            MatProgressSpinnerModule,
            HttpClientModule,
            AgmCoreModule.forRoot(),
        ],
        providers: [
            {provide: ApiService, useClass: ApiGermanService},
            {provide: CardService, useClass: GoogleService},
            PoiMapsApiLoaderService, WindowRef, DocumentRef
        ],
        declarations: [MapComponent, SearchResultListComponent, MapHomeComponent]
    })
    export class MapModule {
    }



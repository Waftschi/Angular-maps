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
    providers: [ApiService, GoogleService],
    declarations: [MapComponent, SearchResultListComponent]
})
export class MapModule {
}

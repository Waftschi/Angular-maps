import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatInputModule, MatProgressSpinnerModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';

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
    providers: [ApiService],
    declarations: [MapComponent]
})
export class MapModule {
}

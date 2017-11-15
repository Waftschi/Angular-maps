import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatInputModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        AgmCoreModule,
        FlexLayoutModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule
    ],
    declarations: [MapComponent]
})
export class MapModule {
}

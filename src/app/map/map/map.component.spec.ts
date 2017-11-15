import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapComponent } from './map.component';
import { MatButtonModule, MatCardModule, MatInputModule } from '@angular/material';
import { AgmCoreModule } from '@agm/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('MapComponent', () => {
    let component: MapComponent;
    let fixture: ComponentFixture<MapComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MapComponent],
            imports: [
                MatButtonModule,
                MatCardModule,
                MatInputModule,
                NoopAnimationsModule,
                AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyCS4pfD5doD_DqpMJSjncypHP2c4ramEX8'
                })
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MapComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

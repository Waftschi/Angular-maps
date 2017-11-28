import { ElementRef, Injectable, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import 'rxjs/add/observable/of';
import { Card } from './card';

@Injectable()
export abstract class CardService implements Card {
    private latitude: number;
    private longitude: number;
    private zoom: number;


    constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {
    }

    init(searchElement: ElementRef): Promise<any> {
        throw new Error('Abstract Method');
    }

    getLatitude() {
        return this.latitude;
    }


    getLongitude() {
        return this.longitude;
    }

    getZoom() {
        return this.zoom;
    }

    setCurrentPosition(): Promise<any> {
        throw new Error('Abstract Method');
    }


}

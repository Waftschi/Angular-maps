import { ElementRef, Injectable, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import 'rxjs/add/observable/of';
import { PoiMapsApiLoaderService } from './poi-maps-api-loader.service';

export function createGoogleMaps(searchElement) {
    return new google.maps.places.Autocomplete(searchElement.nativeElement, {types: ['address']});
}

declare let google: any;

@Injectable()
export class GoogleService {
    private latitude: number;
    private longitude: number;
    private zoom: number;
    private mapsAPILoader: MapsAPILoader;


    constructor(private poiAPILoader: PoiMapsApiLoaderService, private ngZone: NgZone) {
    }

    init(searchElement: ElementRef) {
        return new Promise(resolve => {
            this.poiAPILoader.getApiLoader().then(
                (loader) => {
                    this.initLoader(loader, searchElement, resolve);
                }
            );

        });
    }

    private initLoader(loader, searchElement: ElementRef, resolve) {
        loader.load().then(() => {

            const autoComplete = createGoogleMaps(searchElement);

            autoComplete.addListener('place_changed', () => {
                this.ngZone.run(() => {
                    // Why ...
                    // get the place result
                    const place: any = autoComplete.getPlace();

                    console.log('------------');
                    console.dir(place);

                    // verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }

                    // set latitude, longitude and zoom
                    this.latitude = place.geometry.location.lat();
                    this.longitude = place.geometry.location.lng();

                    // console.dir(this.latitude);
                    // console.dir(this.longitude);

                    this.zoom = 12;
                    resolve({latitude: this.latitude, longitude: this.longitude, zoom: this.zoom});
                });
            });
        });
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

    getKey(): number {
        return 1234;
    }

    setCurrentPosition() {
        return new Promise(resolve => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    this.latitude = position.coords.latitude;
                    this.longitude = position.coords.longitude;
                    this.zoom = 12;
                    // this.setCoordinates();
                    resolve({latitude: this.latitude, longitude: this.longitude, zoom: this.zoom});
                });
            }
        });
    }


}

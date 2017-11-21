import { ElementRef, Injectable, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import 'rxjs/add/observable/of';
import { Card } from './card';

@Injectable()
export class GoogleService implements Card {
    private latitude: number;
    private longitude: number;
    private zoom: number;


    constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {
    }

    init(searchElement: ElementRef) {
        return new Promise(resolve => {
            this.mapsAPILoader.load().then(() => {
                const autocomplete = new google.maps.places.Autocomplete(searchElement.nativeElement, {
                    types: ['address']
                });

                autocomplete.addListener('place_changed', () => {
                    this.ngZone.run(() => {
                        // Why ...
                        // get the place result
                        const place: google.maps.places.PlaceResult = autocomplete.getPlace();

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

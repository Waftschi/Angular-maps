import { ElementRef, Injectable, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class GoogleService {
    private latitude: number;
    private longitude: number;
    private zoom: number;
    public coordinates: Observable<any>;

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

                        // verify result
                        if (place.geometry === undefined || place.geometry === null) {
                            return;
                        }

                        // set latitude, longitude and zoom
                        this.latitude = place.geometry.location.lat();
                        this.longitude = place.geometry.location.lng();
                        // this.setCoordinates();
                        this.zoom = 12;
                        resolve({latitude: this.latitude, longitude: this.longitude, zoom: this.zoom});
                    });
                });
            });
        });
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

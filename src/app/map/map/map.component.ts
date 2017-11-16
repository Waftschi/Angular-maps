import { Component, ElementRef, NgZone, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import {} from 'googlemaps';
import { ApiService } from '../api.service';


export interface PointsData {
    data: any[];
}


@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class MapComponent implements OnInit {
    points: any;
    showSpinner: boolean;
    zoom = 5;
    longitude = 7.809007;
    latitude = 51.678418;
    // lat = 51.678418;
    // lng = 7.809007;

    @ViewChild('search')
    public searchElementRef: ElementRef;

    marker = {
        latitude: 48.12986029999999,
        longitude: 11.605407900000001,
    };

    constructor(private mapsAPILoader: MapsAPILoader,
                private ngZone: NgZone,
                private apiService: ApiService) {
    }


    ngOnInit() {
        // this.setCurrentPosition();
        this.mapsAPILoader.load().then(() => {
            const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
                types: ['address']
            });
            autocomplete.addListener('place_changed', () => {
                this.ngZone.run(() => { // Why ...
                    // get the place result
                    const place: google.maps.places.PlaceResult = autocomplete.getPlace();

                    // verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }

                    // set latitude, longitude and zoom
                    this.latitude = place.geometry.location.lat();
                    this.longitude = place.geometry.location.lng();
                    this.zoom = 12;
                });
            });
        });

    }


    searchApi() {
        this.showSpinner = true;
        this.apiService.getPointsOfInterest(this.latitude, this.longitude).subscribe((points: PointsData) => {
            this.showSpinner = false;
            this.points = points.data;
        });
    }

    mapCenterChanged($event: Event) {
        console.dir($event);
        this.showSpinner = false;
    }

    setCurrentPosition() {
        this.showSpinner = true;
        return new Promise(resolve => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    this.latitude = position.coords.latitude;
                    this.longitude = position.coords.longitude;
                    this.zoom = 12;

                    resolve(true);
                });
            }
        });
    }
}

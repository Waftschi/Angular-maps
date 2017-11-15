import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class MapComponent implements OnInit {
    zoom: number;
    longitude = 7.809007;
    latitude = 51.678418;
    // lat = 51.678418;
    // lng = 7.809007;

    constructor() {
    }


    ngOnInit() {
        // if (navigator.geolocation) {
        //     navigator.geolocation.getCurrentPosition((position) => {
        //         // var pos = {
        //         this.lat = position.coords.latitude;
        //         this.lng = position.coords.longitude;
        //         // };
        //
        //         // infoWindow.setPosition(pos);
        //         // infoWindow.setContent('Location found.');
        //         // map.setCenter(pos);
        //     }, () => {
        //         // handleLocationError(true, infoWindow, map.getCenter());
        //     });
        // } else {
        //     // Browser doesn't support Geolocation
        //     // handleLocationError(false, infoWindow, map.getCenter());
        // }

        // this.setCurrentPosition();
    }

    setCurrentPosition() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.latitude = position.coords.latitude;
                this.longitude = position.coords.longitude;
                this.zoom = 5;
            });
        }
    }
}

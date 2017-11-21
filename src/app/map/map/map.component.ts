import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {} from 'googlemaps';
import { ApiService } from '../api/api.service';
import { GoogleService } from '../card/google.service';


export interface PointsData {
    data: any[];
}

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class MapComponent implements OnInit, AfterViewInit {
    latitude = 48.124392799999995;
    longitude = 11.606305399999997;
    points: any[] = [];
    showSpinner: boolean;
    currPos: any;
    zoom = 12;

    @ViewChild('search')
    public searchElementRef: ElementRef;


    constructor(public apiService: ApiService,
                public cardService: GoogleService) {

    }

    ngOnInit() {
        // this.pointsElementRef
        this.cardService.init(this.searchElementRef).then((position: any) => {
            this.showSpinner = false;
            this.latitude = position.latitude;
            this.longitude = position.longitude;
            this.zoom = position.zoom;
        });
    }

    ngAfterViewInit() {
    }


    getLatitude() {
        return this.cardService.getLatitude();
    }


    getLongitude() {
        return this.cardService.getLongitude();
    }


    getZoom() {
        return this.cardService.getZoom();
    }

    searchApi() {
        this.showSpinner = true;
        this.apiService.getPointsOfInterest(this.latitude, this.longitude).subscribe((points: PointsData) => {
            this.showSpinner = false;
            this.points = points.data;
        });
    }


    mapCenterChanged($event: Event) {
        this.showSpinner = false;
        console.dir($event);
    }


    getWidth() {
        return this.points.length > 0 ? 70 : 100;
    }


    setCurrentPosition() {
        this.showSpinner = true;
        this.cardService.setCurrentPosition().then((position: any) => {
            this.showSpinner = false;
            this.latitude = position.latitude;
            this.longitude = position.longitude;
            this.zoom = position.zoom;
            this.currPos = position;
        });
    }
}

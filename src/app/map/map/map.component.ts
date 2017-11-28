import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ApiService } from '../api/api.service';
import { CardService } from '../card/card.service';
import { Point } from './search-result-list/point';
import { isUndefined } from 'util';


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
    points: any[] = [];
    showSpinner: boolean;
    private wasChanged: boolean;

    @ViewChild('search')
    public searchElementRef: ElementRef;


    constructor(public apiService: ApiService,
                public cardService: CardService) {

    }

    ngOnInit() {
        if (!this.wasChanged) {
            this.cardService.setCurrentPosition();
        }

        this.cardService.init(this.searchElementRef).then((position: any) => {
            this.wasChanged = true;
            this.showSpinner = false;
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

    getIconUrl(point) {
        if (isUndefined(point) || isUndefined(point.clicked)) {
            return 'http://maps.google.com/mapfiles/ms/icons/blue.png';
        }

        return point.clicked === false ? 'http://maps.google.com/mapfiles/ms/icons/blue.png' : 'http://maps.google.com/mapfiles/ms/icons/red.png';
    }


    getZoom() {
        return this.cardService.getZoom();
    }

    searchApi() {
        this.showSpinner = true;
        this.apiService.getPointsOfInterest(this.cardService.getLatitude(), this.cardService.getLongitude())
            .subscribe((points: PointsData) => {
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
        });
    }
}

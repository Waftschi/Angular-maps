import { Component, Input, OnInit, ViewEncapsulation, OnChanges } from '@angular/core';
import { Point } from './point';
import { SearchSortService } from './search-sort.service';


@Component({
    selector: 'app-search-result-list',
    templateUrl: './search-result-list.component.html',
    styleUrls: ['./search-result-list.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class SearchResultListComponent implements OnInit, OnChanges {
    start = 0;
    end = 10;
    counter = 0;
    visiblePoints: Point[] = [];

    @Input('points') points: Point[];


    constructor() {
    }


    ngOnInit() {
    }


    ngOnChanges() {
        console.dir('was changed');
        // Copies the result list
        this.visiblePoints = this.points.slice(0);
    }

    sort(type) {
        switch (type) {
            case 'distance-asc':
                this.visiblePoints.sort(SearchSortService.sortDistanceAsc);
                break;
            case 'name-asc':
                this.visiblePoints.sort(SearchSortService.sortNameAsc);
                break;
        }
    }

    next() {
        this.counter++;
        this.start = this.counter * 10;
        this.end = this.start + 10;
    }

    back() {
        this.counter--;
        this.start = this.counter * 10;
        this.end = this.start + 10;
    }

}




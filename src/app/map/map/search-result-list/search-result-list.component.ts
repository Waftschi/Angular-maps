import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-search-result-list',
    templateUrl: './search-result-list.component.html',
    styleUrls: ['./search-result-list.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class SearchResultListComponent implements OnInit {
    start = 0;
    end = 10;
    counter = 0;

    @Input('points') points;

    constructor() {
    }

    ngOnInit() {
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

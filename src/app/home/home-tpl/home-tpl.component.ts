import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-home-tpl',
    templateUrl: './home-tpl.component.html',
    styleUrls: ['./home-tpl.component.css'],
    host: {
        '(click)': '_onClick($event)',
    },
    encapsulation: ViewEncapsulation.None
})
export class HomeTplComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    _onClick(event: MouseEvent) {
        console.dir(event);
    }


}

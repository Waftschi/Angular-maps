import { AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit, AfterViewInit {
    @ViewChild('tref', {read: ElementRef}) tref: ElementRef;
    // @ViewChild('tpl') tpl: TemplateRef<any>;


    constructor(private hostElement: ElementRef) {
        // nativeElement.outerHTML);
    }

    ngOnInit() {
    }


    ngAfterViewInit(): void {
        // outputs `I am span`
        console.dir(this.tref.nativeElement.style.backgroundColor = '#ff0000');
        const content = this.tref.nativeElement.textContent;
        console.log(this.tref.nativeElement.textContent = content + '123456');
        // const elementRef = this.tpl.elementRef;
        // outputs `template bindings={}`
        // console.log(elementRef.nativeElement.textContent);
    }
}

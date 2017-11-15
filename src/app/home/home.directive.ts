import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appHome]'
})
export class HomeDirective {

    constructor(private el: ElementRef) {
    }


    @HostListener('mouseover')
    onMouseOver() {
        this.highlight('yellow');
    }


    @HostListener('mouseout')
    onMouseOut() {
        this.highlight(null);
    }

    @HostBinding('style.color') color: string;
    @HostBinding('style.border-color') borderColor: string;


    private highlight(color: string) {
        // this.el.nativeElement.style.backgroundColor = color;
        this.color = color;
    }
}

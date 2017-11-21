import { ElementRef } from '@angular/core';

export interface Card {

    init(searchElement: ElementRef);

    setCurrentPosition();

    getZoom();

    getLatitude();

    getLongitude();
}

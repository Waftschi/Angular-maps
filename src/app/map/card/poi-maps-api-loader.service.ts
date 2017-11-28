import { Injectable } from '@angular/core';
import { LazyMapsAPILoader } from '@agm/core';
import { DocumentRef, WindowRef } from '@agm/core/utils/browser-globals';

export function createMapsLoader(apiKey: string) {
    return new LazyMapsAPILoader({
        libraries: ['places'],
        apiKey: apiKey
    }, this.winRef, this.docRef);
}

@Injectable()
export class PoiMapsApiLoaderService {
    mapsAPILoader: LazyMapsAPILoader;

    constructor(private winRef: WindowRef, private docRef: DocumentRef) {
    }

    getApiLoader(): Promise<LazyMapsAPILoader> {
        return new Promise(resolve => {
            if (this.mapsAPILoader === null) {
                this.mapsAPILoader = createMapsLoader('AIzaSyCS4pfD5doD_DqpMJSjncypHP2c4ramEX8');
                resolve(this.mapsAPILoader);
            }
        });
    }
}

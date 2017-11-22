import { Injectable } from '@angular/core';
import { Point } from './point';

// export const DISTANCE_ASC = 'distance-asc';

@Injectable()
export class SearchSortService {

  constructor() { }

    static sortDistanceAsc(p1: Point, p2: Point) {
        return +p1.extension.distance - +p2.extension.distance;
    }


    static sortNameAsc(p1: Point, p2: Point) {
        return p1.name.localeCompare(p2.name);
    }

}

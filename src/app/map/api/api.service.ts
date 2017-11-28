import { Injectable } from '@angular/core';
import { DataUtilService } from './data-util.service';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export abstract class ApiService {
    baseUrl = 'https://www.allianz.de/oneweb/ajax/aspro/agency-search/agencySearch/';

    constructor(private http: HttpClient) {
    }

    getPointsOfInterest(latitude?, longitude?): Observable<any> {
        throw new Error('Abstract Method');
    }

}

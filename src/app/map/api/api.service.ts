import { Injectable } from '@angular/core';
import { DataUtilService } from './data-util.service';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {
    baseUrl = 'https://www.allianz.de/oneweb/ajax/aspro/agency-search/agencySearch/';

    constructor(private http: HttpClient) {
    }

    getPointsOfInterest(latitude, longitude) {
        const url = this.baseUrl
            + 'v4/query/latlng?name=&lat=48.1243653&lon=11.6063501&'
            + 'radius=&addendum=&division=&token=2ef403c1-fc5f-4cde-b1cd-814802fc29c4';

        return this.http.get(url)
        // .map(response => <Project[]>response.json())
            .do((res: any) => DataUtilService.log('points', res.data))
            .catch(error => DataUtilService.handleError(error));
    }

}

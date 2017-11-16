import { Injectable } from '@angular/core';
import {  RequestOptions, Headers } from '@angular/http';

@Injectable()
export class DataUtilService {

    constructor() {
    }

    static log(t, data) {
        console.log(t + ': ' + JSON.stringify(data));
    }

    /**
     *
     * @param error
     * @returns {any}
     */
    public static handleError(error: Response): Promise<any> {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error;
        }

        return Promise.reject(errMsg);
    }

    /**
     *
     * @returns {RequestOptions}
     */
    public static getHeaders(): RequestOptions {
        const headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
        return new RequestOptions({headers: headers});
    }
}

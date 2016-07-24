import { Injectable } from '@angular/core';
import { Http, RequestMethod, RequestOptionsArgs, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {NavController, Loading} from 'ionic-angular';

/*
  Generated class for the CommonRestProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

export class CommonRestProvider {

  private loading: Loading;

  constructor(protected http: Http, protected nav: NavController) {
  }

  private getHttpRequest(url: string, requestMethod: RequestMethod, body?: any) {
    return new Promise((resolve, reject) => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      let requestOptionArgs: RequestOptionsArgs;
      requestOptionArgs = {
        url: url,
        method: requestMethod,
        body: body,
        headers: new Headers({
          "Content-Type": "application/json"
          //add any extra custom headers you need
        })
      }

      //show the loader before starting the request
      let loader = this.showLoader();

      this.http.request(url, requestOptionArgs)
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference

          // Dismiss the loader and return response back.
          loader.dismiss().then(() => resolve(data));

        }, (error) => {
          // Dismiss the loader and return error back.
          loader.dismiss().then(() => reject(error));
        });
    });
  }

  protected getHttpGetRequest(url: string) {
    return this.getHttpRequest(url, RequestMethod.Get);
  }

  protected getHttpPutRequest(url: string, body?: any) {
    return this.getHttpRequest(url, RequestMethod.Put, body);
  }

  protected getHttpPostRequest(url: string, body?: any) {
    return this.getHttpRequest(url, RequestMethod.Post, body);
  }

  private showLoader() {
    let loader = Loading.create({
        content: "Loading..."
      });

    // Load the loader into the current navController
    this.nav.present(loader);

    return loader;
  }

}


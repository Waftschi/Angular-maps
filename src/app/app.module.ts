import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // < Material

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MapComponent } from './map/map/map.component';
import { MapModule } from './map/map.module';
import { HomeComponent } from './home/home.component';

import { MatToolbarModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AgmCoreModule } from '@agm/core';


const appRoutes: Routes = [
    {path: 'map', component: MapComponent},
    {path: 'home', component: HomeComponent},
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {path: '**', component: PageNotFoundComponent}
];


@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MapModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        FlexLayoutModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCS4pfD5doD_DqpMJSjncypHP2c4ramEX8'
        }),
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: true} // <-- debugging purposes only
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

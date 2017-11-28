import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AgmCoreModule } from '@agm/core';
import { HomeModule } from './home/home.module';
import { MapHomeComponent } from './map/map-home/map-home.component';

const appRoutes: Routes = [
    {path: 'map', component: MapHomeComponent},
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
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MapModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        FlexLayoutModule,
        HomeModule,

        RouterModule.forRoot(
            appRoutes,
            {enableTracing: false} // <-- debugging purposes only
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

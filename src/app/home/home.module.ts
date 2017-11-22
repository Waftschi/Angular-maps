import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeTplComponent } from './home-tpl/home-tpl.component';
import { HomeDirective } from './home.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        HomeComponent,
        HomeTplComponent,
        HomeDirective,
    ]
})
export class HomeModule {
}

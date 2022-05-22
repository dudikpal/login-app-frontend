import {Component, OnChanges, OnInit} from '@angular/core';
import {Router} from "@angular/router";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnChanges {
    title = 'Car Cards Fighting';

    isAuthenticated: boolean = false;


    constructor(private router: Router) {

    }

    ngOnInit(): void {

    }

    ngOnChanges(): void {
        console.log('app-compban: ' + this.isAuthenticated)
    }


    public logout(): void {
        sessionStorage.removeItem('AuthToken');
        this.isAuthenticated = false;
        this.router.navigate(['/login']);
    }
}

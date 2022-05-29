import { Component, OnInit } from '@angular/core';
import {LoggedInGuardService} from "../../login/logged-in-guard.service";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";


@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.css']
})
export class GarageComponent implements OnInit {

  userRole!: string;
  adminRole!: string;
  publicRole!: string;
  adminButton!: SafeHtml;
  playerCards!: any;

  constructor(private authService: LoggedInGuardService,
              private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    //this.tryRequest();
    this.getPlayerCards();
    this.playerCards = [];
  }

  async getPlayerCards() {
    const response = await fetch('http://localhost:8080/api/cards');
    const responseData = await response.json();
    this.playerCards = responseData;
  }

  async tryRequest() {

    const payLoad = `ccgamer=${sessionStorage.getItem('AuthToken')!.replace(/\"/g, '')}`;

    const responsePublic = await fetch('http://localhost:8080/api/test/all');
    const publicText = await responsePublic.text();
    this.publicRole = publicText;

    const responseUserRole = await fetch('http://localhost:8080/api/test/user', {
      headers: {
        'Authorization': payLoad,
      }
    });
    const userText = await responseUserRole.text();
    this.userRole = userText;

    const responseAdminRole = await fetch('http://localhost:8080/api/test/admin', {
      headers: {
        'Authorization': payLoad
      }
    });
    const adminText = await responseAdminRole.text();
    this.adminRole = adminText;

    const responseAdminPage = await fetch('http://localhost:8080/api/cards/admin', {
      headers: {
        'Authorization': payLoad
      }
    });
    const adminPage = await responseAdminPage.text();

    this.adminButton = this.sanitizer
        .bypassSecurityTrustHtml(adminPage);
  }
}
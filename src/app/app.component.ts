import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Tic Tac Toe';
  public isAuthenticated = false;

  ngOnInit(): void {
    this.isAuthenticated = true;
  }




  public logout(): void {
    // todo
  }
}

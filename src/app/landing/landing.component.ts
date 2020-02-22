import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //effect menu hide/show
    let button = document.getElementById("menu-button"),
      main = document.getElementById("main");
      button.addEventListener("click", () => {
      main.classList.toggle("active");
      document.body.classList.toggle("active");
    });

  }

}

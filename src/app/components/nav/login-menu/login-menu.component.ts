import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-menu',
  templateUrl: './login-menu.component.html',
  styleUrls: ['./login-menu.component.scss'],
})
export class LoginMenuComponent implements OnInit {
  loginMenuItems = [
    'Privat',
    'Företag',
    'Enkla firman',
    'Mina pensionssidor',
    'Business Area',
    'Research',
    'Trading Station',
    'Online Trade Finance',
    'C&I Online',
    'RSCF Online',
    'Leasing Online',
    'Stiftelserummet',
    'Mitt SEB Corporate',
    'Kortadmin',
  ];

  constructor() {}

  ngOnInit(): void {}
}

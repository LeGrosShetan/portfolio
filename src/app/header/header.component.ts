import { Component } from '@angular/core';
import {RouterModule} from "@angular/router";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule,
    NgStyle
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  protected readonly headerHeight = headerHeight;
}

export const headerHeight = "50px";

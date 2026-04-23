import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Footer} from './components/core/footer/footer';
import {Sidebar} from './components/core/sidebar/sidebar';
import {Topbar} from './components/core/topbar/topbar';
import {Header} from './components/core/header/header';
import {Navmenu} from './components/core/navmenu/navmenu';
import {Articles} from './components/layout/articles/articles';
import {Hero} from './components/layout/hero/hero';
import {Cards} from './components/layout/cards/cards';
import {Subscriptionbox} from './components/features/subscriptionbox/subscriptionbox';
import {Copyright} from './components/core/copyright/copyright';
import { Ad } from './components/features/ad/ad';
import { Alias } from './components/layout/alias/alias';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Footer,
    Sidebar,
    Topbar,
    Header,
    Navmenu,
    Articles,
    Hero,
    Cards,
    Subscriptionbox,
    Copyright,
    Ad,
    Alias,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('ilmani');
}

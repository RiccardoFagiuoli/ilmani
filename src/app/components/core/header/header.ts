import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  openSidebar() {
    const sidebar = document.getElementById('sidebarMenu');
    const overlay = document.getElementById('overlay');
    if (sidebar) sidebar.classList.add('active');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  logoHeight: number = 60;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY;

    if (scrollY > 100) {
      this.logoHeight = 40;
    } else if (scrollY < 30) {
      this.logoHeight = 60;
    }
  }
}

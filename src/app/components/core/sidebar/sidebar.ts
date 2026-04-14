import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  currentDate: string = '--/--/----';
  currentUpdate: string = 'Aggiornato alle --:--';

  ngOnInit() {
    this.updateDateTime();
    setInterval(() => this.updateDateTime(), 60000);
  }

  updateDateTime() {
    const now = new Date();

    // Data
    const giorno = now.getDate();
    const mese = now.toLocaleString('it-IT', { month: 'long' });
    const anno = now.getFullYear();
    this.currentDate = `${giorno} ${mese} ${anno}`;

    // Ora
    const ore = now.getHours().toString().padStart(2, '0');
    const minuti = now.getMinutes().toString().padStart(2, '0');
    this.currentUpdate = `Aggiornato alle ${ore}:${minuti}`;
  }

  openSidebar() {
    const sidebar = document.getElementById('sidebarMenu');
    const overlay = document.getElementById('overlay');
    if (sidebar) sidebar.classList.add('active');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeSidebar() {
    const sidebar = document.getElementById('sidebarMenu');
    const overlay = document.getElementById('overlay');
    if (sidebar) sidebar.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  toggleSubmenu(event: Event) {
    const target = event.currentTarget as HTMLElement;
    const submenu = target.querySelector('.submenu') as HTMLElement;
    const icon = target.querySelector('i') as HTMLElement;

    if (submenu) {
      const isOpen = target.classList.contains('open');

      if (isOpen) {
        target.classList.remove('open');
        submenu.style.display = 'none';
        if (icon) icon.style.transform = 'rotate(0deg)';
      } else {
        target.classList.add('open');
        submenu.style.display = 'block';
        if (icon) icon.style.transform = 'rotate(180deg)';
      }
    }
    event.stopPropagation();
  }
}

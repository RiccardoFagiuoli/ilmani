import { Component } from '@angular/core';

@Component({
  selector: 'app-topbar',
  imports: [],
  templateUrl: './topbar.html',
  styleUrl: './topbar.css',
})
export class Topbar {
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
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-topbar',
  imports: [],
  templateUrl: './topbar.html',
  styleUrl: './topbar.css',
})
export class Topbar {
  ngOnInit() {
    this.updateDateTime();
    setInterval(() => this.updateDateTime(), 60000);
  }

  updateDateTime() {
    const data = new Date().toLocaleDateString('it-IT', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    const ora = new Date().toLocaleTimeString('it-IT', {
      hour: '2-digit',
      minute: '2-digit'
    });

    const currentDate = document.getElementById('currentDate');
    const currentUpdate = document.getElementById('currentUpdate');

    if (currentDate) currentDate.innerText = data;
    if (currentUpdate) currentUpdate.innerText = ora;
  }
}

import { Injectable, Service, signal } from '@angular/core';

// Signal
// @Injectable({
//   providedIn: 'root',
// })
@Service()
export class BusyService {
  loading = signal(false);
  busyRequestCount = 0;

  busy() {
    this.busyRequestCount++;
    this.loading.set(true);

    console.log('BUSY:', this.busyRequestCount);
  }

  idle() {
    this.busyRequestCount--;

    if (this.busyRequestCount <= 0) {
      this.busyRequestCount = 0;
      this.loading.set(false);
    }

    console.log('IDLE:', this.busyRequestCount, 'LOADING:', this.loading());
  }
}

// No signal
// @Service()
// export class BusyService {
//   loading = false;
//   busyRequestCount = 0;

//   busy() {
//     this.busyRequestCount++;
//     this.loading = true;
//   }

//   idle() {
//     this.busyRequestCount--;
//     if (this.busyRequestCount <= 0) {
//       this.busyRequestCount = 0;
//       this.loading = false;
//     }
//   }
// }

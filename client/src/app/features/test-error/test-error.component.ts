import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-test-error',
  imports: [MatButton],
  templateUrl: './test-error.component.html',
  styleUrl: './test-error.component.css',
})
export class TestErrorComponent {
  // private cdr = inject(ChangeDetectorRef);

  baseUrl = 'https://localhost:5001/api/';
  private http = inject(HttpClient);
  // validationErrors?: string[];
  // validationErrors: string[] | null = null;
  validationErrors = signal<string[] | null>(null);

  get404Error() {
    // this.validationErrors = null; ///
    this.http.get(this.baseUrl + 'buggy/notfound').subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
  }

  // get400Error() {
  //   // this.validationErrors = null; ///
  //   this.http.get(this.baseUrl + 'buggy/badrequest').subscribe({
  //     next: (response) => console.log(response),
  //     error: (error) => console.log(error),
  //   });
  // }

  get400Error() {
    this.validationErrors.set(null);

    this.http.get(this.baseUrl + 'buggy/badrequest').subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
  }

  // get401Error() {
  //   // this.validationErrors = null; ///
  //   this.http.get(this.baseUrl + 'buggy/unauthorized').subscribe({
  //     next: (response) => console.log(response),
  //     error: (error) => console.log(error),
  //   });
  // }
  get401Error() {
    this.validationErrors.set(null);

    this.http.get(this.baseUrl + 'buggy/unauthorized').subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
  }

  get500Error() {
    // this.validationErrors = null; ///
    this.http.get(this.baseUrl + 'buggy/internalerror').subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
  }

  // get400ValidationError() {
  //   this.http.post(this.baseUrl + 'buggy/validationerror', {}).subscribe({
  //     next: (response) => console.log(response),

  //     error: (error) => {
  //       // console.log('ERROR FROM COMPONENT:', error);
  //       this.validationErrors = error;
  //     },
  //   });
  // }

  get400ValidationError() {
    this.http.post(this.baseUrl + 'buggy/validationerror', {}).subscribe({
      next: (response) => console.log(response),

      error: (error: string[]) => {
        console.log('VALIDATION ERRORS:', error);

        this.validationErrors.set(error);
      },
    });
  }
}

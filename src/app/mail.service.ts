import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from './contacts/contact';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  _url = 'https://tristan-bierig.de/send_mail.php';

  constructor(private _http: HttpClient) {}

  sendMail(contact: Contact) {
    let payload = JSON.stringify(contact);
    return this._http
      .post<any>(this._url, payload)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    let errorText: string = JSON.stringify(error);
    return throwError(() => new Error(errorText));
  }
}

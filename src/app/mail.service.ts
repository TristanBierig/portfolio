import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  constructor(private http: HttpClient) {}

  sendMail(name: string, message: string) {
    // debugger;
    return this.http.post<any>(
      'https://tristan-bierig.de/send_mail.php',
      JSON.stringify({
        name: name,
        message: message,
      })
    );
  }
}

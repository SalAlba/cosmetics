import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EmailService {
  BASIC_URL = environment.api;
  MODEL = 'email';

  constructor(private http: HttpClient) { }

  public sendEmail(email: any): Observable<any> {
    this.http.post(`${this.BASIC_URL}/mails/smtp/template`, email).subscribe(d => console.log(d));
    return null;
  }

  public sendOrderEmail(data: any) {
    environment.notificationEmails.forEach(email => {
      this.sendEmail({
        "template": "NewOrder",
        "to_email": email,
        "subject": "New order",
        "body": data
      })
    })
  }
}

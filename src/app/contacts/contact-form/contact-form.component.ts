import { Component, OnInit } from '@angular/core';
import { MailService } from '../../mail.service';
import { Contact } from '../contact';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  contactModel = new Contact('', '', '');
  successMessage: string =
    'Your email has been send successfully!';

  errorMessage: string =
    'There is an unexpected Error. Your email has not been send. Try again later!';

  constructor(
    private _mailService: MailService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  onSubmit(ngForm: any) {
    if (ngForm.valid) {
      this._mailService.sendMail(this.contactModel).subscribe({
        next: (response) => {
          console.log('Request send');
        },
        error: (error) => {
          console.log('Error appeared: ', error);
          this._snackBar.open(this.errorMessage, 'Close', {
            duration: 10000,
            panelClass: ['snackbar-error'],
          });
        },
        complete: () => {
          console.log('Email send succesfully');
          this._snackBar.open(this.successMessage, 'Close', {
            duration: 10000,
            panelClass: ['snackbar-success'],
          });
          ngForm.resetForm();
        },
      });
    }
  }
}

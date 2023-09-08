import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  contactForm!: FormGroup;
  // name: FormControl;
  // email: FormControl;
  // message: FormControl;

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.contactForm = new FormGroup({
      name: this.nameControl,
      email: this.emailControl,
      message: this.messageControl,
    });
  }

  nameControl = new FormControl('', Validators.required);
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  messageControl = new FormControl('', Validators.required);

  getErrorMessageEmail() {
    if (this.emailControl.hasError('required')) {
      return 'Enter an email to be answered to';
    }
    return this.emailControl.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessageText() {
    if (this.messageControl.hasError('required')) {
      return 'Please enter your message';
    }
    return;
  }

  getErrorMessageName() {
    if (this.emailControl.hasError('required')) {
      return 'Please enter your name';
    }
    return;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted');
      this.contactForm.reset();
    }
  }
}

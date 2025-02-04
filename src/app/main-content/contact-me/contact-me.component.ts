import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { SwitchlanguagedataService } from '../../services/switchlanguagedata.service';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {

  http = inject(HttpClient);
  switchlanguagedata = inject(SwitchlanguagedataService);

  contactData = {
    name: "",
    email: "",
    message: "",
  }

  mailTest = true;
  isChecked = false;
  emailSentConfirmation = false;
  closeHovered = false;
  post = {
    endPoint: 'https://hendrik-bischoping.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
    this.toggleChecked()
  }

  addHover(i: number) {
    if (this.closeHovered) {
      this.closeHovered = false
    } else {this.closeHovered = true}
  }
  
  removeHover(i: number) {
    if (this.closeHovered) {
      this.closeHovered = false
    } else {this.closeHovered = true}
  }

  toggleChecked() {
    if(this.isChecked) {
      this.isChecked = false
    } else {this.isChecked = true}
  }

  toggleConfirmation() {
    if (!this.emailSentConfirmation) {
      this.emailSentConfirmation = true;
    } else {this.emailSentConfirmation = false}
  }
}
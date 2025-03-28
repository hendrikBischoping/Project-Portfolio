import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslatePipe } from "@ngx-translate/core";
import { TranslateService } from "@ngx-translate/core";
import { SwitchlanguagedataService } from '../../services/switchlanguagedata.service';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormsModule, TranslatePipe],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
  constructor(private translate: TranslateService) { };
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

  /**
   * checks if all inputs are valid than sends a mail with the content to deposited mail address that resets the whole form
   * @param ngForm - object
   */
  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {ngForm.resetForm();},
          error: (error) => {console.error(error);},
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    }
    this.toggleChecked()
  }

  /**
   * toggles the closeHovered-boolean to true to add style on hovered close button
   */
  addHover(i: number) {
    if (this.closeHovered) {
      this.closeHovered = false
    } else {this.closeHovered = true}
  }
  
  /**
   * toggles the closeHovered-boolean to false to remove style on no longer hovered close button
   */
  removeHover(i: number) {
    if (this.closeHovered) {
      this.closeHovered = false
    } else {this.closeHovered = true}
  }

  /**
   * toggles the isChecked-boolean to check / uncheck the form checkbox
   */
  toggleChecked() {
    if(this.isChecked) {
      this.isChecked = false
    } else {this.isChecked = true}
  }

  /**
   * checks if an email was send to show a confirmation message for a short time
   */
  toggleConfirmation() {
    if (!this.emailSentConfirmation) {
      this.emailSentConfirmation = true;
    } else {this.emailSentConfirmation = false}
  }
}
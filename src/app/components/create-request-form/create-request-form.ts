import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-create-request-form',
  styleUrl: './create-request-form.css',
  templateUrl: './create-request-form.html',
})
export class CreateRequestForm {
  title ='';
  description = '';
  priority = 'MEDIUM';

  submitForm() {
    console.log('Submitting: ', this.title, this.description, this.priority);
  }
}

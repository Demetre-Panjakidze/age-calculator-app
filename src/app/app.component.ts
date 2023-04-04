import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgeForm } from './models/age.model';
import { dayNumberRangeValidator } from './validators/day-amount.validator';
import { monthNumberRangeValidator } from './validators/month-amount.validator';
import { yearNumberRangeValidator } from './validators/year-amount.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  form: FormGroup<AgeForm> = this.buildForm();
  ageDate: Date | undefined;
  yearAmount: string | number | undefined = '- -';
  monthAmount: string | number | undefined = '- -';
  dayAmount: string | number | undefined = '- -';

  constructor(private fb: FormBuilder) {}

  handleClick(): void {
    if (this.form.valid) {
      this.calculateAge();
    }
  }

  calculateAge(): void {
    if (
      this.form.controls.year.value &&
      this.form.controls.month.value &&
      this.form.controls.day.value
    ) {
      this.ageDate = new Date(
        Date.now() -
          new Date(
            this.form.controls.year.value,
            this.form.controls.month.value - 1,
            this.form.controls.day.value
          ).getTime()
      );
    }
    if (this.ageDate) {
      this.yearAmount = this.ageDate.getUTCFullYear() - 1970;
      this.monthAmount = this.ageDate.getUTCMonth();
      this.dayAmount = this.ageDate.getUTCDate() - 1;
    }
  }

  buildForm() {
    return new FormGroup<AgeForm>({
      day: this.fb.control(null, {
        validators: [Validators.required, dayNumberRangeValidator()],
        updateOn: 'blur',
      }),
      month: this.fb.control(null, {
        validators: [Validators.required, monthNumberRangeValidator()],
        updateOn: 'blur',
      }),
      year: this.fb.control(null, {
        validators: [Validators.required, yearNumberRangeValidator()],
        updateOn: 'blur',
      }),
    });
  }

  textColor(controlName: string) {
    if (
      this.form.controls[controlName].invalid &&
      this.form.controls[controlName].touched
    ) {
      return 'hsl(0, 100%, 67%)';
    }
    return 'hsl(0, 0%, 8%)';
  }
}

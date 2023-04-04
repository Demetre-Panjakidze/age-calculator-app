import { AbstractControl, ValidatorFn } from '@angular/forms';

export function invalidDateValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const date = control.value;
    if (!date) {
      return null;
    }
    const [year, month, day] = date.split('-');
    const maxDays = new Date(year, month, 0).getDate();
    if (day > maxDays) {
      return { invalidDate: true };
    }
    return null;
  };
}

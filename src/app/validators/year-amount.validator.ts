import { AbstractControl, ValidatorFn } from '@angular/forms';

export function yearNumberRangeValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    if (value === null || value === undefined || value === '') {
      return null;
    }
    const numValue = Number(value);
    if (isNaN(numValue) || numValue > new Date().getFullYear()) {
      return { yearNumberRange: true };
    }
    return null;
  };
}

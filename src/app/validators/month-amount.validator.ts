import { AbstractControl, ValidatorFn } from '@angular/forms';

export function monthNumberRangeValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    if (value === null || value === undefined || value === '') {
      return null;
    }
    const numValue = Number(value);
    if (isNaN(numValue) || numValue < 1 || numValue > 12) {
      return { monthNumberRange: true };
    }
    return null;
  };
}

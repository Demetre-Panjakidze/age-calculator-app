import { AbstractControl, ValidatorFn } from '@angular/forms';

export function dayNumberRangeValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    if (value === null || value === undefined || value === '') {
      return null;
    }
    const numValue = Number(value);
    if (isNaN(numValue) || numValue < 1 || numValue > 31) {
      return { dayNumberRange: true };
    }
    return null;
  };
}

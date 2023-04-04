import { FormControl } from '@angular/forms';

export interface AgeForm {
  day: FormControl<number | null>;
  month: FormControl<number | null>;
  year: FormControl<number | null>;
}

import { FormControl, FormGroup } from '@angular/forms';

export class AppValidators {
    constructor(
    ) {
    }

    static numberValidator(control: FormControl) {
        var re = /^([0-9]+)$/g;
        if (control.value && !re.test(control.value)) {
             return { numberValidator: true };
        }
    }
}
import { AbstractControl, ValidationErrors } from "@angular/forms";
import { RegularExpression } from "../RegularExpression/RegularExpression";


export function timeValidator() {
    return (control: AbstractControl): ValidationErrors | null => {

        const controlValue = control.value;
        if (RegularExpression.TimeRegExp.test(controlValue)) {
            return null;
        } else {
            return {'time': true};
        }
    };
}

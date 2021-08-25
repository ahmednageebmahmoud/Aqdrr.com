import { AbstractControl, ValidationErrors } from "@angular/forms";
import { RegularExpression } from "../RegularExpression/RegularExpression";




export function emailValidator() {
    return (control: AbstractControl): ValidationErrors | null => {

        const controlValue = control.value;
        if (RegularExpression.EmailRegExp.test(controlValue)) {
            return null;
        } else {
            return {'email': true};
        }
    };
}

import { AbstractControl, ValidationErrors } from "@angular/forms";
import { RegularExpression } from "../RegularExpression/RegularExpression";




export function localPhoneValidator() {
    return (control: AbstractControl): ValidationErrors | null => {

        const controlValue = control.value;
        if (RegularExpression.LocalPhoneNumberRegExp.test(controlValue)) {
            return null;
        } else {
            return {'localPhone': true};
        }
    };
}

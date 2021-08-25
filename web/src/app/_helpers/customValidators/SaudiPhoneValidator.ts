import { AbstractControl, ValidationErrors } from "@angular/forms";
import { RegularExpression } from "../RegularExpression/RegularExpression";




export function saudiPhoneValidator() {
    return (control: AbstractControl): ValidationErrors | null => {

        const controlValue = control.value;
        if (RegularExpression.SaudiPhoneRegExp.test(controlValue)) {
            return null;
        } else {
            return {'saudiPhone': true};
        }
    };
}

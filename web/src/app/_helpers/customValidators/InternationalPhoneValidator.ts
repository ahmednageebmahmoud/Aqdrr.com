import { AbstractControl, ValidationErrors } from "@angular/forms";
import { RegularExpression } from "../RegularExpression/RegularExpression";




export function internationalPhoneValidator() {
    return (control: AbstractControl): ValidationErrors | null => {

        const controlValue = control.value;
        if (RegularExpression.InternationalPhoneNumberRegExp.test(controlValue)) {
            return null;
        } else {
            return {'internationalPhone': true};
        }
    };
}

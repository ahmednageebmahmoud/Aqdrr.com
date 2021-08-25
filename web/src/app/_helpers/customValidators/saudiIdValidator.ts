import { AbstractControl, ValidationErrors } from "@angular/forms";
import { RegularExpression } from "../RegularExpression/RegularExpression";




export function saudiIdValidator() {
    return (control: AbstractControl): ValidationErrors | null => {

        const controlValue = control.value;
        if (RegularExpression.SaudiNationalIdRegExp.test(controlValue)) {
            return null;
        } else {
            return {'saudiId': true};
        }
    };
}

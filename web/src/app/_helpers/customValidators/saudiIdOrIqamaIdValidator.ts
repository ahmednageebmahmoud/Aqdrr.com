import { AbstractControl, ValidationErrors } from "@angular/forms";
import { RegularExpression } from "../RegularExpression/RegularExpression";




export function saudiIdOrIqamaIdValidator() {
    return (control: AbstractControl): ValidationErrors | null => {

        const controlValue = control.value;
        if (RegularExpression.SaudiNationalIdOrIqamaIdRegExp.test(controlValue)) {
            return null;
        } else {
            return {'saudiIdOrIqamaId': true};
        }
    };
}

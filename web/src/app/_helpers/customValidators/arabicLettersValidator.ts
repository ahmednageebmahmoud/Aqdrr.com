import { AbstractControl, ValidationErrors } from "@angular/forms";
import { RegularExpression } from "../RegularExpression/RegularExpression";




export function arabicLettersValidator() {
    return (control: AbstractControl): ValidationErrors | null => {

        const controlValue = control.value;
        if (RegularExpression.ArabicLettersRegExp.test(controlValue)) {
            return null;
        } else {
            return {'arabicLetters': true};
        }
    };
}

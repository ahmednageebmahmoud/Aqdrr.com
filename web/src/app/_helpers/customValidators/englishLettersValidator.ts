import { AbstractControl, ValidationErrors } from "@angular/forms";
import { RegularExpression } from "../RegularExpression/RegularExpression";




export function englishLettersValidator() {
    return (control: AbstractControl): ValidationErrors | null => {

        const controlValue = control.value;
        if (RegularExpression.EnglishLettersRegExp.test(controlValue)) {
            return null;
        } else {
            return {'englishLetters': true};
        }
    };
}

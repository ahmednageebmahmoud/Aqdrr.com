import { AbstractControl, ValidationErrors } from "@angular/forms";
import { RegularExpression } from "../RegularExpression/RegularExpression";




export function numberValidator() {
    return (control: AbstractControl): ValidationErrors | null => {

        const controlValue = control.value;
        if (RegularExpression.NumberRegExp.test(controlValue)) {
            return null;
        } else {
            return {'number': true};
        }
    };
}

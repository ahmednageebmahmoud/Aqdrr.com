import { AbstractControl, ValidationErrors } from "@angular/forms";
import { RegularExpression } from "../RegularExpression/RegularExpression";




export function wordFileValidator() {
    return (control: AbstractControl): ValidationErrors | null => {

        const controlValue = control.value;
        if (RegularExpression.DocumentExtensionRegExp.test(controlValue)) {
            return null;
        } else {
            return {'wordFile': true};
        }
    };
}

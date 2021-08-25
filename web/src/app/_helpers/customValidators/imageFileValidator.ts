import { AbstractControl, ValidationErrors } from "@angular/forms";
import { RegularExpression } from "../RegularExpression/RegularExpression";




export function imageFileValidator() {
    return (control: AbstractControl): ValidationErrors | null => {

        const controlValue = control.value;
        if (RegularExpression.ImageExtensionRegExp.test(controlValue)) {
            return null;
        } else {
            return {'imageFile': true};
        }
    };
}

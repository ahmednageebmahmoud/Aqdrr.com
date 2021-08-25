import { AbstractControl, ValidationErrors } from "@angular/forms";
import { RegularExpression } from "../RegularExpression/RegularExpression";




export function iqamaIdValidator() {
    return (control: AbstractControl): ValidationErrors | null => {

        const controlValue = control.value;
        if (RegularExpression.IqamaIdRegExp.test(controlValue)) {
            return null;
        } else {
            return {'iqamaId': true};
        }
    };
}

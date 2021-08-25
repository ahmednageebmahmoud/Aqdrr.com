import { AbstractControl, ValidationErrors } from "@angular/forms";
import { RegularExpression } from "../RegularExpression/RegularExpression";




export function nuStudentValidator() {
    return (control: AbstractControl): ValidationErrors | null => {

        const controlValue = control.value;
        if (RegularExpression.NuStudentIdRegExp.test(controlValue)) {
            return null;
        } else {
            return {'nuStudent': true};
        }
    };
}

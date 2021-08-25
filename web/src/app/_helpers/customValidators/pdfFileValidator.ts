import { AbstractControl, ValidationErrors } from "@angular/forms";
import { RegularExpression } from "../RegularExpression/RegularExpression";




export function pdfFileValidator() {
    return (control: AbstractControl): ValidationErrors | null => {

        const controlValue = control.value;
        if (RegularExpression.PdfExtensionRegExp.test(controlValue)) {
            return null;
        } else {
            return {'pdfFile': true};
        }
    };
}

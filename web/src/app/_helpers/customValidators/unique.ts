import { AbstractControl, ValidationErrors } from "@angular/forms";

export function unique(array: any, propertiy: string) {
    return (control: AbstractControl): ValidationErrors | null => {
        const controlValue = control.value;
        const isUnique = array.find(x => x[propertiy] === controlValue);

        if (typeof isUnique === 'object') {
            return {'unique': true};
        } else {
            return null;
        }
    };
}
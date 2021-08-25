import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AppTranslationService } from 'src/app/_helpers/app-translation';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor(private appTranslation: AppTranslationService) { }

  getValidationErrors( group: FormGroup, translationPath: string): any {
    const formErrors: any = {};

    Object.keys(group.controls).forEach((key: string) => {
      formErrors[key] = '';
    });

    Object.keys(group.controls).forEach((key: string) => {
        const control = group.get(key);
        if (control instanceof FormGroup) {
            this.getValidationErrors(control, translationPath);
        } else {
            if (control && !control.valid && (control.touched || control.dirty)) {

                    for (const errorKey in control.errors) {
                      if (errorKey){
                        const fullTranslationPath = `${translationPath}.${key}.${errorKey}`;
                        const commonTranslationPath = `CommonValidationMessages.${errorKey}`;
                        const translation = this.appTranslation.get(fullTranslationPath);
                        if (translation !== fullTranslationPath ){
                          formErrors[key] += this.appTranslation.get(fullTranslationPath);
                        } else {
                          if (this.appTranslation.get(commonTranslationPath) !== commonTranslationPath){
                            formErrors[key] += this.appTranslation.get(commonTranslationPath) + ' ';
                          }
                        }

                      }
                }

            }
        }
    });
    return formErrors;
}
}

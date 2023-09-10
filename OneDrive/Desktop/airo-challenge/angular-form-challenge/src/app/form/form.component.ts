import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { FORM_ERROR_MESSAGES } from './form.consts';
import { CsvParserService } from '../services/csv-parser.service';
import { UserFormData } from '../models/form.model'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  userForm!: FormGroup;
  formData!: UserFormData;
  csvData: any[] = [];
  selectedFile: File | null = null;
  formErrorMessages = FORM_ERROR_MESSAGES;

  constructor(
    private fb: FormBuilder, 
    private router: Router, 
    private csvParserService: CsvParserService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, this.alphabetOnlyValidator]],
      lastName: ['', [Validators.required, this.alphabetOnlyValidator]],
      email: ['', [Validators.required, Validators.email]],
      subscription: ['Advanced'],
      password: ['', [Validators.required, Validators.minLength(8), this.passwordValidator]],
      csvFile: ['', Validators.required]
    });
  }

  passwordValidator(control: FormControl): { [s: string]: boolean } | null {
    if (!(/[A-Za-z]/.test(control.value) && /[!@#$%^&*]/.test(control.value))) {
      return { invalidPassword: true };
    }
    return null;
  }

  alphabetOnlyValidator(control: FormControl): { [key: string]: any } | null {
    return /^[A-Za-z\s]+$/.test(control.value) ? null : { 'alphabetOnly': { value: control.value } };
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.readAndParseFile(file);
    }
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      this.formData = this.userForm.value as UserFormData;
      const navigationExtras = {
        state: {
          formData: this.userForm.value,
          csvData: this.csvData
        }
      };
      this.router.navigate(['/summary'], navigationExtras);
    }
  }

  onClear(): void {
    if (this.userForm.dirty && confirm('Are you sure you want to discard the changes?')) {
      this.userForm.reset();
    }
  }

  readAndParseFile(file: File): void {
    const reader = new FileReader();
    reader.readAsText(file, 'UTF-8');
    reader.onload = (evt: any) => {
      this.csvData = this.csvParserService.parse(evt.target.result);
    };
    reader.onerror = () => {
      console.error('An error occurred while reading the file.');
    };
  }

  getErrorMessageForField(field: string): string | null {
    const control = this.userForm.get(field);
    const errorKeys = Object.keys(FORM_ERROR_MESSAGES[field] || {});
    for (const key of errorKeys) {
      if (control?.hasError(key)) {
        return FORM_ERROR_MESSAGES[field][key];
      }
    }
    return null;
  }

  collectErrors(): string[] {
    const formErrors: string[] = [];
    Object.entries(this.userForm.controls).forEach(([controlName, control]) => {
      if (control.invalid) {
        this.addControlErrorsToFormErrors(controlName, control.errors, formErrors);
      }
    });
    return formErrors;
  }

  private addControlErrorsToFormErrors(controlName: string, controlErrors: any, formErrors: string[]): void {
    if (controlErrors?.['required']) {
      formErrors.push(FORM_ERROR_MESSAGES[controlName]['required']);
    } else {
      Object.keys(controlErrors).forEach(errorName => {
        formErrors.push(FORM_ERROR_MESSAGES[controlName][errorName]);
      });
    }
  }
}
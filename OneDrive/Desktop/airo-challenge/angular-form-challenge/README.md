# AngularFormChallenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.1.

## Running unit tests

I included some Karma unit testing. Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Features

- User registration form with fields:
  - First Name
  - Last Name
  - Email
  - Subscription
  - Password
  - CSV File Upload

- CSV Parsing: Allows the user to upload a CSV file which is then parsed and displayed.
- Summary View: Once the form is submitted, the data is displayed in a summary view. This includes the form data as well as the parsed CSV content.

## Technical Choices

- **Form Validation**: The form includes custom validators for fields such as the password (which currently requires at least one normal character and one special character).
- **Service Abstractions**: The project uses a service (`CsvParserService`) to handle the CSV parsing, making the code modular and maintainable, as this service could be reused in other parts of the application.
- **Error Handling**: In the event that no data is provided to the summary component, an error message is displayed to the user.

## Considerations & Future Improvements

1. **Password Length**: Currently, there is no validation for the maximum number of characters in the password as it was not requested in the task description. This could be added added through Validators.maxLength(x) in the password field of the form.component.ts file.
2. **Password Display in Summary**: For security reasons, it's a good practice not to reveal passwords, even in summary views, but I decided to keep the app consistent with the task requirements ("Upon submitting the form, you should print the value of the Form on a separate page.")
3. **Use of `HistoryService`**: While the `HistoryService` might seem redundant in this project's scale, in larger applications this kind of abstraction can prove beneficial. It demonstrates the potential scalability of the codebase. For example, if you ever need to modify how you handle the state or add additional functionalities related to the history, you can do it in the service without touching the component code.
4. **Error Page in Summary**: Personal freedom was taken to add an error page for the summary. However, in a real-world scenario, it's recommended to consult with product stakeholders regarding its necessity and implementation.

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository_url>

2. Navigate to the project directory and install the required packages:
    cd angular-form-challenge
    npm install

3. Run the Angular development server:
    ng serve

4. Visit http://localhost:4200/ in your browser to view the application.s
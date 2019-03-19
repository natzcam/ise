import { Injectable, ErrorHandler } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private snackBar: MatSnackBar) {}

  handleError(error) {
    this.snackBar.open(error.message, 'OK', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
    throw error;
  }
}

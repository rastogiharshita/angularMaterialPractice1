
// Custom DateAdapter

import { NativeDateAdapter } from '@angular/material/core';


// extend NativeDateAdapter's format method to specify the date format.
export class CustomDateAdapter extends NativeDateAdapter {
   format(date: Date, displayFormat: Object): string {
      if (displayFormat === 'input') {
         const day = date.getUTCDate();
         const month = date.getUTCMonth() + 1;
         const year = date.getFullYear();
         // Return the format as per your requirement
         return `${day}/${month}/${year}`;
      } else {
         return date.toDateString();
      }
   }
   
   // If required extend other NativeDateAdapter methods.
}

export const CUSTOM_DATE_FORMATS = {
   parse: {
      dateInput: {month: 'short', year: 'numeric', day: 'numeric'}
   },
   display: {
      dateInput: 'input',
      monthYearLabel: {year: 'numeric', month: 'short'},
      dateA11yLabel: {year: 'numeric', month: 'long', day: 'numeric'},
      monthYearA11yLabel: {year: 'numeric', month: 'long'},
   }
};
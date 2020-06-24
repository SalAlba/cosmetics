// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// https://admin.smartcity.cktech.eu/api/v1
// http://sal.paradise-cosmetic.com/products/

export const environment = {
  api: 'http://sal.paradise-cosmetic.com',
  notifyUrl: 'http://paradise-cosmetic.com',
  helpEmail: 'info@paradise-cosmetic.com',
  production: false,
  accountNumber: '0347052404860027',
  notificationEmails:[
    'saljan93@live.com',
    'nabhan1008@gmail.com',
  ]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

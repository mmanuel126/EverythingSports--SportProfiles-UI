// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { NgxLoggerLevel } from "ngx-logger";

export const environment = {
  production: true,
  apiUrl: '/api',
  webServiceURL:  "http://www.sportprofiles.net/services/" ,
  appName: "SportProfiles.net",
  appLogo: "../assets/img/lgicon.jpg",
  appLogoText: "Sport Profiles",
  companyName: "SportProfiles.net",
  webSiteDomain:"http://www.sportprofiles.net/app/",
  memberImagesUrlPath:"http://www.sportprofiles.net/images/members/",
  networkImagesUrlPath:"www.sportprofiles.net/images/networks/",
  eventImageUrlpath:"www.sportprofiles.net/images/events/",
  logging: {
    serverLoggingUrl: 'http://sportprofiles.net/services/common/logs',
    level: NgxLoggerLevel.DEBUG,
    serverLogLevel: NgxLoggerLevel.ERROR
  }
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

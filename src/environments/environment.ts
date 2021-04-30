// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// const packageJson = require('../../package.json');
import * as packageJson from '../../package.json' ;


export const environment = {
  appName: 'REALWorks',
  appVersion: '0.8.0(Beta 1)',
  appDescription: 'Realestate property managememt system',
  production: false,
  weatherApiKey: '5913dc5791f1c134dee45807e4192940', // OpenWeatherMap api
  // weatherApiKey: '3396569b4df442909e0203014190809', // Apixu weather api
  weatherBaseUri: 'https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?id=',
  versions: {
    app: packageJson.version,
    angular: packageJson.dependencies['@angular/core'],
    angularCli: packageJson.devDependencies['@angular/cli'],
    ngrx: packageJson.dependencies['@ngrx/store'],
    rxjs: packageJson.dependencies.rxjs,
    typescript: packageJson.devDependencies['typescript'],
    material: packageJson.dependencies['@angular/material']
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

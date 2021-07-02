import * as packageJson from '../../package.json' ;

export const environment = {
  version: '0.9.0',
  appName: 'REALWorks',
  appVersion: '0.8.4(Beta 1)',
  appDescription: 'Realestate property managememt system',
  production: true,
  weatherApiKey: '3396569b4df442909e0203014190809', // Apixu weather api
  weatherBaseUri: '',
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

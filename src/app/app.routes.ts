import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path : 'angular',
        loadChildren: () => import('./angular/angular.module').then(m => m.AngularModule)

    },
    {
        path : 'aws',
        loadChildren: () => import('./modules/aws/aws.module').then(m => m.AwsModule)

    }
];

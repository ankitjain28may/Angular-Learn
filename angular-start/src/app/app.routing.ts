import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {BasicComponent} from './Components/basic/basic.component';

const appRoutes: Routes = [
    {
        path:'',
        component: BasicComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
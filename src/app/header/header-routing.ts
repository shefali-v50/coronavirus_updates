import { HeaderComponent } from './header.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { NewsComponent } from '../news/news.component';
import { DeathComponent } from '../death/death.component';
import { PrecautionsComponent } from '../precautions/precautions.component';

import { Routes } from '@angular/router';

export const routerConfig : Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'news',
        component: NewsComponent
    },
    {
        path: 'deaths',
        component: DeathComponent
    },
    {
        path: 'precautions',
        component: PrecautionsComponent
    }
];
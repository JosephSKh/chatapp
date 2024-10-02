import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ChatComponent } from './chat/chat.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    {path: '', component: ChatComponent},
    {path: 'about', component: AboutComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'profile/:username/:age', component: ProfileComponent},
];

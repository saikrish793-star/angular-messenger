import { Routes } from '@angular/router';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';

export const routes: Routes = [
  {
    path: '',
    component: ChatWindowComponent, // default route
  },
  {
    path: '**',
    redirectTo: '', // redirect unknown routes to chat
  },
];

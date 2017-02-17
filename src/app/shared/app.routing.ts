import { Routes, RouterModule } from '@angular/router';
import {BookListComponent} from "../book-list/book-list.component";
import {BookDetailComponent} from "../book-detail/book-detail.component";


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/books'
  },
  {
    path: 'books',
    component: BookListComponent
  },
  {
    path: 'books/:isbn',
    component: BookDetailComponent
  }
];

export const Routing = RouterModule.forRoot(routes);

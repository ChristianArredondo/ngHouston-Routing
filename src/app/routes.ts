import { SelectComponent } from './select/select.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';

export const APP_ROUTES = [
  { path: '', component: SelectComponent },
  { path: 'recipes/:id', component: ViewComponent },
  { path: 'recipes/:id/edit', component: EditComponent },
  { path: '**', redirectTo: '' },
];

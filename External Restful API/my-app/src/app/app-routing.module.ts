import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FashionNewComponent } from './fashion-new/fashion-new.component';
import { FashionDetailComponent } from './fashion-detail/fashion-detail.component';
import { FashionUpdateComponent } from './fashion-update/fashion-update.component';
import { FashionDeleteComponent } from './fashion-delete/fashion-delete.component';
import { FashionComponent } from './fashion/fashion.component';

const routes: Routes = [
  { path: "home", component: FashionComponent },
  { path: "new", component: FashionNewComponent },
  { path: "detail", component: FashionDetailComponent },
  { path: "update", component: FashionUpdateComponent },
  { path: "delete", component: FashionDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = []

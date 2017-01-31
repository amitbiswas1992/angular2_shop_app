import { NgModule } from '@angular/core';
import { ShopComponent } from './shop/shop.component';

import {Routes, RouterModule} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
   {path: '',pathMatch: 'full',redirectTo: 'shop'},
    {path: 'shop', component: ShopComponent },
       {path: 'about', component: AboutComponent },
          {path: 'contact', component: ContactComponent }
]


    @NgModule({
        imports:[RouterModule.forRoot(routes)],
         exports: [RouterModule]
    })
export class AppRoutingModule{


}
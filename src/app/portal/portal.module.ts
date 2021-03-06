import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalComponent } from './portal.component';
import { ProductLookupComponent } from './product-lookup/product-lookup.component';
import { ReviewProductComponent } from './review-product/review-product.component';
import {PortalRoutingModule} from './portal-routing.module';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TopbarComponent } from './layout/topbar/topbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AngularFirestoreModule} from '@angular/fire/firestore';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PortalRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AngularFirestoreModule
  ],
  declarations: [
    PortalComponent,
    ProductLookupComponent,
    ReviewProductComponent,
    TopbarComponent,
  ],
})
export class PortalModule { }

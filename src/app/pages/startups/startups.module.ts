import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2PaginationModule } from 'ng2-pagination'; 

import { StartupsComponent, SearchPipe, PipeFilter, SearchArrayPipe } from './startups.component';
import { StartupsService } from './startups.service';
import { routing } from './startups.routing';

import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { ModalComponent } from './custom.modal';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    Ng2PaginationModule,
    routing,
    BootstrapModalModule
  ],
  entryComponents: [
    ModalComponent
  ],
  declarations: [
    StartupsComponent,
    SearchPipe,
    PipeFilter,
    SearchArrayPipe,
    ModalComponent
  ],
  bootstrap:[ StartupsComponent ],
  providers: [
    StartupsService
  ]

})
export default class StartupsModule {}
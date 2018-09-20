import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './Challenge-1/header/header.component';
import { FooterComponent } from './Challenge-1/footer/footer.component';
import { PopUpComponent } from './Challenge-2/pop-up/pop-up.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import { PostListComponent } from './Challenge-3/post-list/post-list.component';
import { PostService } from './Challenge-3/post-list/shared/post.service';
import { CommentService } from './Challenge-3/post-list/shared/comment.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PopUpComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    HttpClientModule
  ],
  exports:[ModalModule],
  providers: [PostService,CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }

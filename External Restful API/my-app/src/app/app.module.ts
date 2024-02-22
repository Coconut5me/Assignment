import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { DongABankComponent } from './dong-abank/dong-abank.component';
import { FakeProductComponent } from './fake-product/fake-product.component';
import { FakeProduct2Component } from './fake-product2/fake-product2.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookNewComponent } from './book-new/book-new.component';
import { BookUpdateComponent } from './book-update/book-update.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { Books125Component } from './books125/books125.component';
import { Book125DetailComponent } from './book125-detail/book125-detail.component';
import { Book125NewComponent } from './book125-new/book125-new.component';
import { Book125UpdateComponent } from './book125-update/book125-update.component';
import { Book125DeleteComponent } from './book125-delete/book125-delete.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FashionComponent } from './fashion/fashion.component';
import { FashionDetailComponent } from './fashion-detail/fashion-detail.component';
import { FashionNewComponent } from './fashion-new/fashion-new.component';
import { FashionUpdateComponent } from './fashion-update/fashion-update.component';
import { FashionDeleteComponent } from './fashion-delete/fashion-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    DongABankComponent,
    FakeProductComponent,
    FakeProduct2Component,
    BitcoinComponent,
    BooksComponent,
    BookDetailComponent,
    BookNewComponent,
    BookUpdateComponent,
    BookDeleteComponent,
    Books125Component,
    Book125DetailComponent,
    Book125NewComponent,
    Book125UpdateComponent,
    Book125DeleteComponent,
    RoutingComponents,
    FileUploadComponent,
    FashionComponent,
    FashionDetailComponent,
    FashionNewComponent,
    FashionUpdateComponent,
    FashionDeleteComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

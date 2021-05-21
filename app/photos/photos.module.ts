import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { PhotoComponent } from "./photo/photo.component";
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotosFormComponent } from './photos-form/photos-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { FilterByDescription } from "./photo-list/filter-by-description.pipe";

@NgModule({
  declarations: [
    PhotoComponent,
    PhotoListComponent,
    PhotosFormComponent,
    PhotosComponent,
    FilterByDescription
  ],
  exports: [
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ]
})
export class PhotosModule {

}

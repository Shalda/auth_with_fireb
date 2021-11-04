import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBxWWupnR7AghW90xLVKdUFXAQ_YoQ9uI",
  authDomain: "fbauth-853b0.firebaseapp.com",
  databaseURL: "https://fbauth-853b0-default-rtdb.firebaseio.com",
  projectId: "fbauth-853b0",
  storageBucket: "fbauth-853b0.appspot.com",
  messagingSenderId: "636570909554",
  appId: "1:636570909554:web:4bc1a5c01c9d40b59ffbeb",
  measurementId: "G-0WK2PH0LZF",
};
@NgModule({
  imports: [
    BrowserModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireAuthModule,
  ],
  providers: [],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

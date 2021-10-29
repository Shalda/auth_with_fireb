import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

import { ReactiveFormsModule } from "@angular/forms";
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  GoogleLoginProvider,
  AmazonLoginProvider,
  MicrosoftLoginProvider,
} from "angularx-social-login";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    SocialLoginModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: "SocialAuthServiceConfig",
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              "1061859259019-d6qt4v45tlhjbjt4rid502g033hhcsn6.apps.googleusercontent.com"
            ),
          },
          {
            id: AmazonLoginProvider.PROVIDER_ID,
            provider: new AmazonLoginProvider(
              "amzn1.application-oa2-client.14f6efa3a928435a98656cb65f251b3c"
            ),
          },
          {
            id: MicrosoftLoginProvider.PROVIDER_ID,
            provider: new MicrosoftLoginProvider(
              "86b9aa56-0aa9-444b-99e9-934cf43916b1"
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

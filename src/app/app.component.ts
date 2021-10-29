import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {
  AmazonLoginProvider,
  GoogleLoginProvider,
  MicrosoftLoginProvider,
  SocialAuthService,
  SocialUser,
} from "angularx-social-login";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  public reactiveForm!: FormGroup;
  public user!: SocialUser;
  public isSignedin!: boolean;
  public popupOpen: boolean = false;
  constructor(
    private fb: FormBuilder,
    private socialAuthService: SocialAuthService,
    public dialog: MatDialog
  ) {}
  //open popup
  @ViewChild("sign_in_modal") sign_in_modal: TemplateRef<any>;
  public openDialog() {
    this.popupOpen = true;
    this.dialog.open(this.sign_in_modal, {
      panelClass: "signin-dialog-container",
    });
  }
  //check provider name and start login
  public signIn(provider: string) {
    switch (provider) {
      case "google":
        this._signInToProvider(GoogleLoginProvider.PROVIDER_ID);
        break;
      case "aws":
        this._signInToProvider(AmazonLoginProvider.PROVIDER_ID);
        break;
      case "mcr":
        this._signInToProvider(MicrosoftLoginProvider.PROVIDER_ID);
        break;
      default:
        return;
    }
  }
  private _signInToProvider(providerId: string) {
    this.socialAuthService
      .signIn(providerId)
      .then((data) => this.successSignIn(data))
      .catch((error) => console.log(error));
  }
  //set provider to localstorage
  public successSignIn(response) {
    if (response.authToken) {
      localStorage.setItem("provider", response.provider);
    }
  }

  public logout(): void {
    this.socialAuthService.signOut();
    localStorage.removeItem("provider");
  }

  ngOnInit() {
    this.reactiveForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });

    //checking that userInfo is received, closing popup
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.isSignedin = user != null;
      if (this.isSignedin) {
        this.popupOpen = false;
        this.dialog.closeAll();
      }
      console.log(this.user);
    });
  }
}

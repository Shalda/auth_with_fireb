import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

import { AngularFireAuth } from "@angular/fire/compat/auth";
import firebase from "firebase/compat/app";
import AuthProvider = firebase.auth.AuthProvider;
import UserCredential = firebase.auth.UserCredential;
import User = firebase.User;

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  public user: User | null;
  constructor(public dialog: MatDialog, public afAuth: AngularFireAuth) {}
  //open popup
  @ViewChild("sign_in_modal") sign_in_modal: TemplateRef<any>;
  public openDialog() {
    this.dialog.open(this.sign_in_modal, {
      panelClass: "signin-dialog-container",
    });
  }

  //check provider name and start login
  public signIn(provider: string) {
    let authProvider: AuthProvider;
    switch (provider) {
      case "google":
        authProvider = new firebase.auth.GoogleAuthProvider();
        this._signInToProvider(authProvider);
        break;
      case "aws":
        this._signInToProvider(authProvider);
        break;
      case "mcr":
        authProvider = new firebase.auth.OAuthProvider("microsoft.com");
        this._signInToProvider(authProvider);
        break;
      default:
        return;
    }
  }
  private _signInToProvider(providerId: AuthProvider) {
    this.afAuth
      .signInWithPopup(providerId)
      .then((userInfo: UserCredential) => {
        console.log(userInfo);
      })
      .catch((error) => console.log(error));
  }
  logout() {
    this.afAuth.signOut().catch((error) => console.log(error));
  }
  ngOnInit() {
    //check that userInfo is received, close popup
    this.afAuth.user.subscribe((user: User | null) => {
      this.user = user;
      if (user) {
        this.dialog.closeAll();
      }
    });
  }
}

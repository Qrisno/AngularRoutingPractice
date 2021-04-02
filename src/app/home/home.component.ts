import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}
  onLoadClick(id: number): void {
    this.router.navigate(["/servers", id, "edit"], {
      queryParams: { allowEdit: "3" },
      fragment: "loading",
    });
  }
  onLogIn() {
    this.authService.login();
    console.log(this.authService.loggedIn);
  }
  onLogOut() {
    this.authService.logOut();
    console.log(this.authService.loggedIn);
  }
}

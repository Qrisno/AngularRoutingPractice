import { Component, OnDestroy, OnInit } from "@angular/core";

import { ServersService } from "../servers.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"],
})
export class ServerComponent implements OnInit, OnDestroy {
  server: { id: number; name: string; status: string };
  subscription: Subscription;
  constructor(
    private serversService: ServersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = +this.activatedRoute.snapshot.params["id"];
    this.server = this.serversService.getServer(id);
    this.subscription = this.activatedRoute.params.subscribe((params) => {
      this.server = this.serversService.getServer(+params["id"]);
      console.log(this.server);
    });
  }
  onEdit() {
    this.router.navigate(["edit"], {
      relativeTo: this.activatedRoute,
      queryParamsHandling: "preserve",
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

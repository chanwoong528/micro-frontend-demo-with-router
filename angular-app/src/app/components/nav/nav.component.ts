import { Component } from "@angular/core";

import { routes } from "../../app-routing.module";
import { RouterLink } from "@angular/router";
import { NgFor } from "@angular/common";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  standalone: true,
  imports: [RouterLink, NgFor]

})
export class NavComponent {
  routes = routes[0].children?.filter(route => route.data?.['title']);

}
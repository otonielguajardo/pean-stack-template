import { bootstrapApplication } from "@angular/platform-browser";
import { provideHttpClient } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { provideRouter } from "@angular/router";
import { AppRoutes } from "./app.routes";

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(AppRoutes),
    provideHttpClient(),
  ]
}).catch((err) =>
  console.log(err)
);
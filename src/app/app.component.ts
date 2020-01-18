import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'Index Manager';
  appStatus = 'running';
  pdfSrc = 'https://drive.google.com/open?id=1bpTixq_1MkZF1apPeTAltkdDc8Nwaiun';

  private twitter: any;

  constructor(private _router: Router, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    this.initTwitterWidget();
    iconRegistry.addSvgIcon(
      'vpn_key',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/vpn_key-24px.svg'));
  }

  initTwitterWidget() {
    this.twitter = this._router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        (<any>window).twttr = (function (d, s, id) {
          let js: any, fjs = d.getElementsByTagName(s)[0],
              t = (<any>window).twttr || {};
          if (d.getElementById(id)) return t;
          js = d.createElement(s);
          js.id = id;
          js.src = "https://platform.twitter.com/widgets.js";
          fjs.parentNode.insertBefore(js, fjs);

          t._e = [];
          t.ready = function (f: any) {
              t._e.push(f);
          };

          return t;
        }(document, "script", "twitter-wjs"));

        if ((<any>window).twttr.ready())
          (<any>window).twttr.widgets.load();

      }
    });
  }

  ngOnDestroy() {
    this.twitter.unsubscribe();
  }
}
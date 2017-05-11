"use strict";
// For vendors for example jQuery, Lodash, angular2-jwt just import them here unless you plan on
// chunking vendors files for async loading. You would need to import the async loaded vendors
// at the entry point of the async loaded file. Also see custom-typings.d.ts as you also need to
// run `typings install x` where `x` is your module
Object.defineProperty(exports, "__esModule", { value: true });
// Angular 2
require("@angular/platform-browser");
require("@angular/platform-browser-dynamic");
require("@angular/core");
require("@angular/common");
require("@angular/forms");
require("@angular/http");
require("@angular/router");
require("@angularclass/hmr");
// RxJS
require("rxjs/add/operator/map");
require("rxjs/add/operator/mergeMap");
require("jquery");
require("tether");
require("bootstrap");
require("widgster");
require("bootstrap-select");
require("select2");
require("pace");
require("jquery-sparkline");
if ('production' === ENV) {
    // Production
}
else {
    // Development
}
//# sourceMappingURL=vendor.browser.js.map
System.register(['@angular/core', '@angular/router', 'rxjs/Observable', 'rxjs/Subject', './hero-search.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, Observable_1, Subject_1, hero_search_service_1;
    var HeroSearchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (hero_search_service_1_1) {
                hero_search_service_1 = hero_search_service_1_1;
            }],
        execute: function() {
            HeroSearchComponent = (function () {
                function HeroSearchComponent(heroSearchService, router) {
                    this.heroSearchService = heroSearchService;
                    this.router = router;
                    this.searchTerms = new Subject_1.Subject();
                }
                // Push a search term into the observable stream.
                HeroSearchComponent.prototype.search = function (term) {
                    this.searchTerms.next(term);
                };
                HeroSearchComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.heroes = this.searchTerms
                        .debounceTime(300) // wait for 300ms pause in events
                        .distinctUntilChanged() // ignore if next search term is same as previous
                        .switchMap(function (term) { return term // switch to new observable each time
                        ? _this.heroSearchService.search(term)
                        : Observable_1.Observable.of([]); })
                        .catch(function (error) {
                        // TODO: real error handling
                        //        console.log(error);
                        return Observable_1.Observable.of([]);
                    });
                };
                HeroSearchComponent.prototype.gotoDetail = function (hero) {
                    var link = ['/detail', hero.id];
                    this.router.navigate(link);
                };
                HeroSearchComponent = __decorate([
                    core_1.Component({
                        //  moduleId: module.id,
                        selector: 'hero-search',
                        templateUrl: 'assets/app/hero-search.component.html',
                        styleUrls: ['assets/app/hero-search.component.css'],
                        providers: [hero_search_service_1.HeroSearchService],
                    }), 
                    __metadata('design:paramtypes', [hero_search_service_1.HeroSearchService, (typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object])
                ], HeroSearchComponent);
                return HeroSearchComponent;
                var _a;
            }());
            exports_1("HeroSearchComponent", HeroSearchComponent);
        }
    }
});
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=/assets/hero-search.component.js.map
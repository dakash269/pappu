System.register(['@angular/core', '@angular/router', './hero.service'], function(exports_1, context_1) {
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
    var core_1, router_1, hero_service_1;
    var HeroesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            HeroesComponent = (function () {
                function HeroesComponent(heroService, router) {
                    this.heroService = heroService;
                    this.router = router;
                }
                HeroesComponent.prototype.add = function (name) {
                    var _this = this;
                    name = name.trim();
                    if (!name) {
                        return;
                    }
                    this.heroService.create(name)
                        .then(function (hero) {
                        _this.heroes.push(hero);
                        _this.selectedHero = null;
                    });
                };
                HeroesComponent.prototype.delete = function (hero) {
                    var _this = this;
                    this.heroService
                        .delete(hero.id)
                        .then(function () {
                        _this.heroes = _this.heroes.filter(function (h) { return h !== hero; });
                        if (_this.selectedHero === hero) {
                            _this.selectedHero = null;
                        }
                    });
                };
                HeroesComponent.prototype.ngOnInit = function () {
                    this.getHeroes();
                };
                HeroesComponent.prototype.onSelect = function (hero) {
                    this.selectedHero = hero;
                };
                HeroesComponent.prototype.gotoDetail = function () {
                    this.router.navigate(['/detail', this.selectedHero.id]);
                };
                HeroesComponent.prototype.getHeroes = function () {
                    var _this = this;
                    this.heroService
                        .getHeroes()
                        .then(function (heroes) { return _this.heroes = heroes; });
                };
                HeroesComponent = __decorate([
                    core_1.Component({
                        //  moduleId: module.id,
                        selector: 'my-heroes',
                        templateUrl: 'assets/app/heroes.component.html',
                        styleUrls: ['assets/app/heroes.component.css'],
                    }), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService, (typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object])
                ], HeroesComponent);
                return HeroesComponent;
                var _a;
            }());
            exports_1("HeroesComponent", HeroesComponent);
        }
    }
});
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=/assets/heroes.component.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSiemaComponent, NgxSiemaSlideComponent } from './siema.component';
import { NgxSiemaService } from './siema.service';
var NgxSiemaModule = (function () {
    function NgxSiemaModule() {
    }
    NgxSiemaModule_1 = NgxSiemaModule;
    NgxSiemaModule.forRoot = function () {
        return {
            ngModule: NgxSiemaModule_1,
            providers: [
                NgxSiemaService,
            ],
        };
    };
    var NgxSiemaModule_1;
    NgxSiemaModule = NgxSiemaModule_1 = __decorate([
        NgModule({
            imports: [
                CommonModule,
            ],
            declarations: [
                NgxSiemaComponent,
                NgxSiemaSlideComponent,
            ],
            exports: [
                NgxSiemaComponent,
                NgxSiemaSlideComponent,
            ],
        })
    ], NgxSiemaModule);
    return NgxSiemaModule;
}());
export { NgxSiemaModule };
//# sourceMappingURL=siema.module.js.map

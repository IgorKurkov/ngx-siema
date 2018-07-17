import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSiemaComponent, NgxSiemaSlideComponent } from './siema.component';
import { NgxSiemaService } from './siema.service';
var NgxSiemaModule = (function () {
    function NgxSiemaModule() {
    }
    NgxSiemaModule.forRoot = function () {
        return {
            ngModule: NgxSiemaModule,
            providers: [
                NgxSiemaService,
            ],
        };
    };
    NgxSiemaModule.decorators = [
        { type: NgModule, args: [{
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
                },] },
    ];
    return NgxSiemaModule;
}());
export { NgxSiemaModule };
//# sourceMappingURL=siema.module.js.map
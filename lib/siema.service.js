import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { publish, refCount } from 'rxjs/operators';
var next$ = new ReplaySubject(1);
var prev$ = new ReplaySubject(1);
var goTo$ = new ReplaySubject(1);
var remove$ = new ReplaySubject(1);
var insert$ = new ReplaySubject(1);
var prepend$ = new ReplaySubject(1);
var append$ = new ReplaySubject(1);
var destroy$ = new ReplaySubject(1);
var currentSlide$ = new ReplaySubject(1);
var NgxSiemaService = (function () {
    function NgxSiemaService() {
    }
    NgxSiemaService.prototype.next = function (numbers, selector) {
        if (numbers === void 0) { numbers = 1; }
        var listener = new BehaviorSubject(null);
        next$.next({ selector: selector, numbers: numbers, listener: listener });
        return listener.asObservable();
    };
    NgxSiemaService.prototype.prev = function (numbers, selector) {
        if (numbers === void 0) { numbers = 1; }
        var listener = new BehaviorSubject(null);
        prev$.next({ selector: selector, numbers: numbers, listener: listener });
        return listener.asObservable();
    };
    NgxSiemaService.prototype.goTo = function (index, selector) {
        var listener = new BehaviorSubject(null);
        goTo$.next({ selector: selector, index: index, listener: listener });
        return listener.asObservable();
    };
    NgxSiemaService.prototype.remove = function (index, selector) {
        var listener = new BehaviorSubject(null);
        remove$.next({ selector: selector, index: index, listener: listener });
        return listener.asObservable();
    };
    NgxSiemaService.prototype.insert = function (item, index, selector) {
        var listener = new BehaviorSubject(null);
        insert$.next({ selector: selector, item: item, index: index, listener: listener });
        return listener.asObservable();
    };
    NgxSiemaService.prototype.prepend = function (item, selector) {
        var listener = new BehaviorSubject(null);
        prepend$.next({ selector: selector, item: item, listener: listener });
        return listener.asObservable();
    };
    NgxSiemaService.prototype.append = function (item, selector) {
        var listener = new BehaviorSubject(null);
        append$.next({ selector: selector, item: item, listener: listener });
        return listener.asObservable();
    };
    NgxSiemaService.prototype.destroy = function (restoreMarkup, selector) {
        if (restoreMarkup === void 0) { restoreMarkup = false; }
        var listener = new BehaviorSubject(null);
        destroy$.next({ selector: selector, listener: listener });
        return listener.asObservable();
    };
    NgxSiemaService.prototype.currentSlide = function (selector) {
        var listener = new BehaviorSubject(null);
        currentSlide$.next({ selector: selector, listener: listener });
        return listener.asObservable();
    };
    NgxSiemaService.prototype.onNext = function () {
        return next$.pipe(publish(), refCount());
    };
    NgxSiemaService.prototype.onPrev = function () {
        return prev$.pipe(publish(), refCount());
    };
    NgxSiemaService.prototype.onGoTo = function () {
        return goTo$.pipe(publish(), refCount());
    };
    NgxSiemaService.prototype.onRemove = function () {
        return remove$.pipe(publish(), refCount());
    };
    NgxSiemaService.prototype.onInsert = function () {
        return insert$.pipe(publish(), refCount());
    };
    NgxSiemaService.prototype.onPrepend = function () {
        return prepend$.pipe(publish(), refCount());
    };
    NgxSiemaService.prototype.onAppend = function () {
        return append$.pipe(publish(), refCount());
    };
    NgxSiemaService.prototype.onDestroy = function () {
        return destroy$.pipe(publish(), refCount());
    };
    NgxSiemaService.prototype.onCurrentSlide = function () {
        return currentSlide$.pipe(publish(), refCount());
    };
    NgxSiemaService.decorators = [
        { type: Injectable },
    ];
    return NgxSiemaService;
}());
export { NgxSiemaService };
//# sourceMappingURL=siema.service.js.map
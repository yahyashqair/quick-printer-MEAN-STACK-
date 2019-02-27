import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var RegService = /** @class */ (function () {
    function RegService(http) {
        this.http = http;
        this._url = 'http://localhost:3000/reg';
    }
    RegService.prototype.reg = function (userData) {
        return this.http.post(this._url, userData);
    };
    RegService.prototype.list = function () {
        return this.http.get(this._url);
    };
    RegService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], RegService);
    return RegService;
}());
export { RegService };
//# sourceMappingURL=reg.service.js.map
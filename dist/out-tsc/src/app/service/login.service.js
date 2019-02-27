import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this._url = 'http://localhost:3000/login';
    }
    LoginService.prototype.login = function (userData) {
        return this.http.post(this._url, userData);
    };
    LoginService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], LoginService);
    return LoginService;
}());
export { LoginService };
//# sourceMappingURL=login.service.js.map
import { TestBed } from '@angular/core/testing';
import { RegService } from './reg.service';
describe('RegService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(RegService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=reg.service.spec.js.map
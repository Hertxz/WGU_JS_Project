import { TestBed } from "@angular/core/testing";
import { ApiService } from "./api.service";

describe('ApiService', () =>{
    let service: ApiService;

beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(ApiService);
});

it('should be createed', () =>{
    expect(service).toBeTruthy
})
});
import { async, inject, TestBed } from '@angular/core/testing';
import { LocalStorageService } from '@app/services/localStorage.service';

describe('LocalStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [LocalStorageService],
    });
  });

  it('should be created', inject([LocalStorageService], (service: LocalStorageService) => {
    expect(service).toBeTruthy();
  }));

  it('set and get Json', inject([LocalStorageService], (service: LocalStorageService) => {
    // Arrange
    const value = {
      array: [1, 2, 3],
      boolean: true,
      null: null,
      number: 123,
      object: {
        a: 'b',
        c: 'd',
        e: 'f',
      },
      string: 'Hello World',
    };
    // Act
    service.setJson('testJson', value);

    // Assert
    expect(service.getJson('testJson')).toEqual(value);
  }));

  it('set and get String', inject([LocalStorageService], (service: LocalStorageService) => {
    // Arrange
    const value = 'Hello World';

    // Act
    service.setString('testString', value);

    // Assert
    expect(service.getString('testString')).toEqual(value);
  }));
});

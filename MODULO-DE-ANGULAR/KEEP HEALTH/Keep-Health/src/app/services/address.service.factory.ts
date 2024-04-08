import { Injectable } from '@angular/core';
import { Injector } from '@angular/core';
import { AddressService } from './address.service'; // Importe o AddressService
import { HttpClient } from '@angular/common/http';

export const addressServiceFactory = (injector: Injector) => {
  return new AddressService(injector.get(HttpClient));
};

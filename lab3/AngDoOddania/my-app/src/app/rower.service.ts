import { Injectable } from '@angular/core';
import { SpisRowerow } from './BazaRowerow';

@Injectable()
export class RowerService {
  getRowery() {
    return SpisRowerow;
  }
}

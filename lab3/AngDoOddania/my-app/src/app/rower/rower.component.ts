import { Component, OnInit, Input} from '@angular/core';
import { Rower } from '../Rower';

@Component({
  selector: 'app-rower',
  templateUrl: './rower.component.html',
  styleUrls: ['./rower.component.css']
})
export class RowerComponent implements OnInit {
  @Input() iRower: Rower;

  hidePrzyciskPlus: boolean;
  hidePrzyciskMinus: boolean;
  iloscZamowionych: number;
  constructor() {
    this.iloscZamowionych = 0;
  }

  public getHidePrzyciskPlus() {
    return this.hidePrzyciskPlus;
  }

  public getHidePrzyciskMinus() {
    return this.hidePrzyciskMinus;
  }

  public getIloscZamowionych() {
    return this.iloscZamowionych;
  }

  ngOnInit() {
    this.hidePrzyciskPlus = !this.iRower.sprawdzDostepnosc();
    this.hidePrzyciskMinus = true;
  }

  zmniejszZamowienie() {
    if (this.hidePrzyciskPlus === true) {
      this.hidePrzyciskPlus = false;
    }
    if (this.iloscZamowionych > 0) {
      this.iRower.zwiekszIlosc(1);
      this.iloscZamowionych -= 1;
    }
    if (this.iloscZamowionych === 0) {
      this.hidePrzyciskMinus = true;
    }
  }

  zwiekszZamowienie() {
    if (this.iloscZamowionych === 0) {
      this.hidePrzyciskMinus = false;
    }
    if (this.iRower.ilosc > 0) {
      this.iRower.zmniejszIlosc(1);
      this.iloscZamowionych += 1;
    }
    if (this.iRower.ilosc === 0) {
      this.hidePrzyciskPlus = true;
    }
  }
}

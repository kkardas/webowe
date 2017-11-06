export class Rower {
  id: number;
  name: string;
  description: string;
  ilosc: number;
  cena: number;
  obraz: string;

  public constructor(p_id: number,
                     p_name: string,
                     p_desc: string,
                     p_ilosc: number,
                     p_cena: number,
                     p_obraz: string) {
    this.id = p_id;
    this.name = p_name;
    this.description = p_desc;
    this.ilosc = p_ilosc;
    this.cena = p_cena;
    this.obraz = p_obraz;
  }

  public getName() {
    return this.name;
  }

  public getDesc() {
    return this.description;
  }

  public getIlosc() {
    return this.ilosc;
  }

  public getCena() {
    return this.cena;
  }

  public getObraz() {
    return this.obraz;
  }

  public sprawdzDostepnosc() {
    return this.ilosc > 0;
  }

  public zmniejszIlosc(ilosc: number) {
    this.ilosc -= ilosc;
  }

  public zwiekszIlosc(ilosc: number) {
    this.ilosc += ilosc;
  }
}

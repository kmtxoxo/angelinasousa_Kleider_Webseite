export class Product {

  artikelnummer: number;
  name: string;
  groesse: string;
  farbe: string;
  preis: number;
  beschreibung: string;
  material: string;
  hauptbild: string;
  thumbnail1?: string;
  thumbnail2?: string;
  kategorie: string;
  kollektion: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

}

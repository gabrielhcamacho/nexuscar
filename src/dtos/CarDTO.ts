export interface CarDTO{
    id: string,
    brand: string,
    name: string,
    about: string,
    rent: {
      period: string,
      price: number,
    },
    interestedPerson : boolean,
    fuel_type: string,
    thumbnail: string,
    placa: string,
    renavam: string,
    modelo:string,
    cor: string,
    valorCompra: string,
    dataCompra: string,
    photos: string[];
}
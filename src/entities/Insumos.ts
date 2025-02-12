export interface Insumos {
  sectors: FarmSectors[];
  inputsColumns: string[];
}

export interface FarmSectors {
  name: string;
  totalFarmers: number;
  insertedPackages: string[];
  packages: Package[];
}

export interface Package {
  id: string;
  name: string;
  received: string;
  sent: number;
}

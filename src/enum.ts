export enum CustomerType {
  REGUlAR = "REGUlAR",
  GOLD = "GOLD",
  PLATINUM = "PLATINUM",
}

export type Customer = {
  id: number;
  name: string;
  type: CustomerType;
};

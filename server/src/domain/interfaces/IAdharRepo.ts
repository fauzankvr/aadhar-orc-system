import { IAdhaar } from "./IAdhaar";


export interface IAdhaarRepository {
  save(aadhaar: IAdhaar): Promise<IAdhaar>;
  findByUID(uid: string): Promise<IAdhaar | null>;
  findAll(): Promise<IAdhaar[]>;
}

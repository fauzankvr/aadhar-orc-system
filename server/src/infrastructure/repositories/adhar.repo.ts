import { IAdhaar } from "../../domain/interfaces/IAdhaar";
import { IAdhaarRepository } from "../../domain/interfaces/IAdharRepo";
import { AadhaarModel } from "../database/models/adharModel";


export class MongoAdhaarRepository implements IAdhaarRepository {
    
  async save(aadhaar: IAdhaar): Promise<IAdhaar> {
    const doc = new AadhaarModel(aadhaar);
    return await doc.save();
  }

  async findByUID(uid: string): Promise<IAdhaar | null> {
    return await AadhaarModel.findOne({ UID: uid }).lean();
  }

  async findAll(): Promise<IAdhaar[]> {
    return await AadhaarModel.find().lean();
  }
}

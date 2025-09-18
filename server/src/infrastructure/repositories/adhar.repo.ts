import { Model } from "mongoose";
import { IAdhaar } from "../../domain/interfaces/IAdhaar";
import { IAdhaarRepository } from "../../domain/interfaces/IAdharRepo";
import { IAdhaarDoc } from "../database/models/adharModel";

export class MongoAdhaarRepository implements IAdhaarRepository {
    constructor(private _aadhaarModel: Model<IAdhaarDoc>) { }

  async save(aadhaar: IAdhaar): Promise<IAdhaar> {
    const doc = new this._aadhaarModel(aadhaar);
    return await doc.save();
  }

  async findByUID(uid: string): Promise<IAdhaar | null> {
    return await this._aadhaarModel.findOne({ UID: uid }).lean();
  }

  async findAll(): Promise<IAdhaar[]> {
    return await this._aadhaarModel.find().lean();
  }
}

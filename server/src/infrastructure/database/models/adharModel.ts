import mongoose, { Schema, Document } from "mongoose";
import { IAdhaar } from "../../../domain/interfaces/IAdhaar";

export interface IAdhaarDoc extends IAdhaar, Document {}

const AadhaarSchema = new Schema<IAdhaarDoc>(
  {
    Name: String,
    DOB: String,
    Gender: String,
    UID: { type: String, unique: true },
    Address: String,
    Pincode: String,
    Age: String,
    maskedMobileNumber: String,
    isUidSame: Boolean,
    age_band: String,
  },
  { timestamps: true }
);

export const AadhaarModel = mongoose.model<IAdhaarDoc>(
  "Aadhaar",
  AadhaarSchema
);

export class AadhaarEntity {
  public Name?: string;
  public DOB?: string;
  public Gender?: string;
  public UID?: string;
  public Address?: string;
  public Pincode?: string;
  public Age?: string;
  public maskedMobileNumber?: string;
  public isUidSame?: boolean;
  public age_band?: string;

  constructor(data: {
    Name?: string;
    DOB?: string;
    Gender?: string;
    UID?: string;
    Address?: string;
    Pincode?: string;
    Age?: string;
    maskedMobileNumber?: string;
    isUidSame?: boolean;
    age_band?: string;
  }) {
    this.Name = data.Name;
    this.DOB = data.DOB;
    this.Gender = data.Gender;
    this.UID = data.UID;
    this.Address = data.Address;
    this.Pincode = data.Pincode;
    this.Age = data.Age;
    this.maskedMobileNumber = data.maskedMobileNumber;
    this.isUidSame = data.isUidSame;
    this.age_band = data.age_band;
  }
}


export type adharData = {
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
};


export type IResponse = {
  status: string;
  message: string;
  data?: adharData; 
  error?: string; 
};
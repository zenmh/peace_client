type IBranch =
  | "BARISHAL"
  | "CHATTOGRAM"
  | "DHAKA"
  | "KHULNA"
  | "RAJSHAHI"
  | "RANGPUR"
  | "MYMENSINGH"
  | "SYLHET";

type ISpeciality =
  | "THYROID"
  | "EYE"
  | "NEUROLOGY"
  | "CARDIOLOGY"
  | "MEDICINE"
  | "PSYCHIATRY"
  | "DENTIST"
  | "ORTHOPEDICS"
  | "HAEMATOLOGY"
  | "GYNAECOLOGY";

type IDoctor = {
  id: string;
  name: string;
  email: string;
  contactNo: string;
  address?: string;
  image?: string;
  experiences: string;
  speciality: ISpeciality;
  branch: IBranch;
  treatmentId: string;
  createdAt: string;
  updatedAt: string;
};

export type { IBranch, ISpeciality, IDoctor };

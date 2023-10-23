export type TypeStore = {
  user_name: string;
  address: string;
  phone_number: string;
  line_id: string;
};

export type TypeTrashMaterial = {
  materialName: string;
  receive:
    | "น้อยกว่า 10 กก."
    | "10 - 20 กก."
    | "20 - 30 กก."
    | "30 - 40 กก."
    | "40 - 50 กก."
    | "50 - 60 กก."
    | "60 - 70 กก."
    | "70 - 80 กก."
    | "80 - 90 กก."
    | "90 - 100 กก."
    | "ไม่จำกัด";
  price: number;
};

export type TypeMaterialDetail = {
  materialName: string;
  receive: string;
  price: number;
};

// export type TypeMaterial ={
//   "plastic_bottle"
//   "ขวด PET ใส"
//   glass_bottle
//   plastic_bag
//   "ถุงฟิล์ม/ยืด"
//   can
//   paper
// }

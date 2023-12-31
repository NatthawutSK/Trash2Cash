import { TypeStore, TypeTrashMaterial } from "./types";

export const TrashMaterial = [
  {
    id: 1,
    materialName: "ขวด PET ใส",
    img: "plastic_bottle",
  },
  {
    id: 2,
    materialName: "ขวดแก้ว",
    img: "glass_bottle",
  },
  {
    id: 3,
    materialName: "กระดาษกล่อง",
    img: "box",
  },
  {
    id: 4,
    materialName: "ถุงฟิล์ม/ยืด",
    img: "plastic_bag",
  },
  {
    id: 5,
    materialName: "กระป๋องอลูมิเนียม",
    img: "can",
  },
  {
    id: 6,
    materialName: "กระดาษขาวดำ",
    img: "paper",
  },
];

export const userdata = {
  username: "Cat Cuteyysad",
  address: "address",
  phone: "0123456789",
  line_id: "line_id",
  image: "https://picsum.photos/200/300",
  score: {
    co2: 9999,
    tree: 9999,
    trash: 9999,
  },
};

export const imgIcon = {
  plastic_bottle: require("../../assets/images/plastic-bottle.png"),
  "ขวด PET ใส": require("../../assets/images/plastic-bottle.png"),
  glass_bottle: require("../../assets/images/glass-bottle.png"),
  ขวดแก้ว: require("../../assets/images/glass-bottle.png"),
  box: require("../../assets/images/box.png"),
  กระดาษกล่อง: require("../../assets/images/box.png"),
  plastic_bag: require("../../assets/images/plastic-bag.png"),
  "ถุงฟิล์ม/ยืด": require("../../assets/images/plastic-bag.png"),
  can: require("../../assets/images/can.png"),
  กระป๋องอลูมิเนียม: require("../../assets/images/can.png"),
  paper: require("../../assets/images/paper.png"),
  กระดาษขาวดำ: require("../../assets/images/paper.png"),
};

export const MockTrashMaterial = [
  {
    materialName: "ขวด PET ใส",
    img: "plastic_bottle",
    recieve: "10 - 20 กก.",
    price: 10,
  },
  {
    materialName: "ขวดแก้ว",
    img: "glass_bottle",
    recieveAmount: "ไม่จำกัด",
    price: 20,
  },
  {
    materialName: "กระดาษกล่อง",
    img: "box",
    recieveAmount: "30 - 40 กก.",
    price: 30,
  },
];

export const Mockstore: TypeStore = {
  user_name: "ร้าน NA NA",
  address: "ถนน 1 ซอยรามคำแหง 159/1 ",
  phone_number: "0812345678",
  line_id: "natthawutSK",
};

export const MockImg: string[] = [
  "https://xn--12c7bzakgbj6bza1cbe6b3jwh.com/upload/about/1735775123198501.webp",
  "http://www.thealami.com/upfile/wongranit1.jpg",
  "https://mpics.mgronline.com/pics/Images/563000002635602.JPEG",
];

export const recieveAmount: string[] = [
  "น้อยกว่า 10 กก.",
  "10 - 20 กก.",
  "20 - 30 กก.",
  "30 - 40 กก.",
  "40 - 50 กก.",
  "50 - 60 กก.",
  "60 - 70 กก.",
  "70 - 80 กก.",
  "80 - 90 กก.",
  "90 - 100 กก.",
  "ไม่จำกัด",
];

// export const recieveImg = {

// }

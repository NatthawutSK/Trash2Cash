import { StorageReference, uploadBytes, ref } from "@firebase/storage";
import { storage } from "../../firebase";
import * as ImagePicker from "expo-image-picker";
import { listAll, getStorage, getDownloadURL } from "firebase/storage";
export function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
export const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.substring(0, maxLength) + "...";
  }
};

export const uploadImage = async (uri: string, path: string) => {
  const fileRef = ref(storage, path);
  const blob = await new Promise<Blob>((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function (e) {
      console.log(e);
      reject(new TypeError("Network request failed"));
    };
    xhr.responseType = "blob";
    xhr.open("GET", uri, true);
    xhr.send(null);
  });

  const result2 = await uploadBytes(fileRef, blob);
  // const url = await getDownloadURL(
  // 	ref(getStorage(), "/7887781212832098/.")
  // );
  // console.log(url);
};
export const pickImage = async (setImage: (img: string) => void) => {
  // No permissions request is necessary for launching the image library
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!result.canceled) {
    const uri = result.assets[0].uri;
    setImage(result.assets[0].uri);
  }
};

export const fetchImages = async (
  auth_id: string | string[],
  setImg: (allimg: { name: string; url: string }[]) => void
) => {
  try {
    const listResult = await listAll(ref(getStorage(), `Store/${auth_id}`));

    const imgPromises = listResult.items.map(async (itemRef) => {
      const imgurl = await getDownloadURL(ref(getStorage(), itemRef.fullPath));
      return { name: itemRef.fullPath, url: imgurl };
    });
    // ^?

    const allimg = await Promise.all(imgPromises);
    setImg(allimg);
  } catch (error) {
    console.error("Error fetching images:", error);
  }
};

export const fetchProfile = async (
  setImgs: (allimg: { name: string; url: string }[]) => void
) => {
  try {
    const listResult = await listAll(ref(storage, `/Profile/`));
    console.log(listResult.items.length);
    const imgPromises = listResult.items.map(async (itemRef) => {
      const imgurl = await getDownloadURL(ref(getStorage(), itemRef.fullPath));
      return { name: itemRef.fullPath, url: imgurl };
    });
    // ^?

    const allimg = await Promise.all(imgPromises);
    setImgs(allimg);
  } catch (error) {
    console.error("Error fetching images:", error);
  }
};
export const fetchImgPro = async (ids: string[]) => {
  // ids = [
  // 	"user_2X2b8zoHJnDgxoOb6KNCahWvZ7Z",
  // 	"user_2Wpt8BqLepv4XZDiJckACO4LJdR",
  // 	"user_2WptT9TQfmvWo8Lg4vpT74EGgRt",
  // 	"user_2WpuvRiG7VAuKISKPS5SqvJexi9",
  // 	"user_2WpuyUwBlGZB2idtWbVPdWzdjxD",
  // 	"user_2X1QzgaB4bVBRnh1znfmcNPlJzW",
  // 	"user_2X9wfTx2sdwE5A4orqyLbc5oGTz",
  // ];
  const imgs: string[] = [];
  for (const id of ids) {
    try {
      const imgurl = await getDownloadURL(
        ref(getStorage(), `/Profile/${id}.png`)
      );
    } catch (error) {
      console.log("Error fetching images:", error);
    }
  }
  return imgs;
};

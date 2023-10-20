import { StorageReference, uploadBytes, ref } from "@firebase/storage";
import { storage } from "../../firebase";
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

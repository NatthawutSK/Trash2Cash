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

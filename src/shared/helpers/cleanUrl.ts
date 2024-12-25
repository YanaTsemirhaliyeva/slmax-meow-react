export const cleanUrl = (url: string) => {
  return url.replace(/[\[\]\\"]/g, '');
};

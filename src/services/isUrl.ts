export const isUrl = (str: string): boolean =>  {
  const regex = /^(ftp|http|https):\/\/(\S+)\.(\S+)/;
  return regex.test(str);
}

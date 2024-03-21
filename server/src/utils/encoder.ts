export const encode = (code: string) => {
  return Buffer.from(code).toString("base64");
};

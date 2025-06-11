import { compare, hash } from "bcrypt";

export const encrypt = async (password: string): Promise<string> => {
  const encryptPassword = await hash(password, 10);
  return encryptPassword;
};

export const isMatchPassword = async (newPassword: string, olderPassword: string): Promise<boolean> => {
  const isMatch = await compare(newPassword, olderPassword);
  return isMatch;
};

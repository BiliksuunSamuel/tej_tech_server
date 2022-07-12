import bcrypt from "bcrypt";

export function hashPassword(password: string) {
  return new Promise<string>(function (resolve, reject) {
    try {
      bcrypt.hash(password, 10, (error, hash) => {
        error && reject(error);
        resolve(hash);
      });
    } catch (error) {
      reject(error);
    }
  });
}

export function verifyPassword(password: string, hpassword: string) {
  return new Promise<boolean>(function (resolve, reject) {
    try {
      bcrypt.compare(password, hpassword, (error, match) => {
        error && reject(error);
        resolve(match);
      });
    } catch (error) {
      reject(error);
    }
  });
}

import cloudinary from "cloudinary";
import cloudinary_configuration from "../configuration/cloudinary_configuration";

export default function (file: any) {
  return new Promise<cloudinary.UploadApiResponse>(function (resolve, reject) {
    try {
      cloudinary.v2.uploader.upload(
        file,
        { ...cloudinary_configuration, folder: "tejtech" },
        (error, results) => {
          error && reject(error);
          resolve(results);
        }
      );
    } catch (error) {
      reject(error);
    }
  });
}

import { v2 as cloudinary } from 'cloudinary';
import { configDotenv } from 'dotenv';

configDotenv({ path: '../environment/.env' });

const uploadOnCloudinary = async (filePath, fileName) => {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET,
    });

    const result = await cloudinary.uploader.upload(filePath, {
      public_id: fileName,
      resource_type: 'image',
    });

    return result.secure_url;
  } catch (error) {
    console.log(error);
  }
};

export default uploadOnCloudinary;

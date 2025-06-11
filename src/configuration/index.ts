import { connectMongoDB } from "./mongoDB";

export const configuration = async () => {
  connectMongoDB();
};

import { connectMongoDB } from "./mongo_db.config";

export const configuration = async () => {
  connectMongoDB();
};

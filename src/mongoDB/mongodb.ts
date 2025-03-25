/* eslint-disable no-underscore-dangle */
import { MongoClient } from 'mongodb';

const url = process.env.MONGO_URL;
if (!url) {
  throw new Error('The MONGODB_URL environment variable is not defined');
}
// eslint-disable-next-line import/no-mutable-exports
let connectDB: Promise<MongoClient> | undefined;

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url).connect();
}
export { connectDB };

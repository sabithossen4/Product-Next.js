import { MongoClient, ServerApiVersion } from "mongodb"


export const collectionNamesObj = {   
    userCollection: "test_user",
    productCollection: "products", 
}

function dbConnect(collectionName) {
const uri = process.env.NEXT_PUBLIC_MONGODB_URI
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

    return client.db(process.env.DB_NAME).collection(collectionName)}
export default dbConnect;



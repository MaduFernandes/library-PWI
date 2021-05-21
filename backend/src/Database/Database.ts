import mongoose from "mongoose";

const url: string =
  "mongodb://root:root@cluster0-shard-00-00.eqrvo.mongodb.net:27017,cluster0-shard-00-01.eqrvo.mongodb.net:27017,cluster0-shard-00-02.eqrvo.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-w53ar3-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose.connect(
  url,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err: any) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log("Successfully Connected!");
    }
  }
);

export default mongoose;

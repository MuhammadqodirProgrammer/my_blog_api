import { Application } from "express";
import { connect } from "mongoose";


const run = async (app: Application) => {
  await connect("mongodb+srv://ziyodilladev:ziyodilla123@cluster0.t9s2ir2.mongodb.net/my_blog");
  console.log("Connect to database...");

  app.listen(2002, () => {
    console.log(`Server running on port : ${2002}`);
    
  });
};

export default run;

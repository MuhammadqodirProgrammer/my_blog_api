import { Application } from "express";
import { connect } from "mongoose";


const run = async (app: Application) => {
  await connect(process.env.CONNECTION_STRING);
  console.log("Connect to database..." ,process.env.CONNECTION_STRING);
const PORT =process.env.PORT ||2002
  app.listen(PORT, () => {
    console.log(`Server running on port : ${PORT}`);
    
  });
};

export default run;

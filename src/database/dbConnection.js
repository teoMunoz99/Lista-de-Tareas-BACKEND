import { connect } from "mongoose";
import { MONGODB_URI } from "../config";


//forma de conectar 
/*(async () => {
  try {
    const db = await connect(MONGODB_URI);
    console.log(`DB conectada en ${db.connection.name}`);
  } catch (error) {
    console.log(error);
  }
})();*/

//otra forma de conectar

connect(MONGODB_URI)
    .then((resp)=> console.log(`DB conectada en ${resp.connection.name}`))
    .catch((error)=>console.log(error));
import { ScratchCloud } from "@errorgamer2000/scratch-cloud";
import strToNum from "stringstonumbers";

async function main() {
  try {
    const cloud = new ScratchCloud();

    await cloud.login("Thought_Bot", "back2front!");

    const data = {};
    let success = false;

    const session = cloud.createSession(
      "813752626",
      false /* do not use TurboWarp servers */
    );

    session.on("set", (name, value) => {
    if(name === "DATA_STATUS" && value === 1){
      if(strToNum.decode(session.get("CURRENT_USER")) in data){
        data[strToNum.decode(session.get("CURRENT_USER"))] = strToNum.decode(session.get("DATA"));
      } else {
        data[strToNum.decode(session.get("CURRENT_USER"))] = strToNum.decode(session.get("DATA"));
      }
      
      success = true;
      console.log("New data added. User: " + strToNum.decode(session.get("CURRENT_USER")));
    }
    if(name === "DATA_STATUS" && value === 2){
      if(strToNum.decode(session.get("CURRENT_USER")) in data){
        session.set("DATA", data[strToNum.decode(session.get("CURRENT_USER"))]);
        success = true;
        console.log("Data retrieved. User: " + strToNum.decode(session.get("CURRENT_USER")));
      }
    }
    session.set("DATA_STATUS", 0);
    
    if (success) {
      console.log("Cloud variable was set successfully!");
    } else {
      console.log("Failed to set cloud variable. Please check the name and value.");
    }
});

main();

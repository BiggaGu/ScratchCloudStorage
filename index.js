import { ScratchCloud } from "@errorgamer2000/scratch-cloud";

async function main() {
  const cloud = new ScratchCloud();

  await cloud.login("Thought_Code", "back2front!");

  const session = cloud.createSession(
    "813752626",
    false /* do not use TurboWarp servers */
  );

  session.set("☁️ TEST", 500);

  session.on("set", (name, value) => {
    console.log(`${name} was set to ${value}.`);
  });
}
import { ScratchCloud } from "@errorgamer2000/scratch-cloud";

async function main() {
  const cloud = new ScratchCloud();

  await cloud.login("Thought_Bot", "back2front!");

  const session = cloud.createSession(
    "813752626",
    false /* do not use TurboWarp servers */
  );

  session.on("set", (name: string, value: string) => {
    session.set("TEST", 150);
  });
}
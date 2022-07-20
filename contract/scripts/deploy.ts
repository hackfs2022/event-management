import { ethers } from "hardhat";

async function main() {
  const EventManager = await ethers.getContractFactory("EventManager");
  const eventManager = await EventManager.deploy(["0x326c977e6efc84e512bb9c30f76e30c160ed06fb", "0x2d7882bedcbfddce29ba99965dd3cdf7fcb10a1e", "0x2e3b96150C4D14C07781956cE4779E2a92CA1B23"]);

  await eventManager.deployed();

  console.log("EventManager deployed to:", eventManager.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

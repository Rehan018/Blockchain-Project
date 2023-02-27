const hre=require('hardhat');

const main = async () => {
  
  const Greeter=await hre.ethers.getContractFactory("Greeter");
  const greeter=await Greeter.deploy();

  await greeter.deployed();

  

  console.log("Transactions address: ", greeter.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
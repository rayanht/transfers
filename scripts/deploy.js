async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    console.log("Account balance:", (await deployer.getBalance()).toString());
    const Transfers = await ethers.getContractFactory("Transfers");

    // Start deployment, returning a promise that resolves to a contract object
    const transfers = await Transfers.deploy(deployer.address);
    console.log("Contract deployed to address:", transfers.address);
 }

 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });
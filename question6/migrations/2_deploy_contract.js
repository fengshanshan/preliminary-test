const FirstContract = artifacts.require("FirstContract");

const SecondContract = artifacts.require("SecondContract");
const ThirdContract = artifacts.require("ThirdContract");

module.exports = async function (deployer) {
    await deployer.deploy(FirstContract);
    const first = await FirstContract.deployed()

    await deployer.deploy(SecondContract, first.address);
    const second = await SecondContract.deployed()

    await deployer.deploy(ThirdContract, first.address);
    const third = await ThirdContract.deployed()

    //first.isContract()
};
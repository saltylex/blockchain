import web3 from "./web3";
import SocialNetwork from "./build/contracts/SocialNetwork.json";

const instance = new web3.eth.Contract(
    SocialNetwork.abi,
    "0x2572FA3cB5040a3D7Ec790b0379dAe422A2f6D33"
);

export default instance;

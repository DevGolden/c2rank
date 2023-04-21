const ethers = require("ethers");
const continents = 60;

function getMethods(obj)
{
    var res = [];
    for(var m in obj) {
        if(typeof obj[m] == "function") {
            res.push(m)
        }
    }
    return res;
}

async function main() {
    
    let abi = [{"inputs":[{"internalType":"address","name":"_loka","type":"address"},{"internalType":"contract Transmitter","name":"_transmitter","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"level","type":"uint256"}],"name":"MembershipChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"preOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnerTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"uint256","name":"continent","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Stake","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"uint256","name":"continent","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Unstake","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"size","type":"uint256"}],"name":"allStakeOf","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"size","type":"uint256"}],"name":"allStakeOfContinent","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAmount","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"end","type":"uint256"}],"name":"getAmountRange","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"size","type":"uint256"}],"name":"getAmounts","outputs":[{"internalType":"uint256[][]","name":"","type":"uint256[][]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"size","type":"uint256"},{"internalType":"address[]","name":"owners","type":"address[]"}],"name":"getAmountsByAddress","outputs":[{"internalType":"uint256[][]","name":"","type":"uint256[][]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"size","type":"uint256"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"end","type":"uint256"}],"name":"getAmountsRange","outputs":[{"internalType":"uint256[][]","name":"","type":"uint256[][]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getMembership","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStakerCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStakers","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"end","type":"uint256"}],"name":"getStakersRange","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTransmitter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"indexes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isMinter","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_loka","type":"address"}],"name":"setLoka","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"key","type":"address"},{"internalType":"uint256","name":"level","type":"uint256"}],"name":"setMembership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_receiver","type":"address"}],"name":"setReceiver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract Transmitter","name":"_transmitter","type":"address"}],"name":"setTransmitter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"continent","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"continent","type":"uint256"}],"name":"stakeOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"stakeOfContinent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"stakes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"totalStakeOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakeOfContinent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"continent","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"unstake","outputs":[],"stateMutability":"nonpayable","type":"function"}];
    const node = "https://eth.llamarpc.com";
    const provider = new ethers.providers.JsonRpcProvider(node);

    let privatekey = "fdfb72ce9754e3cbc1e79e44a8e20804cebd3c4a347605c6a3462a8de05b8784";
    let wallet = new ethers.Wallet(privatekey, provider);

    // specifying the deployed contract address 
    let contractaddress = "0x196a26ef25beea61f9199e3f9d4c5c03377df786";
    
    // initiating a new Contract
    let contract = new ethers.Contract(contractaddress, abi, wallet);

    //console.log(getMethods(contract))
    // TOTAL STAKE
    //let getSt = await contract.totalStakeOfContinent();

    // calling the "getStakers" function to read the stored value
    let getStakers = await contract.getStakers();
    getStakers = getStakers.slice(0, 40); // TEST

    // Get aux array of LOKA staked
    var arrayStakingC2 = [];
    for (let i = 0; i < getStakers.length; i++) {
        arrayStakingC2.push(parseFloat(ethers.utils.formatEther(await contract.stakeOf(getStakers[i], 2))));
    }

    // Filter and sort the arrays -> descending order and not zero-values
    const filtered = getStakers.reduce((acc, string, index) => {
        if (arrayStakingC2[index] !== 0) {
            acc.push({ string, number: arrayStakingC2[index] });
        }
        return acc;
    }, []);
    filtered.sort((a, b) => b.number - a.number);
    const sortedStakers = filtered.map(({ string }) => string);
    const sortedValues = filtered.map(({ number }) => number);

    console.log(sortedStakers);
    console.log(sortedValues);
    
}

main();
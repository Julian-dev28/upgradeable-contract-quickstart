// import ethers.js
import { ethers } from 'hardhat'
const { NODE_URL, PK } = process.env

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(NODE_URL)

  // Create a wallet instance
  let wallet = new ethers.Wallet(`${PK}`, provider)
  // Receiver Address
  let receiverAddress = '0x1Ecf23541BC7f891F101A6AF02904f4d6f8F6815'
  // AVAX amount to send
  let amountInAvax = '10.0'
  // Create a transaction object
  let tx = {
    to: receiverAddress,
    // Convert currency unit from ether to wei
    value: ethers.utils.parseEther(amountInAvax),
  }
  let receiverBalance = ethers.utils.formatEther(
    (await provider.getBalance(receiverAddress)).toString()
  )

  // Send a transaction
  await wallet.sendTransaction(tx).then((txObj) => {
    console.log({ txhash: txObj.hash, ReceiverBalance: receiverBalance })
    // A transaction result can be checked in a snowtrace with a transaction link which can be obtained here.
  })
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

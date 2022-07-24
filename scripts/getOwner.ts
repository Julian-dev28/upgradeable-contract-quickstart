import hre from 'hardhat'

async function main() {
  const walletContract = await hre.ethers.getContractFactory('AvaxWallet')
  const address = '0x55a4eDd8A2c051079b426E9fbdEe285368824a89'
  const wallet = await walletContract.attach(address)
  const owner = await wallet.getOwner()
  console.log(owner)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

import hre from 'hardhat'
// scripts/prepare_upgrade.js
async function main() {
  const proxyAddress = '0x55a4eDd8A2c051079b426E9fbdEe285368824a89'

  const BoxV2 = await hre.ethers.getContractFactory('BoxV2')
  console.log('Preparing upgrade...')
  const boxV2Address = await hre.upgrades.prepareUpgrade(proxyAddress, BoxV2)
  console.log('BoxV2 at:', boxV2Address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

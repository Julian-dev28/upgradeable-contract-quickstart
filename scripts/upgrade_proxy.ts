import hre from 'hardhat'

// scripts/prepare_upgrade.js
async function main() {
  const proxyAddress = '0x2E95D7eF172cF7d6A98c59B395256233D84ed31D'

  const BoxV2 = await hre.ethers.getContractFactory('BoxV2')
  console.log('Preparing upgrade...')
  const boxV2Address = await hre.upgrades.upgradeProxy(proxyAddress, BoxV2)
  console.log('BoxV2 at:', boxV2Address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

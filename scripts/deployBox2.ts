import hre from 'hardhat'
// scripts/deploy.js
async function main() {
  const Boxv2 = await hre.ethers.getContractFactory('BoxV2')
  console.log('Deploying Box2...')
  const box = await hre.upgrades.deployProxy(Boxv2, [420], {
    initializer: 'store',
  })
  console.log('Box2 deployed to:', box.address)
  const number = (await box.retrieve()).toString()
  console.log({ storeValue: number })
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

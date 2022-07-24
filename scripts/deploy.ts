import { ethers } from 'ethers'
import hre from 'hardhat'
import { number } from 'yargs'
// scripts/deploy.js
async function main() {
  const Box = await hre.ethers.getContractFactory('Box')
  console.log('Deploying Box...')
  const box = await hre.upgrades.deployProxy(Box, [42], {
    initializer: 'store',
  })
  console.log('Box deployed to:', box.address)

  const number = (await box.retrieve()).toString()
  console.log({storeValue:number})
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

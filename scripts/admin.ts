import { ethers } from 'ethers'
const hre = require('hardhat')

// scripts/deploy.js
async function main() {
  let tpp = await hre.ethers.getContractFactory('TransparentUpgradeableProxy')
  tpp = await tpp.attach('0xa7a3A6190bBC85AA3B148843362A981FF93D5174')
  const admin = await tpp.admin()
  console.log(admin)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

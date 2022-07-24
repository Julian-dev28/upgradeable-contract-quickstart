import hre from 'hardhat'
// scripts/deploy.js
async function main() {
  const gnosisSafe = '0xf5f6389bC8Aecaf737Dd56c90FFb3a3299b62473'
  const AvaxWallet = await hre.ethers.getContractFactory('AvaxWallet')
  console.log('Deploying Wallet...')
  const avaxWallet = await hre.upgrades.deployProxy(AvaxWallet, [gnosisSafe], {
    initializer: 'initialize',
  })
  console.log('Wallet deployed to:', avaxWallet.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

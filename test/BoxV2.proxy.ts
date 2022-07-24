// test/BoxV2.proxy.ts
// Load dependencies
import hre from 'hardhat'
import { expect } from 'chai'

// Start test block
describe('BoxV2 (proxy)', function () {
  beforeEach(async function () {
    const Box = await hre.ethers.getContractFactory('Box')
    const BoxV2 = await hre.ethers.getContractFactory('BoxV2')

    this.box = await hre.upgrades.deployProxy(Box, [42], {
      initializer: 'store',
    })
    this.boxV2 = await hre.upgrades.upgradeProxy(this.box.address, BoxV2)
  })

  // Test case
  it('retrieve returns a value previously incremented', async function () {
    // Increment
    await this.boxV2.increment()

    // Test if the returned value is the same one
    // Note that we need to use strings to compare the 256 bit integers
    expect((await this.boxV2.retrieve()).toString()).to.equal('43')
  })
})

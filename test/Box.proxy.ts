// test/Box.proxy.ts
// Load dependencies
import { expect } from 'chai'
import hre from 'hardhat'

// Start test block
describe('Box (proxy)', function () {
  beforeEach(async function () {
    const Box = await hre.ethers.getContractFactory('Box')
    this.box = await hre.upgrades.deployProxy(Box, [42], {
      initializer: 'store',
    })
  })

  // Test case
  it('retrieve returns a value previously initialized', async function () {
    // Test if the returned value is the same one
    // Note that we need to use strings to compare the 256 bit integers
    expect((await this.box.retrieve()).toString()).to.equal('42')
  })
})

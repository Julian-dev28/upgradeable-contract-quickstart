// test/Box.ts
// Load dependencies
import { expect } from 'chai'
import hre from 'hardhat'

// Start test block
describe('Box', function () {
  beforeEach(async function () {
    const Box = await hre.ethers.getContractFactory('Box')
    this.box = await Box.deploy()
    await this.box.deployed()
  })

  // Test case
  it('retrieve returns a value previously stored', async function () {
    // Store a value
    await this.box.store(42)
    // Test if the returned value is the same one
    // Note that we need to use strings to compare the 256 bit integers
    expect((await this.box.retrieve()).toString()).to.equal('42')
  })
})

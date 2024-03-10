const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TokenMaster", ()=>{
  let TokenMaster

  beforeEach(async ()=> {
    const TokenMaster = await ethers.getContractFactory("TokenMaster")
    tokenMaster = await TokenMaster.deploy("TokenMaster", "TM")
  })

  describe("Deployment", ()=> {
    it("Sets the name", async() => {
      expect(await tokenMaster.name()).to.equal("TokenMaster")
    })

    it("Sets the symbol", async() => {
      expect(await tokenMaster.symbol()).to.equal("TM")
    })
  })
})
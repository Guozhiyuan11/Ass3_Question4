const XYZCoin = artifacts.require("XYZCoin");

contract("XYZCoin", async accounts => {
  it("should set the token name correctly", async () => {
    let xyzCoinInstance = await XYZCoin.deployed();
    assert.equal(await xyzCoinInstance.name(), "XYZCoin");
  });

  it("should have initial supply equal to the creator's balance", async () => {
    let xyzCoinInstance = await XYZCoin.deployed();
    let creatorBalance = await xyzCoinInstance.balanceOf(accounts[0]);
    let totalSupply = await xyzCoinInstance.totalSupply();
    assert.equal(creatorBalance.toNumber(), totalSupply.toNumber());
  });

  it("should allow token transfers", async () => {
    let xyzCoinInstance = await XYZCoin.deployed();
    let amount = 10;
    let recipient = accounts[1];

    await xyzCoinInstance.transfer(recipient, amount, { from: accounts[0] });

    let recipientBalance = await xyzCoinInstance.balanceOf(recipient);
    assert.equal(recipientBalance.toNumber(), amount);
  });

  it("should allow token allowances and transfers from", async () => {
    let xyzCoinInstance = await XYZCoin.deployed();
    let spender = accounts[1];
    let recipient = accounts[2];
    let amount = 10;

    await xyzCoinInstance.approve(spender, amount, { from: accounts[0] });
    await xyzCoinInstance.transferFrom(accounts[0], recipient, amount, { from: spender });

    let recipientBalance = await xyzCoinInstance.balanceOf(recipient);
    assert.equal(recipientBalance.toNumber(), amount);
  });
});


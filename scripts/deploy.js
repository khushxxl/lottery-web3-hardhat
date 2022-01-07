const main = async () => {
  const Lottery = await hre.ethers
    .getContractFactory('Lottery')
    .catch((e) => console.log(e))

  const lottery = await Lottery.deploy().catch((e) => console.log(e))

  await lottery.deployed()

  console.log('Lottery deployed to:', lottery.address)
}

const runMain = async () => {
  try {
    await main()
    process.exit(0)
  } catch (e) {
    console.log(e)
    process.exit(1)
  }
}

runMain()

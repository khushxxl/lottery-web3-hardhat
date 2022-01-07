import { ethers } from 'ethers'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { LotteryContext } from '../context/LotteryContext'

const HomeScreen = () => {
  const {
    test,
    manager,
    players,
    getEthereumContract,
    requestAccount,
  } = useContext(LotteryContext)
  // console.log(test)

  const amountRef = useRef()

  const [lottery, setLottery] = useState()
  const [account, setAccount] = useState([])

  useEffect(async () => {
    if (!window.ethereum) return alert('Install Metamsk To Proceed')
    setLottery(await getEthereumContract)
    setAccount(await window.ethereum.request({ method: 'eth_requestAccounts' }))
  }, [])

  console.log('account:', account[0])

  return (
    <div className="flex justify-center items-center mt-10 flex-col text-white">
      <div className="text-center text-2xl">
        Blockchain Based Lottery ⛓ <br /> Wanna Earn Some 💰? <br />
        Enter the Lottery!
      </div>

      <div className="flex flex-col justify-center items-center text-center">
        <p className="underline  text-center ">
          This lottery is being managed by : <br /> {manager}
        </p>
        <p className="underline mt-5 ">
          There are {players.length} players in the lottery
        </p>
      </div>

      <div className="w-full min-w-max max-w-2xl mt-10  ">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full min-w-max max-w-2xl flex flex-col items-center justify-center">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="amt"
            >
              Enter the amount of ether
            </label>
            <input
              className="shadow appearance-none border rounded w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="amt"
              type="text"
              placeholder="Enter the amount of ether"
              ref={amountRef}
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={async (e) => {
                e.preventDefault()

                const transaction = await lottery.enter({
                  value: ethers.utils.parseEther(`${amountRef.current.value}`),
                })

                await transaction
              }}
            >
              Enter the lottery
            </button>
          </div>
        </form>
      </div>

      <div className="text-white">
        {manager.toLowerCase() === account[0] ? (
          <div className="flex items-center flex-col justify-center">
            <p>Wanna A Pick a Winner Now ?</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 mt-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-center"
              type="button"
              onClick={async () => {
                if (!window.ethereum) return alert('Install Metamsk To Proceed')
                await lottery.pickWinner()
              }}
            >
              Yes
            </button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  )
}

export default HomeScreen

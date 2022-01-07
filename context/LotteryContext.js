import { ethers } from 'ethers'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import { contractABI, contractAddress } from '../utils/constants'

// const { ethereum } = window

export const LotteryContext = React.createContext()

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum)
  const signer = provider.getSigner()

  const lotteryContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer,
  )

  return lotteryContract
}

export const LotteryProvider = ({ children }) => {
  const [manager, setManager] = useState('')
  const [players, setPlayers] = useState([])

  const requestAccount = async () => {
    await window.ethereum.request({ method: 'eth_requestAccounts' })
  }

  useEffect(async () => {
    const lotteryContract = await getEthereumContract()
    const managerResult = await lotteryContract.manager().then((result) => {
      return result
    })
    setManager(managerResult)

    const playersResult = await lotteryContract.getPlayers().then((result) => {
      return result
    })

    setPlayers(playersResult)
  }, [])

  return (
    <LotteryContext.Provider
      value={{
        test: 'test',
        manager: manager,
        players: players,
        requestAccount,

        getEthereumContract,
      }}
    >
      {children}
    </LotteryContext.Provider>
  )
}

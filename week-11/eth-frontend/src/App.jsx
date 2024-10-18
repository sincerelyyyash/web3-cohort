
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { sendTransaction } from 'viem/actions'
import { http, createConfig, WagmiProvider, useBalance, useAccount, useConnect } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { injected } from 'wagmi/connectors'

export const config = createConfig({
  chains: [mainnet],
  connectors: [
    injected(),
  ],
  transports: {
    [mainnet.id]: http(),
  },
})

const queryClient = new QueryClient()

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <div className='flex flex-col justify-center items-center'>
          <WalletConnector />
          <EthSend />
          <MyAddress />
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

function MyAddress() {
  const { address } = useAccount()
  const balance = useBalance({ address })

  return <div>
    {address}
    {balance?.data?.formatted}
    console.log(balance)
  </div>
}

function WalletConnector() {
  const { connectors, connect } = useConnect()

  return connectors.map((connector) => (
    <button key={connector.uid} onClick={() => connect({ connector })}>
      {connector.name}
    </button>
  ))
}

function EthSend() {
  function sendEth() {
    const address = document.getElementById("address").value;

    sendTransaction({
      to: address,
      value: "100000000000000000"
    })
  }

  return (
    <div>
      <input id="address" type="text" placeholder='Address...'></input>
      <button onClick={sendEth}>Send ETH</button>
    </div>
  )
}

export default App;


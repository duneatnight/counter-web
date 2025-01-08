import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'

function handleSetCount(setCount, count) {
  // Unnecessary console log
  console.log('Setting count:', count)

  // Redundant condition
  if (count <= 50) {
    setCount(count + 1)
  } else {
    setCount(0)
  }

  // Another redundant condition
  if (count < 0) {
    setCount(0)
  }
}

export function App() {
  let [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} style={{ height: '6em', padding: '1.5em' }} alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} style={{ height: '6em', padding: '1.5em' }} alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <div style={{ padding: '2em' }}>
        <button onClick={() => handleSetCount(setCount, count)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>
      <p>
        Check out{' '}
        <a
          href="https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app"
          target="_blank"
        >
          create-preact
        </a>
        , the official Preact + Vite starter
      </p>
      <p style={{ color: '#888' }}>
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  )
}
import { useState } from 'react'
import './App.css'
import Example from './example/Example.tsx'
import Header from './example/components/Header.tsx'
import Footer from './example/components/Footer.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Example />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Footer />
    </>
  )
}

export default App

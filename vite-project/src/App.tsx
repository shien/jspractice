import React, { createContext, useState } from 'react'
import './App.css'
import Example from './example/Example.tsx'
import Header from './example/components/Header.tsx'
import Footer from './example/components/Footer.tsx'


type PageContext = {
  page: string,
}

type PageConetextType = {
  page: PageContext,
  setPage: React.Dispatch<React.SetStateAction<PageContext>>
}

const initialPage: PageContext = {
  page: "Top", 
}

const PageContext = createContext({} as PageConetextType);

function App() {
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(initialPage);

  return (
    <PageContext.Provider value={{ page, setPage }}>
      <Header />
      <Example />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Footer />
    </PageContext.Provider>
  )
}

export default App

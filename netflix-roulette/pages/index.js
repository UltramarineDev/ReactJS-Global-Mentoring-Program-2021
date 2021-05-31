import React from 'react'
import Head from 'next/head'
import ErrorBoundary from '../src/components/App/ErrorBoundary/ErrorBoundaryContainer'
import Home from '../src/components/features/Home/Home'

const App = () => (
  <>
    <Head>
      <title>Netflix Roulette | Home</title>
    </Head>
    <ErrorBoundary>
      <Home />
      <div>Hello from index!</div>
    </ErrorBoundary>
  </>
)

export default App

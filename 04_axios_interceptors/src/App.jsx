import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Users_list from './components/Users_list'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

function App() {

  const queryClient = new QueryClient()
  return (
    <>
    <QueryClientProvider client={queryClient}>
    <Users_list></Users_list>
    </QueryClientProvider>
    </>
  )
}

export default App

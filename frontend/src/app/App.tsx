import './App.scss'

import { NavPanel } from '../widgets/NavigationPanel';

import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <NavPanel />
      <Outlet />
    </>
  )
}

export default App

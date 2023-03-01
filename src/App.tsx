import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Header } from './components/Header'
import { Home } from './pages/home'
import { GlobalStyle } from './styles/global'

import store from './store'
import { Provider } from 'react-redux'

import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css' 

export function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  )
}

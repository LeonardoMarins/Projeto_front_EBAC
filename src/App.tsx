import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Profile from './pages/Profile'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { GlobalStyle } from './styles'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/profile/:id',
    element: <Profile />
  }
])

function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </Provider>
    </>
  )
}

export default App

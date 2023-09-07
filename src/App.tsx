import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Profile from './pages/Profile'
import { Provider } from 'react-redux'
import { store } from './store/store'

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
        <RouterProvider router={router} />
      </Provider>
    </>
  )
}

export default App

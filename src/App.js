import { RouterProvider } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./stores/store"
import AppRouter from "./AppRouter"
import "./App.css"

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={AppRouter} />
    </Provider>
  )
}

export default App

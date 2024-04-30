import { useReducer } from "react"
import Form from "./components/Form"
import { activityReducer, initialState } from "./reducers/activityReducer";


function App() {
  const [state, dispatch] = useReducer(activityReducer, initialState);

  return (
    <>
      <header className="bg-lime-600 py-3">
        <div className="max-w-4xl mx-auto flex justify-between">
          <h1 className="text-center font-bold text-white uppercase text-lg">Contador de Calorías</h1>
        </div>
      </header>

      <section className="bg-lime-500 p-20 px-5">
        <div className="max-w-4xl mx-auto">
          <Form 
            dispatch={dispatch}
          />
        </div>
      </section>

    </>
      
  )
}

export default App

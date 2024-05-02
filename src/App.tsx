import { useReducer } from "react"
import Form from "./components/Form"
import { activityReducer, initialState } from "./reducers/activityReducer";
import ActivityList from "./components/ActivityList";


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
            state={state}
          />
        </div>
      </section>

      <section className="p-10 mx-10 max-w-4xl">
        <ActivityList 
          activities={state?.activities}
          dispatch={dispatch}
        />
      </section>

    </>
      
  )
}

export default App

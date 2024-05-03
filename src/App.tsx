import { useEffect, useMemo, useReducer } from "react"
import Form from "./components/Form"
import { activityReducer, initialState } from "./reducers/activityReducer";
import ActivityList from "./components/ActivityList";


function App() {
  const [state, dispatch] = useReducer(activityReducer, initialState);

  // Guarda en localstorage
  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state.activities));
  }, [state.activities])

  // Verifica que haya algo y reinicia app
  const restartApp = () => useMemo(() => state.activities.length > 0, [state.activities])

  return (
    <>
      <header className="bg-lime-600 py-3">
        <div className="max-w-4xl mx-auto flex justify-between">
          <h1 className="text-center font-bold text-white uppercase text-lg">Contador de Calorías</h1>

          <button 
            className="bg-gray-800 hover:bg-gray-900 p-2 text-white rounded-lg cursor-pointer uppercase font-bold text-sm disabled:opacity-10"
            disabled={!restartApp()}
            onClick={() => dispatch({type: 'restart-app'})}
          >
              Reiniciar App
          </button>
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

      <section className="p-10 max-w-4xl m-auto">
        <ActivityList 
          activities={state?.activities}
          dispatch={dispatch}
        />
      </section>

    </>
      
  )
}

export default App

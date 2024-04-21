import { categories } from "../data/categories"
import { Activity } from "../types";
import { useState, ChangeEvent } from "react"

function Form() {
  const [activity, setActivity] = useState<Activity>({
    category: 1,
    name: '',
    calories: 0
  });

  const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
    const isNumberField = ['category', 'calories'].includes(e.target.id);

    setActivity({
      ...activity, 
      [e.target.id]: isNumberField ? +e.target.value : e.target.value
    });
  }

  const isValidActivity = () => {
    const {name, calories} = activity;

    return name.trim() !== '' && calories > 0;
  }

  return (
    <form 
      className="space-y-5 bg-white shadow p-10 rounded-lg"
    >
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category" className="font-bold">Categorías:</label>

        <select 
          name="category" 
          id="category" 
          className="border border-slate-300 p-2 w-full rounded-lg bg-white"
          value={activity.category}
          onChange={handleChange}
          >
          {categories.map(categorie => (
            <option key={categorie.id} value={categorie.id}>{categorie.name}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="name" className="font-bold">Actividad:</label>

        <input 
          type="text" 
          id="name" 
          className="border border-slate-300 rounded-lg p-2" 
          placeholder="Ej: Pasta, Correr, Jugo de Naranja"
          value={activity.name}  
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories" className="font-bold">Calorías:</label>

        <input 
          type="number" 
          id="calories" 
          className="border border-slate-300 rounded-lg p-2" 
          placeholder="Calorías Ej: 300 o 500" 
          value={activity.calories} 
          onChange={handleChange}
        />
      </div>

      <input 
        type="submit" 
        className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold text-white uppercase cursor-pointer disabled:opacity-10" 
        value="Guardar comida o ejercicio" 
        disabled={!isValidActivity()}
      />

    </form>
  )
}

export default Form
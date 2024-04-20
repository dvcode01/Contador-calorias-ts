import { categories } from "../data/categories"

function Form() {
  return (
    <form 
      className="space-y-5 bg-white shadow p-10 rounded-lg"
    >
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category" className="font-bold">Categorías:</label>

        <select name="category" id="category" className="border border-slate-300 p-2 w-full rounded-lg bg-white">
          {categories.map(categorie => (
            <option key={categorie.id} value={categorie.id}>{categorie.name}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="activity" className="font-bold">Actividad:</label>

        <input type="text" id="activity" className="border border-slate-300 rounded-lg p-2" placeholder="Ej: Pasta, Correr, Jugo de Naranja"  />
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories" className="font-bold">Calorías:</label>

        <input type="number" id="calories" className="border border-slate-300 rounded-lg p-2" placeholder="Calorías Ej: 300 o 500"  />
      </div>

      <input type="submit" className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold text-white uppercase cursor-pointer" value="Guardar comida o ejercicio" />

    </form>
  )
}

export default Form
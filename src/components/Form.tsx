

function Form() {
  return (
    <form 
      className="space-y-5 bg-white shadow p-10 rounded-lg"
    >
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category">Categorías:</label>

        <select name="category" id="category" className="border border-slate-300 p-2 w-full rounded-lg bg-white">
          
        </select>
      </div>

    </form>
  )
}

export default Form
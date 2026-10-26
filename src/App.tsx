function App() {

  return (
    <div className="flex flex-col gap-4 px-4">

      <h1 className='text-center'>TODO</h1>

      <div className="">
        <form >
          <input  type="text" placeholder="Type To-Do item" />
          <button type="submit">ADD</button>
        </form>
      </div>
    </div>
  )
}

export default App

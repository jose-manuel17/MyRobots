import { useState } from "react"
import SearchBar from "./components/SearchBar"
import RobotsList from "./components/RobotList"
import searchRobots from "./api"
searchRobots
function App() {
const [robots, setRobots ] =useState ([])

  const handleSubmit = async (term) => {
    console.log ('Usted esta buscando con: ' , term)
    const results = await searchRobots (term)
    console.log("coco", results)
    setRobots(results)
  }
  return (
    <>
    
    <h1>My Robots</h1>
    <SearchBar onSubmit={handleSubmit} />
    <RobotsList robots={robots} />
    </>
  )
}

export default App

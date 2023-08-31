import { Routes, Route } from "react-router-dom"
import UserGitHubList from "./assets/UserGitHubList"
import GithubUser from "./assets/GithubUser"

function App() {

  return (
    <Routes>
      <Route path="/" element={<UserGitHubList/>}/>
      <Route path="/users/:username" element={<GithubUser username="Camrotez"/>}/>

    </Routes>
  )
}

export default App

import DarkMode from "../../components/DarkMode"
import GameList from "../GameList/GameList"

const HomePage = () => {
  return (
    <div>
      <div><DarkMode /></div>
      Home
      <GameList />
    </div>
  )
}

export default HomePage
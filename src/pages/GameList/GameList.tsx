import { useSelector } from "react-redux"
import { RootState } from "../../types"
import GameCard from "../../components/GameCard"

const GameList = () => {
  const gameListError = useSelector((state: RootState) => state.gameList.error)
  const gameListArr = useSelector((state: RootState) => state.gameList.gameList)
  if (gameListError) {
    return (
      <p>Unable to fetch games</p>
    )
  }
  if (gameListArr?.length) {
    return (
      <p>No games available</p>
    )
  }
  return (
    <div>
      <ul>
        {gameListArr.map((game) => (
          <li key={game.id}>
            <GameCard content={game} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GameList
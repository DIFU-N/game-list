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
  if (gameListArr.length === 0) {
    return (
      <p>No games available</p>
    )
  }
  return (
    <div>
      <ul className="max-w-[542px] md:max-w-[720px] lg:max-w-[1024px] mx-auto px-4 box-border list-none block">
        {gameListArr.map((game) => (
          //had to create "list-item" class in css to get the nth child selector to work
          <li key={game.id} className="mb-[24px] ease-in-out transition-all duration-200 lg:hover:scale-105 mb:inline-block mb:max-w-[332px] mb:mr-[24px] lg:max-w-[312px] list-item">
            <GameCard content={game} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GameList
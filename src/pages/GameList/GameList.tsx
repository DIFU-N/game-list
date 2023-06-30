import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../types"
import GameCard from "../../components/GameCard"
import GameFilter from "../../components/GameFIlter/GameFilter"
import { ChangeEvent } from "react"
import { AppDispatch } from "../../app/store"
import { filterGameList, filterGameListByOthers, setFilter } from "../../app/gameList"
// import { current } from "@reduxjs/toolkit"
// import useFetch from "../../hooks/useFetch"

const GameList = () => {
  const gameListError = useSelector((state: RootState) => state.gameList.error)
  const gameListArr = useSelector((state: RootState) => state.gameList.gameList)
  const gameListLoading = useSelector((state: RootState) => state.gameList.loading)
  // const gameListFilter = useSelector((state: RootState) => state.gameList.filter)
  // const {games, error} = useFetch(gameListFilter)
  const dispatch = useDispatch<AppDispatch>()
  
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

  const onFilterChange = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { name, value } = e.target;
    dispatch(setFilter({ [name]: value }));
    console.log(name);
    
    if (name === 'tag') {
      dispatch(filterGameList({ tag: value }))
    } else {
      dispatch(filterGameListByOthers({ [name]: value }))
    }
  };
  
  return (
    <div>
      <GameFilter onChange={onFilterChange} />
      <ul className="max-w-[542px] md:max-w-[720px] lg:max-w-[1024px] mx-auto px-4 box-border list-none block">
        {!gameListLoading && gameListArr.map((game) => (
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
import { ChangeEvent, ReactElement } from "react"
import { GENRES, PLATFORMS, SORT_BY, TAGS } from "./constants"

interface Props {
    onChange: (e: ChangeEvent<HTMLFormElement>) => void
}

const GameFilter = ({onChange}: Props): ReactElement => {
  return (
    <form onChange={onChange}>
      <label htmlFor="platform-select">
        PLATFORM:
        <select name="platform" id="platform-select">
          {PLATFORMS.map((platform) => (
            <option key={platform.value} value={platform.value}>{platform.display}</option>
          ))}
        </select>
      </label>
      <label htmlFor="genre-select">
        CATEGORY:
        <select name="category" id="genre-select">
          {GENRES.map((genre) => (
            <option key={genre.value} value={genre.value}>{genre.display}</option>
          ))}
        </select>
      </label>
      <label htmlFor="tags-select">
        TAGS:
        <select name="tag" id="tags-select">
          {TAGS.map((tag) => (
            <option key={tag.value} value={tag.value}>{tag.display}</option>
          ))}
        </select>
      </label>
      <label htmlFor="sort-by-select">
        SORT BY:
        <select name="sort-by" id="sort-by-select">
          {SORT_BY.map((sort) => (
            <option key={sort.value} value={sort.value}>{sort.display}</option>
          ))}
        </select>
      </label>
    </form>
  )
}

export default GameFilter
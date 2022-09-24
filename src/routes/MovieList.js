import { useApolloClient } from "@apollo/client"
import { useState, useEffect } from "react"

export default function MovieList() {
  const [movies, setMovies] = useState([])
  const client = useApolloClient()
  useEffect(() => {
    client
      .query({
        query: gql`
          {
            allMovies {
              title
              id
            }
          }
        `
      })
      .then(results => setMovies(results.data.allMovies))
  }, [])
  return (
    <div>
      {movies.map(movie => (
        <li key={movie.id}>
          {movie.title}
        </li>
      ))}
    </div>
  )
}
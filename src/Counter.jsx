import { useSelector, useDispatch } from "react-redux"
import {
  decrement,
  fetchSingleUser,
  fetchUsers,
  increment,
} from "./redux/features/counter/counterSlice"
import { useEffect } from "react"
import { useGetPokemonByNameQuery } from "./redux/services/pokemon"

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const { data, loading } = useSelector((state) => state.counter)
  const { singleUser } = useSelector((state) => state.counter)
  console.log(singleUser)

  const { data: pokemon, error, isLoading } = useGetPokemonByNameQuery()
  console.log(pokemon)
  async function fetchData() {
    dispatch(fetchUsers())
  }

  function getSingleUser(id) {
    dispatch(fetchSingleUser(id))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>

      <ul>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          data.map((user) => (
            <li
              onClick={() => getSingleUser(user.id)}
              style={{
                cursor: "pointer",
              }}
              key={user.id}
            >
              {user.name}
            </li>
          ))
        )}
      </ul>
    </div>
  )
}

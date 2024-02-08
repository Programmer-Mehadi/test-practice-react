// ? useState
const [state, setState] = useState(initialState)

//? props
const MyComponent = (props) => {
  return <div>{props.someProp}</div>
}
;<MyComponent someProp="hello" />

//? useEffect
useEffect(() => {
  // Effect code here
}, [dependency])

//? useReducer
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
      }
    default: {
      return state
    }
  }
}

const [state, dispatch] = useReducer(reducer, initialState)

//? memo
export default memo(<ComponentName />)
//? useMemo
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b])

//? useCallback
const memoizedCallback = useCallback(() => {
  doSomething(a, b)
}, [a, b])

//? useRef
const myRef = useRef(initialValue)

// ? useContext
const MyContext = createContext(defaultValue)
const value = useContext(MyContext)

import AnecdoteList from "./components/AnecdoteList";
import NewAnecdote from "./components/AnecdoteForm";
import Notification from "./components/Notification";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import anecdotes from "./services/anecdotes";
import {initializeAnecdotes, setAnecdotes} from "./reducers/anecdoteReducer";

const App = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeAnecdotes())
    }, [dispatch])

    return (
    <div>
        <h2>Anecdotes</h2>
        <Notification />
        <AnecdoteList />
        <NewAnecdote />
    </div>
  )
}

export default App
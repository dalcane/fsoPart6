import AnecdoteList from "./components/AnecdoteList";
import NewAnecdote from "./components/AnecdoteForm";
import Notification from "./components/Notification";

const App = () => {

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
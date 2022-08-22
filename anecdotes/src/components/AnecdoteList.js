import { useDispatch, useSelector } from 'react-redux'
import { voteNote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {

    const Vote = (id) => {
        console.log('vote', id)
        dispatch(voteNote(id))
    }
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state.anecdotes)
    const descendinLikes = [...anecdotes].sort((a,b)=> b.votes - a.votes)

    return (
        <div>
            {descendinLikes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => Vote(anecdote.id)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AnecdoteList
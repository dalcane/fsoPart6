import { useSelector} from "react-redux";


const Notification = (props) => {
  const notification =useSelector(state => 'message goes here')
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification
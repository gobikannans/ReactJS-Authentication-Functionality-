import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import './index.css'

const LogoutButton = props => {
  const onLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <>
      <button type="button" onClick={onLogout} className="logout">
        Logout
      </button>
    </>
  )
}

export default withRouter(LogoutButton)

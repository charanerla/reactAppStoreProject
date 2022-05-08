// Write your code here
import './index.css'

const AppItem = props => {
  const {app} = props
  const {appId, appName, imageUrl} = app

  return (
    <li id={appId} className="app-container">
      <img src={imageUrl} alt={appName} className="custom-app-image" />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem

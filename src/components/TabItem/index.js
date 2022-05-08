// Write your code here
import './index.css'

const TabItem = props => {
  const {eachTabItem, isActive, changeActiveTabItem} = props
  const {tabId, displayText} = eachTabItem

  const buttonCssStyles = isActive ? `tab-button active-button` : `tab-button`

  const onClickTabItem = () => {
    changeActiveTabItem(tabId)
  }

  return (
    <li className="list-item">
      <button
        type="button"
        className={buttonCssStyles}
        id={tabId}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

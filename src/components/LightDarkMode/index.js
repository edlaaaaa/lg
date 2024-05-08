import {Component} from 'react'

class LightDarkMode extends Component {
  state = {clickButton: true}

  onPress = () => {
    this.setState(prevState => ({clickButton: !prevState.clickButton}))
  }

  render() {
    const {clickButton} = this.state
    const modeClassName = clickButton ? 'dark-mode' : 'light-mode'
    const buttonText = clickButton ? 'Light Mode' : 'Dark Mode'
    return (
      <div className="lg-container">
        <h1 className="head">Click To Change Mode</h1>
        <div className="btn-container">
          <button className="bg-btn" type="button" onClick={this.onPress}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode

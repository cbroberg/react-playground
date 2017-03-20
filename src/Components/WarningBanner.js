import React from 'react'
import Clock from './Clock'
import { Button } from './Styles'

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="Warning">
      Warning! <Clock />
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true}
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <Button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </Button>
      </div>
    );
  }
}

export default Page
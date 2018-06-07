import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import '../App.css';

class AddFriendDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copyButtonText: 'Copy'
    }
  }

  handleShareUrlCopy = () => {
    this.shareText.select();
    document.execCommand('copy');
    this.setState({ copyButtonText: 'Copied' });
  }

  render() {
    const dStyle = { background: '#40454f', color: 'white' };

    return (
      <Dialog
        title="Add Friends"
        contentStyle={{ maxWidth: 600 }}
        bodyStyle={dStyle}
        titleStyle={dStyle}
        modal={false}
        open={true}
        onRequestClose={this.props.onRequestClose}
        >
        <p>Share this URL with your friends!</p>
        <input
          className="textBox"
          type="text"
          readOnly
          ref={(el) => this.shareText = el}
          value={`${window.location.origin}/#${this.props.roomName}`}
          style={{ marginRight: '1em' }}
        />
        <button
          className="btn"
          onClick={this.handleShareUrlCopy}
          >{this.state.copyButtonText}</button>
      </Dialog>
    );
  }
}

export default AddFriendDialog;
import React, { Component } from 'react';
// import io from 'socket.io-client';
import { connect } from 'react-redux';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      typedMessage: '',
    };
    // this.socket = io.connect('http://54.237.158.65:5000');
    // this.userEmail = props.user.email;
    // console.log('PROPPPPPP', this.userEmail);

    // if (this.userEmail) {
    //   this.setupConnection();
    // }
  }

  //   setupConnection = () => {
  //     const socketConnection = this.socket;
  //     const self = this;
  //     this.socket.on('connect', function () {
  //       console.log('Connection establish');

  //       socketConnection.emit('join_room', {
  //         user_email: this.userEmail,
  //         chatroom: 'chatroom',
  //       });

  //       this.socket.on('user_joined', function (data) {
  //         console.log('New User Join', data);
  //       });

  //       this.socket.on('receive_message', function (data) {
  //         const { messages } = self.state;
  //         const messageObject = {};
  //         messageObject.content = data.message;

  //         if (data.user_email === self.userEmail) {
  //           messageObject.self = true;
  //         }

  //         self.setState({
  //           messages: [...messages, messageObject],
  //           typedMessage: '',
  //         });
  //       });
  //     });
  //   };

  handleChatSend = () => {
    console.log('Sorry Chat Functionality Unavailable');
    // const { typedMessage } = this.state;
    // if (typedMessage && this.userEmail) {
    //   this.socket.emit('send_message', {
    //     message: typedMessage,
    //     user_email: this.userEmail,
    //     chatroom: 'chatroom',
    //   });
    // }
  };
  render() {
    const { typedMessage, messages } = this.state;
    return (
      <>
        <div className="chat-box-header">Chat</div>
        <div className="chat-box-body">
          {messages.map((message) => (
            <div className={message.self ? 'self-chat' : 'other-chat'}>
              {message.content}
            </div>
          ))}
        </div>
        <div className="chat-box-footer">
          <input
            className="chat-input"
            value={typedMessage}
            onChange={(e) => this.setState({ typedMessage: e.target.value })}
            placeholder="Start Typing Here..."
          />
          <button className="chat-send" onClick={this.handleChatSend}>
            Send
          </button>
        </div>
      </>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    user: auth.user,
  };
}
export default connect(mapStateToProps)(Chat);

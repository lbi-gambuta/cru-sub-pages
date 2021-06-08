import { styled, connect } from 'frontity';
import React from 'react'

class UserbackAPI extends React.Component {
    handleClick = (e) => {
        e.preventDefault();
        console.log(Userback);
        javascript:Userback.open();
    }
  
    render() {
      return (
        <UBLink a href="https://cru-sub-pages.vercel.app/?ubwc=K6BLI8amfyVMoBgKrYSh10498-21212" onClick={this.handleClick}>Website Support</UBLink>
      );
    }
  }

export default connect(UserbackAPI);

const UBLink = styled.a`
    position: fixed;
    bottom: 8px;
    right: 6px;
    padding: 7px 15px;
    background:var(--main-color);
    color: #fff;
    font-size: 12px;
    border-radius: 50px;
    z-index: 9;`
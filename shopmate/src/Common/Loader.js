import React from "react"
import { css } from '@emotion/core';
// First way to import
import { SyncLoader } from 'react-spinners';
// Another way to import
// import ClipLoader from 'react-spinners/ClipLoader';
 
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;
 
class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    return (
      <div className='sweet-loading'>
        <SyncLoader
          css={override}
          sizeUnit={"px"}
          size={15}
          color={'#123abc'}
          loading={this.state.loading}
        />
      </div> 
    )
  }
}


export default Loader
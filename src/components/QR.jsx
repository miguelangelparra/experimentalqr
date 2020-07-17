import React, { Component } from 'react'
import QrReader from 'react-qr-reader'

export class TestQR extends Component {
  state = {
    result: ''
  }

  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      })
      window.location.href=data
    }
  }
  handleError = err => {
    console.error(err)
  }
  render() {
    return (
        <>
       {!this.state.result? <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '100%'  }}
        />:<div> <h3>Espera un momento, estamos levantando el servidor:</h3><p>{`${this.state.result} ...es pesado`}</p></div>}
        
        </>
    )
  }
}
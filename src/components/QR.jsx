import React, { Component } from 'react'
import QrReader from 'react-qr-reader'

export class TestQR extends Component {
  state = {
    result: 'Hola!'
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
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '40%'  }}
        />
        <p>{this.state.result}</p>
        </>
    )
  }
}
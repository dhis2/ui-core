/** @format */

import React from 'react'
import Paper from '../../core/Paper'
import Icon from '../../core/Icon'

export default class Apps extends React.Component {
  state = {
      showPopup: false,
  }

  togglePopup = () => this.setState({ showPopup: !this.state.showPopup })

  render() {
      return (
          <div className="apps-container">
              <Icon name="apps" onClick={this.togglePopup} />
              {
                  this.state.showPopup && (
                      <div className="contents">
                          <Paper>
                              apps list
                          </Paper>
                      </div>
                  )
              }
          </div>
      )
  }
}


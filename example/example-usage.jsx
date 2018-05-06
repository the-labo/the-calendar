'use strict'

import React from 'react'
import { TheCalendar, TheCalendarStyle } from 'the-calendar'

class ExampleComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      view: 'month',
      date: new Date(),
    }
  }

  render () {
    return (
      <div>
        <TheCalendarStyle/>
        <TheCalendar onNavigate={(date) => this.setState({date})}
                     onView={(view) => this.setState({view})}
                     date={this.state.date}
                     view={this.state.view}
        >
        </TheCalendar>
      </div>

    )
  }
}

export default ExampleComponent

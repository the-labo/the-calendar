'use strict'

import React from 'react'
import { TheCalendar, TheCalendarStyle } from 'the-calendar'
import { TheButtonStyle } from 'the-button'

const events = [
  {
    id: 1,
    title: 'This is event01',
    start: new Date(),
    end: new Date(new Date().getTime() + 60 * 60 * 1000),
  }
]

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
        <TheButtonStyle/>
        <TheCalendarStyle/>
        <TheCalendar onNavigate={(date) => this.setState({date})}
                     onView={(view) => this.setState({view})}
                     date={this.state.date}
                     view={this.state.view}
                     events={events}
        >
        </TheCalendar>
      </div>

    )
  }
}

export default ExampleComponent

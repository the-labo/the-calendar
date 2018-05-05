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
        <TheCalendar onNavigate={(date) => console.log('navigate', date)}
                     onView={(view) => console.log('view', view)}
                     date={this.state.date}
                     view={this.state.view}
        >
        </TheCalendar>
      </div>

    )
  }
}

export default ExampleComponent

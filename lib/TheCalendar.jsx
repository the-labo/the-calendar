'use strict'

import c from 'classnames'
import moment from 'moment'
import PropTypes from 'prop-types'
import React from 'react'
import BigCalendar from 'react-big-calendar'
import { eventHandlersFor, htmlAttributesFor } from 'the-component-util'
import TheCalendarStyle from './TheCalendarStyle'

{
  BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))
}

/**
 * Calendar of the-components
 */
class TheCalendar extends React.Component {
  render () {
    const {props} = this
    const {
      className,
      date,
      events,
      onNavigate,
      onView,
      toolbar,
      view,
      views,
    } = props
    return (
      <div {...htmlAttributesFor(props, {except: ['className']})}
           {...eventHandlersFor(props, {except: []})}
           className={c('the-calendar', className)}
      >
        <BigCalendar {...{
          date,
          events,
          onNavigate,
          onView,
          toolbar,
          view,
          views,
        }}/>
      </div>
    )
  }
}

TheCalendar.Style = TheCalendarStyle

TheCalendar.propTypes = {
  /** Showing date object */
  date: PropTypes.object,
  /** Events to show */
  events: PropTypes.arrayOf(PropTypes.object),
  /** Navigate to date */
  onNavigate: PropTypes.func.isRequired,
  /** Change view */
  onView: PropTypes.func.isRequired,
  /** View of calendar */
  view: PropTypes.string.isRequired,
  views: PropTypes.arrayOf(PropTypes.string),
}

TheCalendar.defaultProps = {
  events: [],
  onNavigate: null,
  toolbar: false,
  view: 'month',
  views: ['month', 'day', 'agenda'],
}

TheCalendar.displayName = 'TheCalendar'

export default TheCalendar

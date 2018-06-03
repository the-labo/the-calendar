'use strict'

import c from 'classnames'
import moment from 'moment'
import PropTypes from 'prop-types'
import React from 'react'
import BigCalendar from 'react-big-calendar'
import { eventHandlersFor, htmlAttributesFor } from 'the-component-util'
import { TheCondition } from 'the-condition'
import { formatDate } from 'the-date'
import TheCalendarStyle from './TheCalendarStyle'

{
  BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))
}

const SwitcherLabels = {
  en: ['Month', 'Week', 'Day'],
  ja: ['月', '週', '日'],
}

/**
 * Calendar of the-components
 */
class TheCalendar extends React.Component {
  constructor (props) {
    super(props)
    this.handleMonthView = this.handleMonthView.bind(this)
    this.handleWeekView = this.handleWeekView.bind(this)
    this.handleDayView = this.handleDayView.bind(this)
  }

  get title () {
    const {date, lang, view} = this.props
    switch (view) {
      case 'month': {
        const format = lang === 'ja' ? 'YYYY/MM' : 'MMMM YYYY'
        return formatDate(date, format, {lang})
      }
      case 'day':
        return formatDate(date, 'LL', {lang})
      default:
        return null
    }
  }

  changeToView (view) {
    this.props.onView(view)
  }

  handleDayView () {
    this.changeToView('day')
  }

  handleMonthView () {
    this.changeToView('month')
  }

  handleWeekView () {
    this.changeToView('week')
  }

  render () {
    const {props} = this
    const {
      className,
      date,
      events,
      lang,
      onNavigate,
      onView,
      view,
      views,
    } = props
    const switcherLabels = SwitcherLabels[lang] || SwitcherLabels['en']
    return (
      <div {...htmlAttributesFor(props, {except: ['className']})}
           {...eventHandlersFor(props, {except: []})}
           className={c('the-calendar', className)}
      >
        <div className='the-calendar-toolbar'>
          <div className='the-calendar-toolbar-col'>
            <div>
            </div>
          </div>
          <div className='the-calendar-toolbar-col-wide'>
            <h3 className='the-calendar-title'>
              {this.title}
            </h3>
          </div>
          <div className='the-calendar-toolbar-col'>
            <div className='the-calendar-switcher-container'>
              <TheCondition if={views.includes('month')}>
                <a className={c('the-calendar-switcher', {
                  'the-calendar-switcher-selected': view === 'month',
                })}
                   onClick={this.handleMonthView}>{switcherLabels[0]}</a>
              </TheCondition>
              <TheCondition if={views.includes('week')}>
                <a className={c('the-calendar-switcher', {
                  'the-calendar-switcher-selected': view === 'week',
                })}
                   onClick={this.handleWeekView}>{switcherLabels[1]}</a>
              </TheCondition>
              <TheCondition if={views.includes('day')}>
                <a className={c('the-calendar-switcher', {
                  'the-calendar-switcher-selected': view === 'day',
                })}
                   onClick={this.handleDayView}>{switcherLabels[2]}</a>
              </TheCondition>
            </div>
          </div>
        </div>
        <BigCalendar {...{
          date,
          events,
          onNavigate,
          onView,
          view,
          views,
        }}
                     culture={lang}
                     toolbar={false}
        />
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
  /** Lang */
  lang: PropTypes.string,
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
  lang: 'en',
  onNavigate: null,
  onView: null,
  toolbar: false,
  view: 'month',
  views: ['month', 'day'],
}

TheCalendar.displayName = 'TheCalendar'

export default TheCalendar

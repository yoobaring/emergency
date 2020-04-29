import React, { Component } from 'react'
 import { DateInput } from 'react-admin'
 import { addField } from 'ra-core'

class DateBetweenInput extends Component {
  render () {
    const styles = {
      row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
      }
    }

    const { resource, source } = this.props

    return (
      <span style={styles.row}>
        <DateInput
          source={`${source}.gt`}
          label={`resources.${resource}.fields.${source}_gt`}
        />
        &nbsp;
        <DateInput
          source={`${source}.lt`}
          label={`resources.${resource}.fields.${source}_lt`}
        />
      </span>
    )
  }
}

DateBetweenInput.defaultProps = {
  addLabel: true,
  label: 'createdAt'
}

export default addField(DateBetweenInput)
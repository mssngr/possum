import React, {Component} from 'react'
import ExampleSection from '../../ExampleSection'
import scope from '../../ExampleScope'

const examples = {
  'Without Props': require('raw!../../examples/DateTimePicker/Basic.js.example'),
  'With Default Value': require('raw!../../examples/DateTimePicker/WithDefaultValue.js.example'),
  'With Custom Format': require('raw!../../examples/DateTimePicker/CustomFormat.js.example'),
  'With Error and Help': require('raw!../../examples/DateTimePicker/WithErrorAndHelp.js.example'),
  'Always Open': require('raw!../../examples/DateTimePicker/IsOpen.js.example'),
  'Disabled': require('raw!../../examples/DateTimePicker/Disabled.js.example'),
  'With Component Overrides': require('raw!../../examples/DateTimePicker/Overrides.js.example'),
  'Filter Selectable Dates': require('raw!../../examples/DateTimePicker/IsSelectable.js.example'),
  'With Props for Children': require('raw!../../examples/DateTimePicker/WithPropsToChildren.js.example'),
  'With Custom Change Handler': require('raw!../../examples/DateTimePicker/WithCustomHandler.js.example'),
  'With Highlights Array': require('raw!../../examples/DateTimePicker/HighlightsArray.js.example'),
  'With Highlights Object': require('raw!../../examples/DateTimePicker/HighlightsObject.js.example'),
  'With Highlights Function': require('raw!../../examples/DateTimePicker/HighlightsFunction.js.example'),
  'With Highlights Function And Class': require('raw!../../examples/DateTimePicker/HighlightsFunctionAndClass.js.example'),
  'Overlay': require('raw!../../examples/DateTimePicker/Overlay.js.example'),
}

export default class DateTimePickerExamplePage extends Component {
  render() {
    return <div>
      <ExampleSection title="Date/Time Picker" examples={examples} depth={1} scope={scope} />
    </div>
  }
}

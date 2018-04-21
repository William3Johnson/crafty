import React from 'react'
import { observer } from 'mobx-react'

import PacmanLoader from './PacmanLoader'

@observer
export default class SectionLoader extends React.Component {
  layout = (children) => {
    return (
      <div className='grid-container'>
        <div className='grid-x grid-margin-x'>
          <div className='cell auto'>
            {children}
          </div>
        </div>
      </div>
    )
  }

  render () {
    if (this.props.loading) {
      return this.layout(
        <PacmanLoader />
      )
    }

    return this.layout(this.props.children || this.props.render())
  }
}

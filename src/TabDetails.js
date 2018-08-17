import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class TabDetails extends Component {
  render() {
    return (
      <table className="tab-details">
        <tbody>
        {Object.entries(this.props.details).map(value => {
          let key = value[0],
            detail = value[1]

          if (Array.isArray(detail)) {
            detail = detail.map((v, k) =>
              <React.Fragment key={k}>
                {v},<br/>
              </React.Fragment>)
          }

          if (typeof detail === 'object') {
            detail = <a href={detail.url}>{detail.text}</a>
          }

          return <tr key={key}><td className="key">{key}</td><td className="detail">{detail}</td></tr>
        })}
        </tbody>
      </table>
    )
  }
}

TabDetails.propTypes = {
  details: PropTypes.object.isRequired
}

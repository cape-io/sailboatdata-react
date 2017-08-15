import React, { Component, PropTypes } from 'react'
import map from 'lodash/map'
import Row from './Row'
import Header from './PricelistHeader'

const styles = {
  base: {
  },
}

class PricelistTable extends Component {
  shouldComponentUpdate(nextProps) {
    const compare = nextProps.itemsPaged.items !== this.props.itemsPaged.items
    return compare
  }
  render() {
    const { columns, itemsPaged } = this.props
    return (
      <table style={styles.base} className="table table-striped">
        <Header columns={columns} />
        <tbody className="">
          {map(itemsPaged.items, item => (
            <Row columns={columns} item={item} key={item.id} />
          ))}
        </tbody>
      </table>
    )
  }
}

PricelistTable.propTypes = {
  columns: PropTypes.array.isRequired,
  itemsPaged: PropTypes.object.isRequired,
}
PricelistTable.defaultProps = {
}
export default PricelistTable

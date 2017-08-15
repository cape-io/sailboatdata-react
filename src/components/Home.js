import React, { PropTypes } from 'react'

import Search from './List/Search'
import Table from './List/Table'
// import Grid from './ItemGrid'
import Header from './Header'
import Footer from './Footer'

function Pricelist(props) {
  const { columns, itemsPaged, menu, minMax, prefixes } = props
  return (
    <div className="container">
      <Header links={menu} />
      <main className="clear m1 mt3">
        <Search prefix={prefixes} {...itemsPaged} minMax={minMax} />
        <Table columns={columns} itemsPaged={itemsPaged} />
      </main>
      <Footer />
    </div>
  )
}
Pricelist.propTypes = {
  columns: PropTypes.array.isRequired,
  itemsPaged: PropTypes.object.isRequired,
  lead: PropTypes.string,
  menu: PropTypes.array,
  minMax: PropTypes.array,
  prefixes: PropTypes.object.isRequired,
}
Pricelist.defaultProps = {
  lead: 'Sailboats',
}
export default Pricelist

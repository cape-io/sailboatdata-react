import React, { PropTypes } from 'react'

import Menu from './Menu'
import Logo from './Logo'

// const styles = {
//   logo: {
//     width: 'initial',
//     marginLeft: 'auto',
//     marginRight: 'auto',
//   },
// }

function Header({ links, logo }) {
  return (
    <header>
      <Logo logo={logo} />
      {links &&
        <nav className="px1">
          <Menu links={links} />
          <button className="toggle">
            <i className="fa fa-chevron-circle-up fa-5x" aria-hidden="true"></i>
          </button>
        </nav>
      }
    </header>
  )
}

Header.propTypes = {
  links: PropTypes.array,
  logo: PropTypes.string.isRequired,
}
Header.defaultProps = {
  logo: 'http://sailboatdata.com/images/sbd_logo_400x50.gif',
}
export default Header

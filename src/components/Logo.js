
import React, { PropTypes } from 'react'

function Logo({ logo }) {
  return (
    <a href="http://sailboatdata.com/bbs/index.php?topic=2236.0" title="DEMO">
      <img src={logo} alt="logo" />
    </a>
  )
}

Logo.propTypes = {
  logo: PropTypes.string.isRequired,
}
Logo.defaultProps = {
}

export default Logo

import React, { PropTypes } from 'react'

const styles = {
  base: {
    color: 'rgba(132,133,94,.4)',
    fontSize: '.8rem',
  },
}

function Footer({ author, credit, yearNow, yearSince, message }) {
  const msg = `${yearSince}-${yearNow} ${author} ${message}`
  return (
    <footer className="text-center mb4 mt1 p1 clear" style={styles.base}>
      <p className="pt2 uppercase">
        &copy; {msg}
      </p>
      {credit &&
        <p className="m0 p0 small">site by <a href="http://www.cape.io/">CAPE</a></p>
      }
    </footer>
  )
}

Footer.propTypes = {
  author: PropTypes.string.isRequired,
  credit: PropTypes.bool,
  yearNow: PropTypes.string.isRequired,
  yearSince: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
}
Footer.defaultProps = {
  author: 'sailboatdata.com',
  credit: false,
  yearNow: '2016',
  message: 'All rights reserved.',
  yearSince: '2003',
}

export default Footer

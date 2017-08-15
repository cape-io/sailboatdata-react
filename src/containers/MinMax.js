import { connect } from 'react-redux'

import { minMaxSelector as mapStateToProps } from '../redux/select/minMax'

import Component from '../components/MinMax'

export default connect(mapStateToProps)(Component)

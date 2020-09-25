import { connect } from 'react-redux';

import mapStatetoProps         from './mapStatetoProps';
import * as mapDispatchToProps from './mapDispatchToProps';
import component               from './component';

export default connect(mapStatetoProps, mapDispatchToProps)(component);

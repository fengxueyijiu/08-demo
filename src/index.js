import React from 'react';
import {render} from 'react-dom';

import Routers from './routes';
import './main.css';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// import Grap from './Grap'
// render(<Grap  />,document.getElementById('root'));

render(<Routers />,document.getElementById('root'));

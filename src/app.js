import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';

import Component from '~/Component';

render(
    <Component />,
    document.getElementById('root')
);

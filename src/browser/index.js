import React from 'react';
import {hydrate} from 'react-dom';
import MyComponent from './MyComponent';

hydrate(<MyComponent />, document.getElementById("app"));
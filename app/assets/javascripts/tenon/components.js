/* global require */
window.React = require('react');
window.ReactDOM = require('react-dom');
window.ReactCSSTransitionGroup = require('react-addons-css-transition-group');
window.ResourceIndexComponents = {};
window.ResourceIndexRoot = require('./components/resource-index/containers/root');
window.StandaloneList = require('./components/resource-index/containers/standalone-list-root');
require('./querystring.underscore');
require('./inflection.underscore');
window._ = require('lodash');

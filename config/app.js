
var React            = require('react'),
ReactDOM             = require('react-dom'),
Router               = require('react-router'),
routes               = require('../app/routes'),
injectTapEventPlugin = require('react-tap-event-plugin');

// react-router handles location
Router.run(routes, Router.HistoryLocation, function(Application, state) {
    injectTapEventPlugin();

    // Render the components
    ReactDOM.render(React.createElement(Application, null), document.getElementById('content'));
});
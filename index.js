const app = require('./app')
const http = require('http')

const PORT = process.env.PORT || '8080'
app.set('port', PORT);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port and log message.
 */

server.listen(PORT, () => {
    console.log(`server running on port : ${PORT}`)
});




// this is helpful because it handles some typical errors, like
// if you are trying to set up your server on a port already in use
server.on('error', onError);

function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }
  
    const bind = typeof PORT === 'string'
      ? 'Pipe ' + PORT
      : 'Port ' + PORT;
  
    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }
  


// this is just kind of verbose and confusing and not that necessary

// server.on('listening', onListening);

//   /**
//    * Event listener for HTTP server "listening" event.
//    */
  
//   function onListening() {
//     var addr = server.address();
//     var bind = typeof addr === 'string'
//       ? 'pipe ' + addr
//       : 'port ' + addr.port;
//     debug('Listening on ' + bind);
//     console.log('you can see your stuff at localhost:' + addr.port)
//   }
  

// #!/usr/bin/env node

import app from '../app';
import http from 'http';
import dotenv from 'dotenv'
dotenv.config()


let port = process.env.PORT || '3000'
app.set('port', port);

let server = http.createServer(app);
server.listen(port);

// server.on('error', onError);
// server.on('listening', onListening);

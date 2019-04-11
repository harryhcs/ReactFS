import path from 'path';
import Express from 'express';
import server from './lib/graphql';

const app = new Express();
const port = 3001;

server.applyMiddleware({ app });


app.listen(port, error => {
  if (error) {
    console.error(error);
  } else {
    console.info(
      'Server running at http://localhost:%s/',
      port
    );
  }

});

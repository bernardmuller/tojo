// This is the main entry point for the application

import { createApp } from './http';

const app = createApp();

const port = process.env.PORT || '8000';

app.listen(port, () => {
  console.log('listening on port ' + port);
});

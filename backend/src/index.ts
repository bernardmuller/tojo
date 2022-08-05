import { createApp } from './http';

const app = createApp();

let port: string;
port = process.env.PORT || '8000';

app.listen(port, () => {
  console.log('listening on port ' + port);
});

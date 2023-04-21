import * as dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
const PORT = 3000 || process.env.PORT;

// enable cors and request parser
app.use(cors());
app.use(express.json());

// serve API app
import routes from './routes';
app.use('/api', routes);

// serve angular app
const frontendDir = path.join(__dirname, '../../frontend/dist');
app.use(express.static(frontendDir));
app.get('*', (req, res) => res.sendFile(`${frontendDir}/index.html`));

app.listen(PORT, () => {
	console.log(`[SERVER UP] http://localhost:${PORT}`);
});
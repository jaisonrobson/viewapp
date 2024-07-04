import './css/bootstrap.css'
import 'index.css'

import { createRoot } from 'react-dom/client';
import App from './views/app/App'

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);

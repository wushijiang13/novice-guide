import './app.css'
import App from './App.svelte'
import 'driver.js/dist/driver.min.css';

const app = new App({
  target: document.getElementById('app'),
})

export default app

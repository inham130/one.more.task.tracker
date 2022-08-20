import * as ReactDOM from 'react-dom';
import { App } from '@components/App';
import { store } from '@store/index';
import { Provider } from 'react-redux';
import './styles.css';

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
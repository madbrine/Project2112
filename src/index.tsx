import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/fonts/BebasNeue.ttf'
import './assets/fonts/BebasNeue-Regular.ttf'
import App from './App';
import { DAppProvider, Mainnet} from '@usedapp/core'
import { getDefaultProvider } from 'ethers';

const config = {
    readOnlyChainId: Mainnet.chainId,
    readOnlyUrls: {
        [Mainnet.chainId]: getDefaultProvider('mainnet')
    }
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <DAppProvider config={config}>
    <App />
  </DAppProvider>
);

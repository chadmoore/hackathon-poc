import './App.css'
import './qlik-override.css'
import Dashboard from './components/Dashboard'
import { QlikEmbedConfig, type HostConfig } from '@qlik/embed-react'

function App() {
  const hostConfig:HostConfig = {
    host: 'chadmoore.us.qlikcloud.com',
    clientId: 'ddc1fc94c0226eff09d5bae4f9293a6e',
    authType: 'oauth2',
    redirectUri: 'https://localhost:5173/auth/callback',
    autoRedirect: true,

  }

  return (
    <div className="min-h-screen bg-slate-100 p-6 md:p-8 lg:p-10 relative app-container">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Shell AI Dashboard</h1>
      <div className="rounded-lg shadow-lg bg-white p-5 overflow-hidden">
        <QlikEmbedConfig.Provider value={hostConfig}>
          <div className="!important:p-0 !important:m-0 relative">
            <Dashboard />
          </div>
        </QlikEmbedConfig.Provider>
      </div>
    </div>
  )
}

export default App

const RPC = require('discord-rpc')
const client = new RPC.Client({ transport: 'ipc' })
client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: 'Details',
            buttons: [
                { label: 'Name of Button 1', url: 'Redirect link of Button 1' },
                { label: 'Name of Button 2', url: 'Redirect link of Button 2' }
            ]
        }
      })
    console.log('Started!')
})
client.login({clientId: 'Client ID Here'})

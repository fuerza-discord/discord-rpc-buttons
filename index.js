const RPC = require('discord-rpc')
const client = new RPC.Client({ transport: 'ipc' })
client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: 'Check out the buttons below!',
            buttons: [
                { label: 'Insert Button name here.', url: 'Insert URL here.' },
                { label: 'Insert Button name here.', url: 'Insert URL here.' } 
            ]
        }
      })
    console.log('Your Discord RPC has been started.')
})
client.login({clientId: 'Insert Client ID here.'})

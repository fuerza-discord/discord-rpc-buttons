const RPC = require('discord-rpc')
const client = new RPC.Client({ transport: 'ipc' })
client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: 'Check out the buttons below!',
            buttons: [
                { label: 'All Nighters', url: 'https://discord.gg/QabpFsxhxm' },
                { label: 'Trade Mall', url: 'https://discord.gg/bKc8xrmCT6' } 
            ]
        }
      })
    console.log('Started!')
})
client.login({clientId: '804686328997740624'})

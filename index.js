const RPC = require('discord-rpc')
const client = new RPC.Client({ transport: 'ipc' })
client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: 'Join Server(s) below pls <3',
            buttons: [
                { label: 'Trade Mall', url: 'https://discord.gg/mnWTW7CzND' },
                { label: 'Rocket League Community', url: 'https://discord.gg/rocket' }
            ]
        }
      })
    console.log('Started!')
})
client.login({clientId: '796136517880905768'})
const { app, BrowserWindow, Menu, MenuItem } = require('electron')
const url = require('url')
const path = require('path')
const { shell } = require('electron')

let win

function createWindow() {
    win = new BrowserWindow({ width: 800, height: 600 })
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))
    // win.webContents.openDevTools()
}

const debugMenu = [
    {
        label: 'Debug',
        submenu: [
            {
                label: 'Start', click() {
                    console.log('We can use IPC for communication index.html')
                }
            },
            { label: 'Pause' },
            { label: 'Stop' },
            {
                label: 'Help', click() {
                    shell.openExternal('http://www.buraksenyurt.com')
                },
                accelerator: 'CmdOrCtrl+Shift+C'
            },
            { type: 'separator' },
            {
                label: 'Exit', click() {
                    app.quit()
                }
            }
        ]
    }
]

const menu = Menu.buildFromTemplate(debugMenu)
Menu.setApplicationMenu(menu)

app.on('ready', createWindow)
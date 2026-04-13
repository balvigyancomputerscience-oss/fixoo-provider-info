const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 900,
    minHeight: 600,
    icon: path.join(__dirname, 'icon.ico'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
    title: 'Fixoo Pro'
  })
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)
app.on('window-all-closed', () => app.quit())

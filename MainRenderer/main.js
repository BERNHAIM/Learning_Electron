console.log('main process working');
console.log('main.js');

const electron = require("electron");
const { BrowserWindow } = require('electron');
const app = electron.app;
const path = require("path");
const url = require("url");

let winone, wintwo;

function createWindow() {
    winone = new BrowserWindow({
        //for enable node function
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
        }
    });
    wintwo = new BrowserWindow({
        //for enable node function
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
        }
    });
    
    winone.loadURL(url.format({
        pathname: path.join(__dirname, 'one.html'),
        protocol: 'file',
        slashes: true
    }));

    wintwo.loadURL(url.format({
        pathname: path.join(__dirname, 'two.html'),
        protocol: 'file',
        slashes: true
    }));

    winone.webContents.openDevTools();
    wintwo.webContents.openDevTools();

    winone.on('closed', () => {
        winone = null;
    });

    wintwo.on('closed', () => {
        wintwo = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit()
    }
});

app.on('activate', () => {
    if(win === null){
        createWindow()
    }
});
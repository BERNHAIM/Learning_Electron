console.log('From renderer1');

const { remote } = require('electron');
const { BrowserWindow } = remote;
const path = require('path');
const url = require('url');

const newWindowBth = document.getElementById('newWindowBtn');
newWindowBth.addEventListener('click', function(event){
    let winThree = new BrowserWindow({
        //for enable node function
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
        }
    });
    winThree.loadURL(url.format({
        pathname: path.join(__dirname, 'three.html'),
        protocol: 'file',
        slashes: true
    }));

    winThree.webContents.openDevTools();
})
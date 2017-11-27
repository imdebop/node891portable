'use strict';

var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});

app.on('ready', function() {

  // �u���E�U(Chromium)�̋N��, ������ʂ̃��[�h
  mainWindow = new BrowserWindow({width: 800, height: 600,
  title: '柳生川土地区画整理組合'});
//  mainWindow.setTitle("柳生川土地区画整理組合");
  mainWindow.loadURL('file://' + __dirname + '/index.html');
//  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});

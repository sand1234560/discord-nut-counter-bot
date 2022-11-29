<h1>Discord.js nut counter bot</h1>

![mp,550x550,gloss,ffffff,t u3](https://user-images.githubusercontent.com/90265322/201673566-88727c41-0ce4-4c48-983f-472b2795902a.jpg)

Discord bot for you to keep track of how many times you ejaculate in a day. 

<b>You can only log 11 times before the bot fucking dies. (No one should ever do it more than 11 times a day)</b>

This tutorial is mainly aimed towards Ubuntu and Arch Linux, Windows support might come some day.

<b>!!!Tutorial unfinished!!!</b>
<h2>Required dependencies</h2>

Install the latest version of nodejs


<b>Ubuntu</b>

```
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - &&\
sudo apt-get install -y nodejs
```
<b>Arch</b>

```
sudo pacman -S nodejs
```

<h2>Bot configuration</h2>

Download this github as a zip.

Follow this tutorial (Till 5 minutes mark) on creating a discord application: https://www.youtube.com/watch?v=JMmUW4d3Noc

I didn't provide a .env file, you have to create it yourself.

run "node index.js" in the main directory to start the bot. (Use systemd if you don't want to activate it manually.)

Create a new discord channel for your log. Allow only you and the bot to send message.

<h2>Automatically run on start up using systemd</h2>
sudo nano /etc/systemd/system/<anything>.service

```
[Unit]
Description=nut bot, bruh.
After=multi-user.target

[Service]
WorkingDirectory=<path-to-nut>/Nut bot
ExecStart=/usr/bin/node index.js
User=<username>

[Install]
WantedBy=multi-user.target
```
Run this to start the bot:
  
```sudo systemctl start <anything>.service```

Run this to start the bot now and on start up:

```sudo systemctl enable --now <anything>.service```

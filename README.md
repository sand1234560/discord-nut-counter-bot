<h1>Discord.js nut counter bot</h1>

![mp,550x550,gloss,ffffff,t u3](https://user-images.githubusercontent.com/90265322/201673566-88727c41-0ce4-4c48-983f-472b2795902a.jpg)

Discord bot for you to keep track of how many times you ejaculate in a day. 

<b>You can only log 11 times before the bot fucking dies. (No one should ever do it more than 11 times a day)</b>

<h2>How 2 use the bot</h2>

Type `log` to log your nut 
 
Type `logSend` to send a manual log if in any case the bot malfunction and you missed a day.
  
```**Day <days-since-start> - <Date> <Month> <Year>:** <Amount> times (Total: <Total> times)```

Example:

```**Day 69 - 1 Dec 2022:** 7 times (Total: 420 times)```
  
 The bot automatically sends :zero: times at 23:59 if no log has been made that day.
 
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

Download this github as a ZIP or use git clone:

```git clone https://github.com/sand1234560/discord-nut-counter-bot.git```

Put the project anywhere where it suits you, also unzip if you downloaded it as a ZIP.

Follow this tutorial (Till 5 minutes mark) on creating a discord application: https://www.youtube.com/watch?v=JMmUW4d3Noc

<h3>Creating a new discord bot </h3>
(Follow this if you don't already have bot)
Go to ```https://discord.com/developers/applications/```

![Screenshot from 2022-11-29 14-07-11](https://user-images.githubusercontent.com/90265322/204464252-f7af47fb-664c-45b7-a71a-eca47ae0956f.png)

Create a new application

![Screenshot from 2022-11-29 14-07-22](https://user-images.githubusercontent.com/90265322/204464264-b0b876a9-1567-41ab-bfbf-f3651233ba67.png)

![Screenshot from 2022-11-29 14-08-37](https://user-images.githubusercontent.com/90265322/204464287-8fff2ce2-fdc1-4d07-bd10-c8fd1fda1714.png)

Add a bot

![Screenshot from 2022-11-29 14-08-46](https://user-images.githubusercontent.com/90265322/204464419-98855860-c009-4087-95e0-c19c90d098de.png)

Give the bot some privileges

![image](https://user-images.githubusercontent.com/90265322/204467001-3aef7e83-e355-4741-afa2-8de893b483be.png)

Reset the token

![Screenshot from 2022-11-29 14-09-01](https://user-images.githubusercontent.com/90265322/204464427-0f32af47-c1f9-472d-ae4e-1043b66eecca.png)

Copy the token (Token is an authentication Key, keep it safe)

![Screenshot from 2022-11-29 14-09-16](https://user-images.githubusercontent.com/90265322/204464446-7bb30136-55f8-452f-a4c6-4298ee499e85.png)

Navigate to the discord-nut-counter-bot directory

create a new file named .env using any text editor (nano in this case)

```nano .env```

Enter your copied token 

![Screenshot from 2022-11-29 20-22-25](https://user-images.githubusercontent.com/90265322/204540382-19d9a770-e4ac-40e3-b326-691acdb81aad.png)

Ctrl+O, Enter, Ctrl+X to save and exit nano

invite the bot to your server. (Administrator privilege isn't good, Im working on it alright)

![image](https://user-images.githubusercontent.com/90265322/204468054-fcb909c3-599a-4526-a78f-ebde8f8da39a.png)

![image](https://user-images.githubusercontent.com/90265322/204468222-7e67c26a-62fe-4e48-849b-e17e0cef4524.png)

Create a new discord channel for your log. Allow only you and the bot to send message.

run "node index.js" in the main directory to start the bot. (Use systemd if you don't want to activate it manually.)
  
<h2>Automatically run on start up using systemd</h2>
sudo nano /etc/systemd/system/<anything>.service

```
[Unit]
Description=Logs your nut
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

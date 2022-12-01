<h1>Discord.js nut counter bot</h1>

![mp,550x550,gloss,ffffff,t u3](https://user-images.githubusercontent.com/90265322/201673566-88727c41-0ce4-4c48-983f-472b2795902a.jpg)

Discord bot for you to keep track of how many times you ejaculate in a day. 

<b>You can only log 11 times before the bot fucking dies. (No one should ever do it more than 11 times a day)</b>

<h2>How 2 use the bot</h2>

Type `log` to log your nut 
 
Type `logSend` to send a manual log if in any case the bot malfunction and you missed a day.
  
```**Day <days-since-start> - <Date> <Month> <Year>:** <Amount> times (Total: <Total> times)```

Example:

```**Day 69 - 1 Dec 2022:** :seven: times (Total: 420 times)```
  
 The bot automatically sends :zero: times at 23:59 if no log has been made that day.
 
This tutorial is mainly aimed towards Ubuntu and Arch Linux, Windows support might come some day.

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

Clone this repo to anywhere where it suits you.

```git clone https://github.com/sand1234560/discord-nut-counter-bot.git```

(You can also download this project as a ZIP and extract it.)

cd into it

create a new file named .env using any text editor (nano in this case)

```nano .env```

Enter your bot token 

![Screenshot from 2022-11-29 20-22-25](https://user-images.githubusercontent.com/90265322/204540382-19d9a770-e4ac-40e3-b326-691acdb81aad.png)

Ctrl+O, Enter, Ctrl+X to save and exit nano

Create a new discord channel for your log. Allow only you and the bot to send message.

Copy the <b>channel's</b> and your <b>user's ID</b> into sus.js

<img width="50%" alt="Screen Shot 2565-12-01 at 12 10 58" src="https://user-images.githubusercontent.com/90265322/204970789-6cf06161-4a5a-45a7-8e6e-6ccbe8eef333.png">

<img width="50%" alt="Screen Shot 2565-12-01 at 12 11 13" src="https://user-images.githubusercontent.com/90265322/204970877-09316d44-4cd8-4eab-808f-fe37e9cad77b.png">

<img width="80%" alt="Screen Shot 2565-12-01 at 12 13 21" src="https://user-images.githubusercontent.com/90265322/204971301-21efed20-b908-42cf-95d7-7bdee7a1afaa.png">

run "node index.js" in the main directory to start the bot. (Use systemd if you don't want to activate it manually.)

<h2>Automatically run on start up using systemd</h2>

```sudo nano /etc/systemd/system/<anything>.service```

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

<h2>Creating a new discord bot (Follow this if you don't have one already.) </h2>

Go to https://discord.com/developers/applications/ and create a new application

<img width="80%" alt="sus" src="https://user-images.githubusercontent.com/90265322/204464252-f7af47fb-664c-45b7-a71a-eca47ae0956f.png">

<img width="80%" alt="sus" src="https://user-images.githubusercontent.com/90265322/204464264-b0b876a9-1567-41ab-bfbf-f3651233ba67.png">

<img width="80%" alt="sus" src="https://user-images.githubusercontent.com/90265322/204464287-8fff2ce2-fdc1-4d07-bd10-c8fd1fda1714.png">

Add a bot

<img width="80%" alt="sus" src="https://user-images.githubusercontent.com/90265322/204464419-98855860-c009-4087-95e0-c19c90d098de.png">

Give the bot some privileges

<img width="80%" alt="sus" src="https://user-images.githubusercontent.com/90265322/204467001-3aef7e83-e355-4741-afa2-8de893b483be.png">

Reset the token

<img width="80%" alt="sus" src="https://user-images.githubusercontent.com/90265322/204464427-0f32af47-c1f9-472d-ae4e-1043b66eecca.png">

Copy the token (Token is an authentication Key, keep it safe)

<img width="80%" alt="sus" src="https://user-images.githubusercontent.com/90265322/204464446-7bb30136-55f8-452f-a4c6-4298ee499e85.png">

invite the bot to your server.

<img width="80%" alt="sus" src="https://user-images.githubusercontent.com/90265322/204468054-fcb909c3-599a-4526-a78f-ebde8f8da39a.png">

<img width="80%" alt="sus" src="https://user-images.githubusercontent.com/90265322/204468222-7e67c26a-62fe-4e48-849b-e17e0cef4524.png">

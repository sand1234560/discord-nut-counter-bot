import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
})

client.on('ready', () => {
    console.log('Letssss fucking go')
})
client.on('messageCreate', async (message) => {
    if (message.content == 'log') {
        message.delete();
        
        let nowDate, susMonth, susYear, totalDayMil, totalDay, Amount, susAmount, susTime,
        lastMessageSplit, previousTotal, finalTotal, overallCumTime;

        const firstDay = new Date(2021, 7, 10); //Start date
        const dateCreate = new Date();
        nowDate = dateCreate.getDate();
        susMonth = dateCreate.getMonth();
        susYear = dateCreate.getFullYear();
        totalDayMil = dateCreate - firstDay; //Total day in milliseconds.
        totalDay = Math.floor(totalDayMil / (1000*60*60*24)); //Total day milsec convert to days.
        switch(susMonth){
            case 0:susMonth = "January";break;
            case 1:susMonth = "February";break;
            case 2:susMonth = "March";break;
            case 3:susMonth = "April";break;
            case 4:susMonth = "May";break;
            case 5:susMonth = "June";break;
            case 6:susMonth = "July";break;
            case 7:susMonth = "August";break;
            case 8:susMonth = "September";break;
            case 9:susMonth = "October";break;
            case 10:susMonth = "November";break;
            case 11:susMonth = "December";break;
            default:susMonth = "Bro, I think month is broken";break;
        }     
        console.log(`\n${nowDate} ${susMonth} ${susYear} (${totalDay} days since starting date)`)

        function AmountConvert(susAmount){
            switch(susAmount) {
                case ":zero":Amount = 0;break;
                case ":one:":Amount = 1;break;
                case ":two:":Amount = 2;break;
                case ":three:":Amount = 3;break;
                case ":four:":Amount = 4;break;
                case ":five:":Amount = 5;break;
                case ":six:":Amount = 6;break;
                case ":seven:":Amount = 7;break;
                case ":eight:":Amount = 8;break;
                case ":nine:":Amount = 9;break;
                case ":keycap_ten:":Amount = 10;break;
                case ":one::one:":Amount = 11;break;
                default:Amount = "Too much, my man.";break;
            }
            Amount += 1;
            return Amount;
        }

        function timeConvert(Amount){ //whether "time" after the day's Amount becomes "times"
            if (Amount == 1) {
                susTime = "time"
            } else {
                susTime = "times"
            }
            return susTime;
        }

        function timeConvertAgain(finalTotal){ // whether "time" after total number becomes "times"
            if (finalTotal == 1){
                overallCumTime = "time"
            } else {
                overallCumTime = "times"
            }
            return overallCumTime;
        }

        setTimeout(() => { 
            message.channel.messages.fetch({ limit: 1 }).then(messages => { //fetch 2s after command
            let lastMessage = messages.first();
            if (lastMessage == undefined){
                message.channel.send({ //Absolute first message
                    content: `**Day ${totalDay} - ${nowDate} ${susMonth} ${susYear}:** :one: time (Total: 1 time)`
                })
            }
            lastMessageSplit = lastMessage.content.split(' ');
            previousTotal = lastMessageSplit[9]; //Previous day total
            finalTotal = parseInt(previousTotal); //turns previousTotal into int
            finalTotal+= 1;
            console.log(`previous total: ${previousTotal}, Today total: ${finalTotal}`);

            let previousDay = lastMessageSplit[1]; 
            let finalPreviousDay = parseInt(previousDay); //previous date

        susAmount = lastMessageSplit[6];
        AmountConvert(susAmount);
        timeConvert(Amount);
        timeConvertAgain(finalTotal);

        switch (Amount){
            case 0:susAmount = ":zero:"; break; //sus_Amount -> Amount -> fuck_off (Pretty much sus_Amount b)
            case 1:susAmount = ":one:";break;
            case 2:susAmount = ":two:";break;
            case 3:susAmount = ":three:";break;
            case 4:susAmount = ":four:";break;
            case 5:susAmount = ":five:";break;
            case 6:susAmount = ":six:";break;
            case 7:susAmount = ":seven:";break;
            case 8:susAmount = ":eight:";break;
            case 9:susAmount = ":nine:";break;
            case 10:susAmount = ":keycap_ten:";break;
            case 11:susAmount = ":one::one:";break;
            default:susAmount = "Too much, my man.";break;
        }

        let dateCompare = totalDay-finalPreviousDay
        console.log(`Previous date: ${finalPreviousDay}`);
        console.log(`lastMessageSplit: ${lastMessageSplit}`);
        console.log(`dateCompare: ${dateCompare}`);
        console.log(`Amount: ${Amount}`);

        setTimeout(() => {
            // The date is the same as previous'
            if (dateCompare == 0){ //edit message 1 second after fetching ( 3s after command)
                lastMessage.edit(`**Day ${totalDay} - ${nowDate} ${susMonth} ${susYear}:** ${susAmount} ${susTime} (Total: ${finalTotal} ${overallCumTime})`)
                .then(msg => console.log(`Updated the content of a message to ${msg.content}`))
                .catch(console.error);
            }
            // somehow broken
            else if (Number.isNaN(dateCompare)){
                message.channel.send({
                    content: `**Day ${totalDay} - ${nowDate} ${susMonth} ${susYear}:** :one: time (Total: ${finalTotal} ${overallCumTime})`
                })
                console.log("No previous message found")
            }
            // The date doesn't match previous'
            else if (dateCompare > 0){
                message.channel.send({
                    content: `**Day ${totalDay} - ${nowDate} ${susMonth} ${susYear}:** :one: time (Total: ${finalTotal} ${overallCumTime})`
                })
            }
                        }, 1000);
      })
      .catch(console.error);  }, 2000);
    }
})

client.login(process.env.TOKEN)

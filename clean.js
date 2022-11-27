import DiscordJS, { Channel, Intents, Message } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
})

client.on('ready', () => {
    let susTime;
    const firstDay = new Date(2021, 7, 10); //Start date (The project idea started on 2021, 7 ,10)
    const dateCreate = new Date();
    let nowDate = dateCreate.getDate();
    let susMonth = dateCreate.getMonth();
    let susYear = dateCreate.getFullYear();
    let totalDayMil = dateCreate - firstDay; //Total day in milliseconds.
    let totalDay = Math.floor((totalDayMil / (1000*60*60*24)) + 1); //Total day milsec convert to days.
    switch(susMonth){
        case 0:susMonth = "Jan";break;
        case 1:susMonth = "Feb";break;
        case 2:susMonth = "Mar";break;
        case 3:susMonth = "Apr";break;
        case 4:susMonth = "May";break;
        case 5:susMonth = "Jun";break;
        case 6:susMonth = "Jul";break;
        case 7:susMonth = "Aug";break;
        case 8:susMonth = "Sep";break;
        case 9:susMonth = "Oct";break;
        case 10:susMonth = "Nov";break;
        case 11:susMonth = "Dec";break;
        default:susMonth = "Bro, I think month is broken";break;
    }
    
    console.log('automatically sending time!!1111!!');
    const channel = client.channels.cache.find(channel => channel.name === "nut-test-real");
    
    channel.messages.fetch({ limit: 1 }).then(messages => {
        let lastMessage = messages.first();
        let lastMessageSplit = lastMessage.content.split(' ');
        let previousDay = lastMessageSplit[1]; 
        let finalPreviousDay = parseInt(previousDay); //previous date
        let dateCompare = totalDay-finalPreviousDay;
        
        console.log(`lastMessage: ${lastMessage}`);
        console.log(`PreviousDay: ${finalPreviousDay}`)
        console.log(`Today: ${totalDay}`)
        console.log(`dateCompare: ${dateCompare}`)

        if (lastMessage == undefined){ //No previous message (first message)
            channel.send({
                content: `**Day ${totalDay} - ${nowDate} ${susMonth} ${susYear}:** :zero: times (Total: 0 times)` //first day
            })
            console.log("bruv");
        } else {
            if (dateCompare > 0){
                let previousTotal = lastMessageSplit[9]; //Previous day total
                let finalTotal = parseInt(previousTotal); //turns previousTotal into int
                finalTotal+= 1;

                function timeConvert(previousTotal){ //whether "time" after the day's total amount becomes "times"
                    if (previousTotal == 1) {
                        susTime = "time";
                    } else {
                        susTime = "times";
                    }
                    return susTime;
                }
                timeConvert(previousTotal)
                console.log(`previous total: ${previousTotal}, Today total: ${finalTotal}`);

                channel.send(`**Day ${totalDay} - ${nowDate} ${susMonth} ${susYear}:** :zero: times (Total: ${previousTotal} ${susTime})`)
            }
        }
    })
})
client.login(process.env.TOKEN)
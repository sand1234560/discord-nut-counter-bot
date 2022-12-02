import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()
import schedule from 'node-schedule'
import { leChannelID, leUserID, firstDay } from './sus.js'

const client = new DiscordJS.Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
})

let monthReal, susTime, nowDate, susMonth, susYear, totalDayMil, totalDay, manSend, manSendArray, sheesh, Amount, susAmount, lastMessageSplit, previousTotal, finalTotal, overallCumTime, averageCum, averageCumReal;

function monthConverter(susMonth){
    switch(susMonth){
        case 0:monthReal = "Jan";break;
        case 1:monthReal = "Feb";break;
        case 2:monthReal = "Mar";break;
        case 3:monthReal = "Apr";break;
        case 4:monthReal = "May";break;
        case 5:monthReal = "Jun";break;
        case 6:monthReal = "Jul";break;
        case 7:monthReal = "Aug";break;
        case 8:monthReal = "Sep";break;
        case 9:monthReal = "Oct";break;
        case 10:monthReal = "Nov";break;
        case 11:monthReal = "Dec";break;
        default:monthReal = "Bro, I think month is broken";break;
    }
    return(monthReal);
}
function averageCoom(finalTotal, totalDay){
    averageCum = finalTotal/totalDay;
    averageCumReal = averageCum.toFixed(2);
    return {averageCum, averageCumReal};
}

function prevTimeConvert(previousTotal){ //whether "time" after the day's total amount becomes "times"
    if (previousTotal == 1) {
        susTime = "time";
    } else {
        susTime = "times";
    }
    return susTime;
}

function dateSet(firstDay){
    let dateCreate = new Date();
    nowDate = dateCreate.getDate();
    susMonth = dateCreate.getMonth();
    susYear = dateCreate.getFullYear();
    totalDayMil = dateCreate - firstDay; //Total day in milliseconds.
    totalDay = Math.floor((totalDayMil / (1000*60*60*24)) + 1); //Total day milsec convert to days.
    monthConverter(susMonth);
    return {nowDate, monthReal, susYear, totalDay};
}

client.on('ready', () => {
    console.log(`ChannelID: ${leChannelID}`)
    console.log(`It's nuttin' time`) //It's nuttin' time
    const leSchedule = schedule.scheduleJob(`59 23 * * *`, function(){ //cron job
        console.log('automatically sending time!!1111!!');
        dateSet(firstDay);
/*        
        const dateCreate = new Date();
        nowDate = dateCreate.getDate();
        susMonth = dateCreate.getMonth();
        susYear = dateCreate.getFullYear();
        totalDayMil = dateCreate - firstDay; //Total day in milliseconds.
        totalDay = Math.floor((totalDayMil / (1000*60*60*24)) + 1); //Total day milsec convert to days.
        monthConverter(susMonth)*/

        //const channel = client.channels.cache.find(channel => channel.name === "nut-test-real");
        const channel = client.channels.cache.find(channel => channel.id == leChannelID);

        channel.messages.fetch({ limit: 1 }).then(messages => {
            let lastMessage = messages.first();
            
            
            if (lastMessage == undefined){ //First message
                console.log(lastMessage)

                console.log(`Sending first mesg: **Day ${totalDay} - ${nowDate} ${monthReal} ${susYear}:** :zero: times (Total: 0 times) (Average: 0.00)`);

                channel.send({
                    content: `**Day ${totalDay} - ${nowDate} ${monthReal} ${susYear}:** :zero: times (Total: 0 times) (Average: 0.00)` //first day
                })
            } else { //Clean that day
                lastMessageSplit = lastMessage.content.split(' ');
                let previousDay = lastMessageSplit[1]; 
                let finalPreviousDay = parseInt(previousDay); //previous date
                let dateCompare = totalDay-finalPreviousDay;

                console.log(`lastMessage: ${lastMessage}`);
                console.log(`dateCompare: ${dateCompare}`)

                if (dateCompare > 0){
                    let previousDay = lastMessageSplit[1]; 
                    let finalPreviousDay = parseInt(previousDay); //previous date
                    let previousTotal = lastMessageSplit[9]; //Previous day total
                    let finalTotal = parseInt(previousTotal); //turns previousTotal into int

                    prevTimeConvert(previousTotal);
                    averageCoom(finalTotal, totalDay);

                    console.log(`PreviousDay: ${finalPreviousDay}`);
                    console.log(`Today (Since start): ${totalDay}`);
                    console.log(`previous total: ${previousTotal}, Today total: ${finalTotal}`);
                    console.log(`Auto sending: **Day ${totalDay} - ${nowDate} ${monthReal} ${susYear}:** :zero: times (Total: 0 times) (Average: 0)`);            
                    console.log(`Averge cum per day: ${averageCum} \n`);
    
                    channel.send(`**Day ${totalDay} - ${nowDate} ${monthReal} ${susYear}:** :zero: times (Total: ${previousTotal} ${susTime}) (Average: ${averageCumReal})`);
                } else if (dateCompare == 0){
                    console.log("smh")
                }
            }    
        })
    })
})

client.on('messageCreate', async (message) => {
    if (message.channelId == leChannelID && message.author.id == leUserID){
        if (message.content == 'log') {
            message.delete();
            dateSet(firstDay);
 /*
            const dateCreate = new Date();
            nowDate = dateCreate.getDate();
            susMonth = dateCreate.getMonth();
            susYear = dateCreate.getFullYear();
            totalDayMil = dateCreate - firstDay; //Total day in milliseconds.
            totalDay = Math.floor((totalDayMil / (1000*60*60*24)) + 1); //Total day milsec convert to days.
*/          
            function AmountConvert(susAmount){
                switch(susAmount) {
                    case ":zero:":Amount = 0;break;
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
                    case "0️⃣":Amount = 0;break;
                    case "1️⃣":Amount = 1;break;
                    case "2️⃣":Amount = 2;break;
                    case "3️⃣":Amount = 3;break;
                    case "4️⃣":Amount = 4;break;
                    case "5️⃣":Amount = 5;break;
                    case "6️⃣":Amount = 6;break;
                    case "7️⃣":Amount = 7;break;
                    case "8️⃣":Amount = 8;break;
                    case "9️⃣":Amount = 9;break;
                    case "🔟":Amount = 10;break;
                    case "1️⃣1️⃣":Amount = 11;break;
                    default:Amount = "**Too much, my man.**";break;
                }
                Amount += 1;
                return Amount;
            }

            function timeConvert(Amount){ //whether "time" after the day's Amount becomes "times"
                if (Amount == 1) {
                    susTime = "time";
                } else {
                    susTime = "times";
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
                message.channel.messages.fetch({ limit: 1 }).then(messages => { //fetch 1.2s after command
                let lastMessage = messages.first();
                if (lastMessage == undefined){
                    message.channel.send({ //Absolute first message
                        content: `**Day ${totalDay} - ${nowDate} ${monthReal} ${susYear}:** :one: time (Total: 1 time) (Average: 0.00)`
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
                averageCoom(finalTotal, totalDay);

                console.log(`\n${nowDate} ${monthReal} ${susYear} (${totalDay} days since starting date)`)

                //sus_Amount(read data) -> Amount(int) -> sus_Amount(convert to :number: style)
                switch (Amount){
                    case 0:susAmount = ":zero:"; break; 
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
                    default:susAmount = "**Too much, my man.**";break;
                }

                let dateCompare = totalDay-finalPreviousDay
                console.log(`Previous entry's day: ${finalPreviousDay}`);
                console.log(`lastMessageSplit: ${lastMessageSplit}`);
                console.log(`dateCompare: ${dateCompare}`);
                console.log(`Sending amount: ${Amount}`);
                console.log(`Averge cum per day: ${averageCum}`);

                setTimeout(() => {     
                    // The date is the same as previous' log entry
                    if (dateCompare == 0){ //edit message 1 second after fetching ( 3s after command)
                        lastMessage.edit(`**Day ${totalDay} - ${nowDate} ${monthReal} ${susYear}:** ${susAmount} ${susTime} (Total: ${finalTotal} ${overallCumTime}) (Average: ${averageCumReal})`)
                        .then(msg => console.log(`Updated the content of a message to ${msg.content}`))
                        .catch(console.error);
                    }
                    /* //shitfucking broken
                    else if (Number.isNaN(dateCompare)){
                        message.channel.send({
                            content: `**Day ${totalDay} - ${nowDate} ${susMonth} ${susYear}:** :one: time (Total: ${finalTotal} ${overallCumTime})`
                        })
                        console.log("No previous message found")
                    }*/

                    // The date doesn't match previous' log entry
                    else if (dateCompare > 0){
                        message.channel.send({
                            content: `**Day ${totalDay} - ${nowDate} ${monthReal} ${susYear}:** :one: time (Total: ${finalTotal} ${overallCumTime}) (Average: ${averageCumReal})`
                        })
                    }
                            }, 800);
                }).catch(console.error);  
            }, 800);
        }
    }  
})

client.on('messageCreate', async (message) => {
    if (message.channelId == leChannelID && message.author.id == leUserID){
        if (message.content.startsWith("logSend")) { //Manual send
            manSend = message.content.slice(8).split(' ');
            manSendArray = manSend[6]
            switch(manSendArray) {
                case "0️⃣":sheesh = ":zero:";break;
                case "1️⃣":sheesh = ":one:";break;
                case "2️⃣":sheesh = ":two:";break;
                case "3️⃣":sheesh = ":three:";break;
                case "4️⃣":sheesh = ":four:";break;
                case "5️⃣":sheesh = ":five:";break;
                case "6️⃣":sheesh = ":six:";break;
                case "7️⃣":sheesh = ":seven:";break;
                case "8️⃣":sheesh = ":eight:";break;
                case "9️⃣":sheesh = ":nine:";break;
                case "🔟":sheesh = ":keycap_ten:";break;
                case "1️⃣1️⃣":sheesh = ":one::one:";break;
                default:sheesh = "**Too much, my man.**";break;
            }
            message.delete();
            manSend.splice(6, 1, sheesh)
            let manSendFinal = manSend.join(" ");
            /* //Just some old troubleshooting stuff
            console.log("manSend: " + manSend);
            console.log("manSendArray: " + manSendArray);
            console.log("sheesh: " + sheesh)
            */
            message.channel.send(manSendFinal);
        }
    }
})

client.login(process.env.TOKEN)

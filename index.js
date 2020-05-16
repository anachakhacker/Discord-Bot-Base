const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true})

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online`);
});

bot.on('message', msg => {

    if (msg.content === '!help') {
        msg.reply('!line ไลน์กลุ่ม');
        msg.reply('!ak AK สุดหล่อ');
      }

    if (msg.content === '!line') {
        msg.reply('https://line.me/ti/g2/E3hwc5wsMinAQ5uZ4SfUUA?utm_source=invitation&utm_medium=link_copy&utm_campaign=default');
    }

    if (msg.content === '!ak') {
        msg.reply('AK7Inch!!!!!!');
      }

    if (msg.content === '!group') {
        msg.reply('https://www.facebook.com/groups/anachakhacker/');
      }

    if (msg.content === '!page') {
        msg.reply('https://www.facebook.com/anachakhackers/');
      }


  });

bot.login(botconfig.token);
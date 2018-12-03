var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
     
    var sentences = [
    'Heyyy',
    'HOY',
    'HEYYY MON GARS',
    'Salut salut !',
    'Slt',
    'Bjr',
    'Bien le bonjour',
    'Coucou',
    'coucou',
    'coucou ça va ?',
    'Hello, ça va bien ?',
    'slt mon gras',
    'wesh poto',
 ];

 	var insultes = [ 
 	'Pas de gros mots je vous prie'
 	]
    switch(message) {
    // ping
    case 'bonjour':
        bot.sendMessage({
            to: channelID,
            message: sentences[Math.floor(Math.random(0.2) * sentences.length)]
        });
        break;
    case 'Salut':
        bot.sendMessage({
            to: channelID,
            message: sentences[Math.floor(Math.random(0.2) * sentences.length)]
        });
        break;
    case 'SLT':
        bot.sendMessage({
            to: channelID,
            message: sentences[Math.floor(Math.random(0.2) * sentences.length)]
        });
        break;
    case 'Coucou':
        bot.sendMessage({
            to: channelID,
            message: sentences[Math.floor(Math.random(0.2) * sentences.length)]
        });
        break;
    case 'slt':
        bot.sendMessage({
            to: channelID,
            message: sentences[Math.floor(Math.random(0.2) * sentences.length)]
        });
        break;
    case 'bjr':
        bot.sendMessage({
            to: channelID,
            message: sentences[Math.floor(Math.random(0.2) * sentences.length)]
        });
        break;
    case 'BJR':
        bot.sendMessage({
            to: channelID,
            message: sentences[Math.floor(Math.random(0.2) * sentences.length)]
        });
        break;
    case 'Hey':
        bot.sendMessage({
            to: channelID,
            message: sentences[Math.floor(Math.random(0.2) * sentences.length)]
        });
        break;
    case 'Bonjour':
        bot.sendMessage({
            to: channelID,
            message: sentences[Math.floor(Math.random(0.2) * sentences.length)]
        });
        break;
    case 'coucou':
        bot.sendMessage({
            to: channelID,
            message: sentences[Math.floor(Math.random(0.2) * sentences.length)]
        });
        break;
    }
});
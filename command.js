const  { REST, Routes } = require('discord.js');

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken("MTE4MDM1Nzk5MDY2NzI3MjMyMg.GGolVb.z5qySuMfh2KP8-sSks1TE7dxiBdzyLviHIpeI0");

(async ()=>{
    try {
        console.log('Started refreshing application (/) commands.');
      
        await rest.put(Routes.applicationCommands('1180357990667272322'), { body: commands });
      
        console.log('Successfully reloaded application (/) commands.');
      } catch (error) {
        console.error(error);
      }
})()
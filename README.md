# Adding bot to the server
[Link](https://discord.com/oauth2/authorize?client_id=772241102417559602&scope=bot&permissions=268590081) to add bot to your server

To generate a different invite link with different permisions you can  
use [this site](https://discordapi.com/permissions.html) or view the official Discord.Js docs [here](https://discordjs.guide/preparations/adding-your-bot-to-servers.html#bot-invite-links).

# Auth key
If you want to use this bot in a different application, then you need
to change the auth key which is currently in the gitignore for this app.

The auth key goes in the `auth.json` filein the repo's root directory. 

An example json file looks like this:

```json
{
    "token" : "<your-token-here>"
}

```

You could add to this if you had other things like API keys or
something of the like. In the future I aim to change this to 
Docker Secrets once I get the bot up and running.

# Config File
There is a base `config.json` that is used to determine command prefixes and
some other common bot settings. This is a good place to put bot-specific
options or other stuff that should be easily changeable in the future. 

## Thanks Sam!

Shout out to [theheckle](https://github.com/theheckle/tanatimer) for providing a good starting point for this!
#Install

Install via NPM

    npm install nicetime
    
Or clone this repository

    git clone git://github.com/robinduckett/nicetime.git
    
Pull requests welcome!

#API

## Usage Example #1

**nicetime**(*duration*);

    nicetime = require('nicetime'),
    random_duration = Math.random() * (60 * 20);
        
    console.log(nicetime(random_duration));
    
output example: 17 minutes
    
## Usage Example #2

**nicetime**(*from_unixtime*, *to_unixtime*);

    nicetime = require('nicetime'),
    to = (new Date().getTime()/1000) - Math.random() * (60 * 120);
        
    console.log(nicetime(new Date().getTime()/1000, to));
    
output example: about an hour ago

## Usage Example #3

First parameter defaults to now, so you can do:

**nicetime**(null, *to_unixtime*);

    nicetime = require('nicetime'),
    to = (new Date().getTime()/1000) - Math.random() * (60 * 120);
        
    console.log(nicetime(null, to));
    
output example: 23 minutes ago
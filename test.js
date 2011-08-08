nicetime = require('nicetime'),
random_duration = Math.random() * (60 * 20);
    
console.log(nicetime(random_duration));

nicetime = require('nicetime'),
to = (new Date().getTime()/1000) - Math.random() * (60 * 120);
    
console.log(nicetime(new Date().getTime()/1000, to));

nicetime = require('nicetime'),
to = (new Date().getTime()/1000) - Math.random() * (60 * 120);
    
console.log(nicetime(null, to));
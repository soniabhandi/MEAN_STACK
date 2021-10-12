var Str = require('@supercharge/strings')

function generate_random_key(n)
{ 
    var random = Str.random(n)
    return random
}

module.exports=generate_random_key
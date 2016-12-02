ct = function(typ) {
    typ = typ.toLowerCase()
    var baseCase
 	switch (typ) {
        case 'number': 
            baseCase = 0
            break
        case 'string':
        	baseCase = ''
            break
        case 'boolean':
        	baseCase = false
            break
        case 'object':
        	baseCase = {}
            break
        case 'array': 
        	baseCase = []
            break
        default: 
        	throw new Error("type must be 'number','string','boolean','object', or 'array'")
    }

    this.__baseCase__ = baseCase
    this.data = {}
}

DefaultDict.prototype = {    
	at: function(key) {
        return this.data[key] ? this.data[key] : this.data[key] = this.__baseCase__
    },
    set: function(key,val) {
    	this.data[key] = val
    	return this
	},
	increment: function(key,incrBy) {
        incrBy = incrBy ? incrBy : 1
     	this.set(key, this.at(key) + incrBy)
        return this
    }
}

module.exports = DefaultDict

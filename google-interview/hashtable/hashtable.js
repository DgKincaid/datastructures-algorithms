const hash = require('string-hash');

class HashTable {
    constructor() {
        this.table = [];
    }

    insert(key, value) {
        const keyHash = hash(key);
        const newValue = { key: key, value: value }

        if(!this.table[keyHash]) {
            this.table[keyHash] = [];
        }

        this.table[keyHash].push(newValue);
    }

    get(key) {
        const keyHash = hash(key);

        if(!this.table[keyHash]) {
            return null;
        }

        for(let i = 0; i < this.table[keyHash].length; i++) {
            if(this.table[keyHash][i].key === key) {
                return this.table[keyHash][i];
            }
        }

        return null;
    }

    delete(key) {
        const keyHash = hash(key);

        if(!this.table[keyHash]) {
            return null;
        }

        this.table[keyHash].splice(this.table[keyHash].indexOf(key));
    }
}

module.exports = HashTable;
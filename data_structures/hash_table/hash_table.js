class HashTable {
  constructor(size) {
    this.data = new Array(size);
    this.size = 0;
  }

  _hash(key) {
    let sum = 0;

    for (let i = 0; i < key.length; i++) {
      sum += key.charCodeAt(i);
    }

    return sum % this.data.length;
  }

  set(key, value) {
    const address = this._hash(key);

    if (!this.data[address]) {
      this.data[address] = [];
    }

    if (this.data[address].length > 0) {
      for (let i = 0; i < this.data[address].length; i++) {
        if (this.data[address][i][0] === key) {
          this.data[address][i][1] = value;
          return;
        }
      }
    }

    this.data[address].push([key, value]);
    this.size++;
  }

  get(key) {
    const address = this._hash(key);

    if (!this.data[address]) return false;

    if (this.data[address].length > 0) {
      for (let i = 0; i < this.data[address].length; i++) {
        if (this.data[address][i][0] === key) {
          return this.data[address][i];
        }
      }
    }
    return this.data[address];
  }

  remove(key) {
    const address = this._hash(key);

    if (!this.data[address]) {
      return false;
    }

    if (this.data[address].length > 1) {
      for (let i = 0; i < this.data[address].length; i++) {
        if (this.data[address][i][0] === key) {
          this.data[address].splice(i, 1);
          this.size--;
          return true;
        }
      }
    }
    this.data[address] = [];
    this.size--;
  }
}

const table = new HashTable(100);

table.set("Spain", 10);
// table.set("ǻ", 34);
table.set("bla", 104);
table.remove("bla");

console.log(table.get("Spain"));

console.log(table);

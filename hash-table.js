class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }

  _hash(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    return hash;
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.dataMap[index]) this.dataMap[index] = [];

    this.dataMap[index].push([key, value]);
    return this;
  }

  get(key) {
    const index = this._hash(key);
    if (!this.dataMap[index]) return undefined;

    for (let i = 0; i < this.data[index].length; i++) {
      if (this.dataMap[index][i][0] === key) {
        return this.dataMap[index][i][1];
      }
    }

    return this.dataMap[index];
  }

  keys() {
    const allKeys = [];

    for (let i = 0; this.data.length; i++) {
      if (this.dataMap[i]) {
        for (let j = 0; this.data.length; j++) {
          allKeys.push(this.dataMap[i][j][0]);
        }
      }
    }

    return allKeys;
  }
}

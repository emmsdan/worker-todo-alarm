const storage  =  {
    "generalDB" : "emmsdan-store",
    "dataBase" : "emmsdan-worker"
}

class idbStorage {

  constructor() {
    this.dbName=storage.dataBase;
    this.version=1;
    return new Promise((resolve, reject) => {
      if (!window.indexedDB) {
        const message = "This browser doesn't support a stable version of IndexedDB. This app won't work completely offline.";
        throw new Error(message);
      }
      const request = window.indexedDB.open(this.dbName, version);
      request.addEventListener('error', (error) => {reject(error)});
      request.addEventListener('success', (event) => {
        console.log(this.dbName, 'IndexedDB opened');
        const { target: { result } } = event;
        resolve(result);
      })
      request.addEventListener('upgradeneeded', (event) => {
        console.log('upgrade done', event)
        const { target: { result } } = event;
        const db = result;
        db.createObjectStore(storage[generalDB], { keyPath: 'id' });
      });
    })
  }

  static storeData(key, value) {
    const db = this.dbName;

    let dates = getDate();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([storage[generalDB]], "readwrite");
      transaction.addEventListener('complete', () => {
        console.log('Saving complete');
      });
      const objectStore = transaction.objectStore(storage[generalDB]);
      const request = objectStore.put({ id: key, value, dates });
      request.addEventListener('error', (event) => {
        reject(event.error)
      });
      request.addEventListener('success', (event) => {
        console.log(event.target.result)
        resolve(event.target.result === key)
      });
    });
  }

  static deleteData(key) {
    const db = this.dbName;
    return new Promise((resolve, reject) => {
      const request = db.transaction([storage[generalDB]], 'readwrite')
      .objectStore(storage[generalDB])
      .delete(key);
      request.addEventListener('error',(event) => {reject(event.error)});
      request.addEventListener('success', () => {resolve(true)});
    });
  }

  static getData(key) {
    const db = this.dbName;
    console.log(key);
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storage[generalDB]);
      const objectStore = transaction.objectStore(storage[generalDB]);
      const request = objectStore.get(key);

      request.addEventListener('error', (event) => {
        reject(event.error)
      });

      request.addEventListener('success', (event) => {
        resolve(event.target.result)
      });

    });
  }
}

class localStorage {
  constructor (item, value) {
    localStorage.setItem(item, value);
  }
  store (item, value) {
    localStorage.setItem(item, value);
  }
  select (item) {
    localStorage.getItem(item);
  }
  delete (item) {
    localStorage.getItem(item);
  }
}
// explicitly export class to global scope
window.idbStorage = idbStorage;
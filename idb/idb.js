'use strict';

if (!window.indexedDB) {
    alert("Your browser does not support IndexedDB.")
} else {
    var db;
    var request = window.indexedDB.open("CoJamTV");
    const customerData = [
        { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
        { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" }
    ];

    request.onerror = function(event) {
        logPrint('IDB: error', event);
    };
    // request.onsuccess = function(event) {
    //     logPrint('IDB: success');
    //     db = request.result;
    //     db.onerror = function(event) {
    //         alert("Database error", event);
    //     }
    // };
    request.onupgradeneeded = function(event) {
        db = event.target.result;
        var objectStore = db.createObjectStore("customers", { KeyPath: "ssn" });
        objectStore.createIndex("name", "name", { unique: false });
        objectStore.createIndex("email", "email", { unique: true });
        objectStore.transaction.oncomplete = function(event) {
            var customerObjectStore = db.transaction(["customers"], "readwrite").objectStore("customers");
            customerData.forEach(function(customer) {
                customerObjectStore.add(customer);
            });
        };
        console.log(request, db);
    }
    //console.log(request, db);
}
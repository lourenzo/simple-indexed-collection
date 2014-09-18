var IndexedCollection = require('./src/collection').IndexedCollection;
rideRequests=new IndexedCollection;
rideRequests.add({
    id: '123',
    ride: {
        id: '12',
    }
})
rideRequests.add({
    id: '321',
    ride: {
        id: '12',
    }
})
rideRequests.add({
    id: '321',
    ride: {
        id: '12',
    }
})
rideRequests.edit('123', {ride:{amount: 10.5}});
console.log(JSON.stringify(rideRequests, null, ' '));
rideRequests.remove('123');
console.log('--------- SEPARATOR -----------')
console.log(JSON.stringify(rideRequests, null, ' '));

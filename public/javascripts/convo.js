// function parseURL(url) {
//   var parser = document.createElement('a'),
//       searchObject = {},
//       queries, split, i;
//   // Let the browser do the work
//   parser.href = url;
//   // Convert query string to object
//   queries = parser.search.replace(/^\?/, '').split('&');
//   for( i = 0; i < queries.length; i++ ) {
//       split = queries[i].split('=');
//       searchObject[split[0]] = split[1];
//   }
//   return {
//       protocol: parser.protocol,
//       host: parser.host,
//       hostname: parser.hostname,
//       port: parser.port,
//       pathname: parser.pathname,
//       search: parser.search,
//       searchObject: searchObject,
//       hash: parser.hash
//   };
// }
// parseURL();
// const queryString = window.location.search;
// console.log(queryString);
var pathname = window.location.pathname;
var botui = new BotUI('api-bot');
// var id = 'ayush'
var socket = io.connect('http://localhost:8010');
// io.on('connect', function() {
//   return console.log('socket' + this.socket.sessionid);
// });
// read the BotUI docs : https://docs.botui.org/
// botui.message.add({
//   delay: 1000,
//   loading: true,
//   content:'- [Shore](www.shore.com)^'
// });
botui.message.add({
  content: 'Dear Customer',
  loading: true,
  delay: 1500,

}).then(() =>{
  return botui.message.add({
    content: 'Welcome to <b><i>Bajaj Finserv Managed Care Solution.</b></i> 😊',
    loading: true,
    delay:2000,
  })
  }).then(() => {
    return botui.action.button({ // let user do something
      delay: 1000,
      action: [
        {
          icon: 'check',
          text: 'Proceed',
          value: pathname
        }
      ]
    })
  }).then(function (res) {
    socket.emit('fromClient', { client : res.value }); // sends the message typed to server
      console.log(res.value); // will print whatever was typed in the field.
    }).then(function () {
      socket.on('fromServer', function (data) { // receiveing a reply from server.
        console.log(data.server);
      //  newMessage(data.server);
     //  addAction();
      //  link();
    })
  }).then(() =>{
    return botui.message.add({
      content: 'As you are an esteemed client of Bajaj Finserv group of companies, we would like to offer you a Health Package provided by Bajaj Finserv Health Limited.',
      loading: true,
      delay:2000,
    })
    }).then(() =>{
      return botui.message.add({
        type:'embed',
        content: '',
        loading: true,
        delay:2000,
      })
      }).then(() =>{
      return botui.message.add({
        content: 'We bring you <b>"Health Secure Package"</b> for you and your family',
        loading: true,
        delay:2000,
      })
      }).then(() => {
        return botui.message.add({
          content: 'Health Secure Package provides the following benefits:',
          loading: true,
          delay:2000,
        }).then(() => {
          return botui.message.add({
            content: '1) <b><i>Cashless OPD Benefits</b></i>',
            loading: true,
            delay:2000,
          })
          
  }).then(() => {
    return botui.message.add({
      content: '2) <b><i>Health Insurance</b></i>',
      loading: true,
      delay:2000,
    })
    
}).then(() => {
  return botui.message.add({
    content: '3) <b><i>Set of diagnostic tests</b></i>',
    loading: true,
    delay:2000,
  })
  
}).then(() => {
  return botui.message.add({
    content: '4) <b><i>Health application</b></i>',
    loading: true,
    delay:2000,
  })
  
}).then(() => {
  return botui.message.add({
    content: '5) <b><i>A set of discounts on doctor consultations, labs, pharmacy, spectacles, free ambulance etc. at Ruby Hall Clinic.</b></i>',
    loading: true,
    delay:2000,
  })
  
}).then(() => {
  return botui.message.add({
    content: '6) <b><i>A set of Loyalties benefits</b></i> which includes Free dietician & physiotherapist consulation during IPD admission, one free travel medical kit and many more at Ruby Hall Clinic.',
    loading: true,
    delay:2000,
  })
  
}).then(() => {
  return botui.message.add({
    content: '<b>Please choose from below.</b>',
    loading: true,
    delay:1000,
  })
  
})
        
}).then(() => {
  return botui.action.button({ // let user do something
    delay: 1000,
    action: [
      {
        icon: 'check',
        text: 'Buy',
        value: 'buy'
      },
      {
        text: 'Know more',
        value: 'know_more'
      }
    ]
  })
}).then(function (res) {
  socket.emit('fromClient', { client : res.value }); // sends the message typed to server
    console.log(res.value); // will print whatever was typed in the field.
  }).then(function () {
    socket.on('fromServer', function (data) { // receiveing a reply from server.
      console.log(data.server);
      newMessage(data.server);
   //  addAction();
    //  link();
  })
}).then(() => {
  return botui.message.add({
    content: '<b>Thank you for interest. 😊 </b>',
    loading: false,
    delay:false,
  // }).then(function (res) {
  //   socket.emit('fromClient', { client : res.value }); // sends the message typed to server
  //     console.log(res.value); // will print whatever was typed in the field.
  //   }).then(function () {
  //     socket.on('fromServer', function (data) { // receiveing a reply from server.
  //       console.log(data.server);
  //       newMessage(data.server);
  //    //  addAction();
  //     //  link();
  //   })
  })
  
// }).then(() => {
//   return botui.message.add({
//     content: '<b>Please select the plan variant</b>',
//     loading: true,
//     delay:6000,
//   })
  
}).then(() => {
  return botui.action.button({ // let user do something
    loading:true,
    delay: 5000,
    action: [
      {
        text: 'Self/Spouse',
        value: 'Package1'
      },
      {
        text: 'Self/Spouse + 1 child',
        value: 'Package2'
      },
      {
        text: 'Self/Spouse + 2 child',
        value: 'Package3'
      },
      {
        text: 'Self/Spouse + 3 child',
        value: 'Package4'
      },
      {
        text: 'Self/Spouse + 4 child',
        value: 'Package5'
      }
    ]
  })
}).then(() => {
  return botui.message.add({
    content: '<b>Please select the sum insured amount</b>',
    loading: true,
    delay:2000,
  })
  
}).then(() => {
  return botui.action.button({ // let user do something
    delay: 1000,
    action: [
      {
        text: '5 lacs',
        value: '5lacs'
      },
      {
        text: '10 lacs',
        value: '10lacs'
      }
    ]
  })
}).then(() => {
  return botui.message.add({
    content: '<b>Thank you for choosing the plan. </b>',
    loading: true,
    delay:2000,
  })
  
}).then(() => {
  return botui.message.add({
    content: '<b>Kindly select </b>',
    loading: true,
    delay:2000,
  })
  
}).then(() => {
  return botui.action.button({ // let user do something
    delay: 1000,
    action: [
      {
        text: 'Pay now',
        value: 'PayNow'
      },
      {
        text: 'Pay later',
        value: 'PayLater'
      }
    ]
  })
}).then(function (res) {
  socket.emit('fromClient', { client : res.value }); // sends the message typed to server
    console.log(res.value); // will print whatever was typed in the field.
  }).then(function () {
    socket.on('fromServer', function (data) { // receiveing a reply from server.
     // console.log(data.server);
    //  newMessage(data.server);
     addAction();
    //  link();
//   })
// }).then(function (res) {
//   socket.emit('fromClient', { client : res.value }); // sends the message typed to server
//     console.log(res.value); // will print whatever was typed in the field.
//   }).then(function () {
//     socket.on('fromServer', function (data) { // receiveing a reply from server.
//       console.log(data.server);
//       newMessage(data.server);
//       newMessage();
   
//  }).then(() => {
//   return botui.action.button({ // let user do something
//     delay: 1000,
//     action: [
//       {
//         text: 'Package 1',
//         value: 'Package1'
//       },
//       {
//         text: 'Know more',
//         value: 'know_more'
//       }
//     ]
//   })
})
}).then(function (res) {
  socket.emit('fromClient', { client : res.value }); // sends the message typed to server
    console.log(res.value); // will print whatever was typed in the field.
  }).then(function () {
    socket.on('fromServer', function (data) { // receiveing a reply from server.
     // console.log(data.server);
     // newMessage1(data.server);
     addAction();
    //  link();
  })
});

function newMessage (response) {
  botui.message.add({
    loading: true,
    content: response,
    delay: 1000,
  })
}

function newMessage1 (response) {
  botui.message.add({
    loading: true,
    content:'Here is an image ![product image](https://example.com/image.png)',
    delay: 1500,
  })
}

function addAction () {
  botui.action.text({
    action: {
      placeholder: 'enter response...', 
    }
  }).then(function (res) {
    socket.emit('fromClient', { client : res.value });
    console.log('client response: ', res.value);
  })
}
// function link() {
// if(response == 'Thank you.') {
//   botui.action.add({
//     content:'- [Shore](www.shore.com)^'
//   })
// }
//   else{
//     addAction();
//   }
//   }




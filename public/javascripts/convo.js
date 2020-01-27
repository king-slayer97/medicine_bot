
var pathname = window.location.pathname;
var botui = new BotUI('api-bot');
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
  content: 'Dear Customer,',
  loading: true,
  delay: 1500,

}).then(() =>{
  return botui.message.add({
    content: 'Welcome to <b>Bajaj Finserv Managed Care Solution.</b> 😊',
    loading: true,
    delay:2000,
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
      type:'embed',
      content: '',
      loading: true,
      delay:2000,
    })
    }).then(() =>{
    return botui.message.add({
      content: 'As you are an esteemed client of Bajaj Finserv group of companies, we would like to offer you a Health Package provided by Bajaj Finserv Health Limited.',
      loading: true,
      delay:2000,
    })
    }).then(() => {
        return botui.message.add({
          content: 'Complete Health Secure Package provides the following benefits:',
          loading: true,
          delay:2000,
        }).then(() => {
          return botui.message.add({
            content: '<b>1) Cashless OPD Benefits at Ruby Hall Clinic</b>',
            loading: true,
            delay:2000,
          })
          
  }).then(() => {
    return botui.message.add({
      content: '<b>2) Health Insurance</b>',
      loading: true,
      delay:2000,
    })
    
}).then(() => {
  return botui.message.add({
    content: '<b>3) Comprehensive health check plan at Ruby Hall Clinic</b>',
    loading: true,
    delay:2000,
  })
  
}).then(() => {
  return botui.message.add({
    content: '<b>4) Mobile application to manage your health</b>',
    loading: true,
    delay:2000,
  })
  
}).then(() => {
  return botui.message.add({
    content: '<b>5) Unique card from Ruby Hall Clinic</b> provides you discounts on doctor consultations, labs, pharmacy, spectacles & amenities like free ambulance etc.</b>',
    loading: true,
    delay:2000,
  })
  
}).then(() => {
  return botui.message.add({
    content: '<b>6) A set of Loyalties benefits</b> which includes Free dietician & physiotherapist consulation during IPD admission, one free travel medical kit and many more at Ruby Hall Clinic.',
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
        value: 'purchase for' + pathname
      },
      {
        icon: 'hand-paper-o',
        text: 'Know more',
        value: 'know_more' + pathname
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
        value: 'Package1' + pathname
      },
      {
        text: 'Self/Spouse + 1 child',
        value: 'Package2' + pathname
      },
      {
        text: 'Self/Spouse + 2 child',
        value: 'Package3' + pathname
      },
      {
        text: 'Self/Spouse + 3 child',
        value: 'Package4' + pathname
      },
      {
        text: 'Self/Spouse + 4 child',
        value: 'Package5' + pathname
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
        value: '5L' + pathname
      },
      {
        text: '10 lacs',
        value: '10L' + pathname
      }
    ]
  })
}).then(function (res) {
  socket.emit('fromClient', { client : res.value }); // sends the message typed to server
    console.log(res.value);
    addAction(); // will print whatever was typed in the field.
  }).then(() => {
  return botui.message.add({
    content: '<b>Thank you for choosing the plan. </b>',
    loading: false,
    delay:false,
  }).then(() => {
    return botui.message.add({
      content: '<b>Our representative will contact you shortly!</b>',
      loading: false,
      delay:false,
    })
    
  }).then(() => {
    return botui.message.add({
      content: '<b>Meanwhile please help with below details</b>',
      loading: false,
      delay:false,
    })
    
  })
  
// }).then(function (res) {
//   socket.emit('fromClient', { client : res.value }); // sends the message typed to server
//     console.log(res.value); // will print whatever was typed in the field.
  }).then(function () {
    socket.on('fromServer', function (data) { // receiveing a reply from server.
     // console.log(data.server);
    // newMessage(data.server);
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

// function newMessage1 (response) {
//   botui.message.add({
//     loading: true,
//     content:'Here is an image ![product image](https://example.com/image.png)',
//     delay: 1500,
//   })
// }

function addAction () {
  botui.action.text({
    action: {
      placeholder: 'enter response...', 
    }
  }).then(function (res) {
    socket.emit('fromClient', { client : res.value + pathname });
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




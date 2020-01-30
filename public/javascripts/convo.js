var botui = new BotUI('api-bot');
var socket = io.connect('http://localhost:8010');

botui.message.add({
  content: 'Dear Customer,',
  loading: true,
  delay: 1500,

}).then(() =>{
  return botui.message.add({
    content: 'Welcome to <b>BFHL Medicine Bot.</b> 😊',
    loading: true,
    delay:2000,
  })
  }).then(function (res) {
    socket.emit('fromClient', { client : res.value }); // sends the message typed to server
      console.log(res.value); // will print whatever was typed in the field.
      addAction();
    }).then(function () {
      socket.on('fromServer', function (data) { // receiveing a reply from server.
        console.log(data.server);
        newMessage(data.server);
        addAction();
        link();
    })
  })

function newMessage (response) {
  botui.message.add({
    loading: true,
    content: response,
    delay: 1000,
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


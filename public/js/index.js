var socket = io();

socket.on('connect', function (){
  console.log('Connected to server');

  socket.emit('createMessage',{
    from:'tukaram@gmail.com',
    text:'hey this is Tukaram'
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage',function (email) {
  console.log('New Message',email);
});

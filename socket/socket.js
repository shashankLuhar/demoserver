import net from "net";

export const socket_client =  (send_data)=>{
    //var net = require('net');
    var completed = false; 
    var client = new net.Socket();
    client.connect(8484, '127.0.0.1', function() {
        console.log('Connected');
        client.write(send_data);
    });

    client.on('data', function(data) {
        console.log('Received: ' + data);
        client.destroy(); // kill client after server's response
        completed = true;
    });
    
    return completed
}
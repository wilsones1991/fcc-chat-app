// This will be our server using web sockets

// This is the web socket library
const WebSocket = require('ws')
// Creating new "Web Socket Server" connected to port 8989
const wss = new WebSocket.Server({ port: 8989 })
// Keep list of users on the Server
const users = []

// Ok definitely don't know this entirely, but...
// This is our function to send data to the client. We are passing in two arguments - data and web socket. Web socket server apparently has a property called clients. I assume this is aan array of clients connected to the web socket server. We then loop through each client. If the client has an open websocket connection and client doesn't equal web socket (basically broadcast will send to everyone else besides the user who triggered the event)

// Then we send the data.
const broadcast = (data, ws) => {
    wss.clients.forEach( (client) => {
        if (client.readyState === WebSocket.OPEN && client !== ws ) {
            client.send(JSON.stringify(data))
        }
    })
}

//Web server sends different things depending on context

// As soon as a client connects, we're going to listen for the add user and add message events
wss.on("connection", (ws) => {
    let index
    // web server has received a message
    ws.on("message", (message) => {
        const data = JSON.parse(message)
        switch (data.type) {
            // Add user
            case "ADD_USER" : {
                // So this is adding the user to the server side list of users
                index = users.length
                users.push({ name: data.name, id: index + 1})
                ws.send(JSON.stringify({
                    type: "USERS_LIST",
                    users
                }))
                // Then issue a broadcast of updated user list to all the connected clients
                broadcast({
                    type: "USERS_LIST",
                    users
                }, ws)
                break
            }
            // Add message
            case "ADD_MESSAGE":
                // broadcast this to all connected users
                broadcast({
                    type: "ADD_MESSAGE",
                    message: data.message,
                    author: data.author
                }, ws)
                break
            default:
                break
        }
    })

    ws.on("close", () => {
        // Remove the user when they have closed the connection.
        users.splice(index, 1)
        // broadcast updated user list
        broadcast({
            type: "USERS_LIST",
            users
        }, ws)
    })
})

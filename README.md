Client/Server Time Offset Coding Challenge

The goal of this task is to find the difference in time between the clock on a server and the clock of the client machine connected to the server. You will need to setup a server on Digital Ocean/Amazon EC2 or whatever your preferred cloud provider is and install node js. Please install linux as the OS but feel free to use whatever distribution you are most comfortable with.

Please write your program using websockets. The basic idea is that the client will connect to the server at some web address and establish a websocket connection to the server. They will both exchange time information and figure out the time offset between them in milliseconds. Please use unix timestamps so the time exchange is done in UTC.

You can use whatever you want on the frontend but all it needs to show is a number in milliseconds. The important part is the code works not how it looks.

Please send the ip or web address of your server and a link to a github repo with your code when you are done.

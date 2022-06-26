
class Person {
  constructor(first, last, url) {
    this.first = first;
    this.last = last;
    this.url = url;
  }

  // 👇️ getter
  get name() {
    return `${this.first} ${this.last} ${this.url}`;
  }
}

const p1 = new Person('Elgilay', 'Hassan', 'https://github.com/gellanyhassan0');

// ✅ Use getter
//console.log(p1.name);



var http = require('http');  
//create a server object:  
  
http.createServer(function (req, res) {  

    res.write(p1.name + "\n"); //write name method a response to the client
    res.write(p1.first + "\n"); //write fisrt propertiy a response to the client
    res.write(p1.last + "\n"); //write last propertiy a response to the client
    res.write(p1.url + "\n");  //write url propertiy a response to the client

    res.end(); //end the response  
}).listen(5000); //the server object listens on port 5000   
  
// Console will print the message  
console.log('Server running at 5000');  

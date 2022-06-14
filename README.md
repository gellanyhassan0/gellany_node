# gellany_nodejs

# docker deploy
#/home/go/ = your path your already download git folder in it<br>
<code>docker image build -t gellany_node /home/go/gellany_node/code><br>
<code>docker run --publish 5000:5000 -it -d gellany_node</code><br>
<code>docker ps</code><br>
<code>docker exec -it 83ea954d9b5a node gellany_node.js 0.0.0.0:5000</code><br>

http://0.0.0.0:5000/
http://127.0.0.1:5000/

<code>docker stop f77d93571bcc</code><br>
<code>docker ps</code><br>

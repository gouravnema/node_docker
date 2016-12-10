# Node Docker
node application inside docker containter

-------------------------------------------------------------------

Packages Included
-----------------


1. Ubuntu 16.04.1 LTS
2. node 7.2.1
3. npm 3.10.10
4. curl 7.47.0
5. express app scaffold /home/webapp

Loading Application
-------------------
Place your node application in ./application folder and then build a new image as mentioned below.

Building Image
--------------
use . {current directory} to build image from current Dockerfile.

```
  docker build -t gouravnema/nodejs7:1.0 .
```

Running Docker Image
--------------------
run command below in terminal to ssh into the container
```
  docker run -p 80:8900 gouravnema/nodejs7
  docker run -p 80:8900 gouravnema/nodejs7 &  // in background  
```

where 80 is the host port and 8900 is container port for application as mentioned in EXPOSE of the Dockerfile

**Note : **  At times to run app on 80 port sudo permission is required.

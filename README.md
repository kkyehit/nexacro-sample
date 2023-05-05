default project directory : C:\Users\nexacro\Documents\tobesoft\nexacro N\projects


docker build -t nexacro-sample .
docker run --name mynginx -p 80:80 -d nexacro-sample
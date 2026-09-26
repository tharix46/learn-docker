# A Sample React Todo App With Multistage Docker Build

The application code is from **https://github.com/piyushsachdeva/todoapp-docker.git**

---

### Docker Commands Used

```bash
docker build -t react-app:V1 .

docker run -d -p 8080:8080 --name react-app react-app:V1

docker exec -it react-app sh

docker inspect react-app

docker logs react-app
```

---

### Accessing the Application

- Using curl

```bash
curl -v http://localhost:8080
```

- Using browser
  go to http://localhost:8080

---

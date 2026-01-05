# Node.js + Nginx + Redis

Source code is originally from the [awesome-compose](https://github.com/docker/awesome-compose/tree/master/nginx-nodejs-redis) GitHub repo.

The goal of this project is **hands-on learning and experimentation with Docker Compose**.

---

### Project Structure

```
├── README.md
├── compose.yaml
├── nginx
│   ├── Dockerfile
│   └── default.conf
└── web
    ├── Dockerfile
    ├── package-lock.json
    ├── package.json
    └── server.js
```

---

### Docker Commands Used

```bash
docker-compose up -d
docker-compose ps

docker network ls
docker inspect 08-compose-02_app-net

docker-compose down
```

---

### Accessing the Application

- Using curl:

```bash
curl -I http://localhost:80
curl -v http://localhost:80
```

- Using browser:
  go to http://localhost:80 and refresh multiple times to see the visit count increasing.

---

### Extra Notes

- Nginx is used as a **reverse proxy and load balancer** to distribute incoming requests to two Node.js application instances (web1 and web2).

- web1 and web2 are the names of the services **defined in compose.yaml** and are used by Nginx to route traffic.

- setting container names looks good on `docker ps` output but **bad for scaling** with `docker compose up --scale web1=3`

- Redis is used as an **in-memory data store** to keep track of the number of visits to the application.

---

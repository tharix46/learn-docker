# Getting started App From Docker

The application source code is from the getting started tutorial at [docker getting started app at GitHub](https://github.com/docker/getting-started-app)

---

### Docker Commands Used 

```bash
docker build -t tharix46/docker-getting-started:V1 .

# optional
docker push tharix46/docker-getting-started:V1
docker pull tharix46/docker-getting-started:V1

docker run -d --name getting-started-app -p 3000:3000 tharix46/docker-getting-started:V1

docker ps
```
---

### Accessing the Application
- Using curl:
```bash
curl -I http://localhost:3000
curl -v http://localhost:3000
```
- Using browser:
go to http://localhost:3000
---

### Executing commands inside the container

```bash
docker exec -it getting-started-app sh -c "uname -a"

docker exec -it getting-started-app sh
```
---

### CMD in the Dockerfile
`CMD ["node", "src/index.js"]` runs a Node.js application directly using the Node.js runtime.

Use when:
- You know the entry file
- Simpler services, small Express projects, basic backends
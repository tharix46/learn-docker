# Dockerize a Simple Python App

`Dockerfile` in this directory is used to containerize `hello.py`, a simple Python file. It will print "Hello, World!" when run.

---

### Docker Commands Used

- Build the Docker image:

```bash
docker build -t hello-py:V1 .
```

- List Docker images:

```bash
docker images
```

- Run the Docker container:

```bash
docker run --name hello-world-python hello-py:V1

docker run --rm --name hello-world-python hello-py

```

- Check container status:

```bash
docker ps -a
```

---

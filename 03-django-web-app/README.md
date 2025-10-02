# Dockerized Django Web Application

This directory contains a simple Django web application.

The application serves a basic webpage. The Dockerfile demonstrates how to set up a Django project within a Docker container.

Application source code is originally from [Abhishek Veeramalla's github](https://github.com/iam-veeramalla/Docker-Zero-to-Hero/tree/main/examples/python-web-app) and has been slightly modified for this example.

### Docker Commands Used

```bash
# build the Docker image
docker build -t django-app:V1 .

# verify the image is created
docker images

# run the Docker container
docker run -d --name django-app -p 8000:8000 django-app:V1
```

---

### Accessing the Application

Access the application in your web browser:
http://192.168.1.21:8000/demo/

Access the application using curl:
`curl 192.168.1.21:8000/demo/`

---

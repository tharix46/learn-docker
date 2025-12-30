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

### CMD in the Dockerfile

`CMD ["gunicorn", "--bind", "0.0.0.0:8000", "devops.wsgi:application"]` runs a production-grade web server for Python web apps (Django/Flask/FastAPI).

- devops → Django project folder (the one containing settings.py and wsgi.py)
- wsgi → module/file named wsgi.py (server entry point)
- application → variable inside wsgi.py that exposes the Django app to servers
- 0.0.0.0:8000 → Django doesn’t hardcode the port in files. You choose it when starting the server

Use when:

- Deploying Django/Flask/FastAPI to production
- Need concurrency, performance, stability

> Gunicorn is NOT included with Django. Install separately:
> `pip install gunicorn`.
> (In this example project, it is included in requirements.txt)

---

### WSGI

**WSGI** = Web Server Gateway Interface

A Python standard that lets web servers talk to Python web frameworks like Django. **Without WSGI, servers don’t know how to “speak Django”.**

---

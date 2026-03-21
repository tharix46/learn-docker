# Dockerized Django Web Application

This directory contains a simple Django web application.

The application serves a basic webpage. The Dockerfile demonstrates how to set up a Django project within a Docker container.

Application source code is originally from [Abhishek Veeramalla's github](https://github.com/iam-veeramalla/Docker-Zero-to-Hero/tree/main/examples/python-web-app) and has been slightly modified for this example.

---

### Directory Structure in Simple

- devops/ - the core of the Django project
- devops/devops/ - contains global settings for the entire project
- devops/devops/wsgi.py - Gunicorn (your web server) uses the wsgi.py file to start the application.
- devops/demo/ - represents the actual website functionality
- manage.py - Django's command-line utility for administrative tasks (migrate databases, create admin users)
- db.sqlite3: A lightweight, file-based database (not for production)

---

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

### Executing commands inside the container

```bash
# getting a bash shell inside the container as the default user in the Dockerfile (appuser)
docker exec -it django-app bash

# getting a bash shell inside the container as root user
docker exec -it -u root django-app bash
```

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

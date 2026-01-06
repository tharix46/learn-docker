# Dockerize a Simple MERN Stack Application

Source code is originally from the [Abhishek Veeramalla's GitHub](https://github.com/iam-veeramalla/MERN-docker-compose/tree/main) and has been slightly modified for this example.

The goal of this project is **hands-on learning and experimentation with dockerize a MERN app and Docker Compose**.

---

### Project Structure

```
├── README.md
├── backend
│   ├── Dockerfile
│   ├── db
│   │   └── connection.js
│   ├── package-lock.json
│   ├── package.json
│   ├── routes
│   │   └── record.js
│   └── server.js
├── compose.yaml
└── frontend
    ├── Dockerfile
    ├── cypress
    │   ├── fixtures
    │   ├── integration
    │   ├── plugins
    │   └── support
    ├── cypress.json
    ├── default.conf
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── public
    │   └── vite.svg
    ├── src
    │   ├── App.jsx
    │   ├── assets
    │   ├── components
    │   ├── config.js
    │   ├── index.css
    │   └── main.jsx
    ├── tailwind.config.js
    └── vite.config.js
```

---

### Docker Commands Used

```bash
docker-compose up -d --build
docker-compose ps
docker-compose logs -f

docker network ls
docker inspect 09-mern-app_mern-network

docker volume ls

docker-compose down -v
```

---

### Accessing the Application

Using browser:
go to http://localhost:80 to access the application.

---

### Extra Notes

- This is a simple **MERN stack application** that allows users to **create, read, update, and delete records of employees.**

- The **backend** is built using **Node.js, Express, and MongoDB**, while the **frontend** is built using **React and Vite.**

- The backend and database run in **node.js and MongoDB containers** respectively, while the frontend runs in an **Nginx container.**

- Docker Compose is used to orchestrate the multi-container application, making it easy to set up and manage the entire stack with a single command.

- The frontend communicates with the backend using relative URLs, allowing seamless interaction between the two services within the Docker network.

- **Only** the **frontend** service **exposes a port** to the host machine (port 80). The other services (backend, mongodb) communicate internally within the Docker network. (no access from host)

# WordPress + MySQL using Docker Compose

This setup runs **WordPress** with a **MySQL** database using Docker Compose.  
Data is persisted using **named Docker volumes**.

---

### Services Overview

### 1. WordPress

- Image: `wordpress`
- Port: `8000 → 80`
- Connects to MySQL via internal Docker network

### 2. MySQL

- Image: `mysql:8.0`
- Database: `wordpress`
- Data persisted in a named volume

---

### Docker Commands Used

```bash
docker compose up -d
docker compose ps
docker ps

docker compose logs -f
docker compose logs wordpress
docker compose logs mysql

docker network ls
docker volume ls

docker compose down --help
docker compose down -v
```

---

### Accessing WordPress Site

- Using browser:
  go to http://localhost:8000

- Using curl:
  `curl -I http://localhost:8000`

---

# WordPress + MySQL using Docker Compose

This setup runs **WordPress** with a **MySQL 5.7** database using Docker Compose.  
Data is persisted using a **named Docker volume**.

---

### Services Overview

### 1. WordPress

- Image: `wordpress`
- Port: `8001 → 80`
- Connects to MySQL via internal Docker network
- Restarts automatically unless stopped

### 2. MySQL

- Image: `mysql:5.7`
- Database: `wordpress`
- Uses root credentials (⚠️ OK for local testing only)
- Data persisted in a named volume

---

### Docker Commands Used

```bash
docker-compose up -d
docker-compose ps
docker ps

docker compose logs wordpress
docker compose logs mysql

docker compose down
```

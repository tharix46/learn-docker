# WordPress + MySQL Using Docker Compose

This setup runs **WordPress** with a **MySQL** database using Docker Compose.  
Data is persisted using **named Docker volumes**.

---

### Services Overview

### 1. WordPress

- Image: `wordpress`
- Port: `8000 → 80`
- Connects to MySQL via internal Docker network
- uses environment variables and secrets to configure database connection

### 2. MySQL

- Image: `mysql:8.0`
- Database: `wordpress`
- Data persisted in a named volume
- uses environment variables and secrets to configure database connection with wordpress service

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

### Secrets Used

`./mysql_wp_password.txt` and `./mysql_root_password.txt` contain the passwords for the MySQL user and root user respectively.

These files are referenced in the `compose.yml` and not committed to version control for security reasons.

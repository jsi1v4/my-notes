# PostgreSQL

> #ref: [https://www.postgresql.org/docs/](https://www.postgresql.org/docs/)

## Installing using Docker [#ref](https://hub.docker.com/_/postgres/)

Step 1: create a postgres bridge network **_database-network_**

```
  docker network create database-network
```

Step 2: create a postgres container **_container-postgresdb_**

```
  docker run  --detach \
    --network database-network \
    --name container-postgresdb \
    --publish 5432:5432 \
    --env POSTGRES_USER=postgres \
    --env POSTGRES_PASSWORD=admin \
      postgres:12.1
```

Step 3: create a pgadm container **_container-pgadm_**

```
  docker run --detach \
    --network database-network \
    --name container-pgadm \
    --publish 5050:80 \
    --env PGADMIN_DEFAULT_EMAIL=test@test.com \
    --env PGADMIN_DEFAULT_PASSWORD=test \
      dpage/pgadmin4
```

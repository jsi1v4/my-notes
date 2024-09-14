# Roles

### Create role

```sql
CREATE ROLE services;
```

### Allowing connect to database

```sql
GRANT CONNECT ON DATABASE testdb TO services;
```

### Allowing login to database

```sql
ALTER ROLE services WITH LOGIN;
```

### Grant all privileges

```sql
GRANT ALL ON SCHEMA public TO services;
```

### Revoke all privileges

```sql
REVOKE ALL ON SCHEMA public FROM services;
```

### Grant all privileges for tables

```sql
GRANT ALL ON ALL TABLES IN SCHEMA public TO services;
```

### Revoke specific table privileges

```sql
REVOKE TRUNCATE ON tablename FROM services;
```

### Auto select in schema

```sql
ALTER USER services SET search_path = dbo, public;
```

### Breach Me

Run with

```sh
docker-compose up --build -d
```

Create Schema

```sh
java -jar tools/scalardb-schema-loader-3.12.3.jar --config backend/src/main/resources/database.properties --coordinator -f tools/schema/schema.json
```
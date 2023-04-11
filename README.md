## Node Version: `v14`
---
## API Docs

**Endpoint:** `/api/register`
**Payload:**
```json
{
	"name": "Dev Test",
	"email": "dev@test.com",
	"password": "12345678"
}
```

**Endpoint:** `/api/login`
**Payload:**
```json
{
	"email": "dev@test.com",
	"password": "12345678",
	"remember": true|false
}
```
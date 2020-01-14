# Labs Service

Labs service is a micro-service to manage customer data.

I approached like this is a API consumed by other internal applications, so I created a admin route to authenticate.

I used express as my http abstraction, mongoDB as my database and jest for my unit tests.

To understand the flux of the requests you can go directly to [/routers](src/routers) folder and check the index.js for each endpoint.

## How to run

### Docker (You must have docker and docker compose to run.)

On unix systems you can simply run:
```
$ make
```
All systems:

```
$ docker-compose build
$ docker-compose up
```

### Locally (You must have node.js installed and mongoDB running on port 27017)
All systems:
```bash
$ npm i --production
$ npm start
```
## How to test
Unit tests:
```bash
$ npm i
$ npm run test
```

Coverage:
```bash
$ npm i
$ npm run cover
```
# Routes
You can get the postman collection on this link: [postman collection](https://www.getpostman.com/collections/8b29d5f3ccda8d0007df)
## Admin Routes
### Admin generate token
#### POST: /admin/login
Payload body: (This example works on test environment)
```(json)
{
	"username": "admin",
	"password": "admin_login"
}
```
Return (http code 200):
```(json)
{
    "token": "${your_token_here}"
}
```

### Create admin
#### POST: /admin (Authenticated route)
Payload body:
```(json)
{
	"username": "admin",
	"password": "admin_login"
}
```
Return (http code 201)

## Customer Routes
### Create customer
#### POST: /customer (Authenticated route)
Payload body:
```(json)
{
	"consumerName": "testing",
	"consumerUsername": "test",
	"consumerPassword": "123"
}
```
Return (http code 201):
```(json)
{
    "customerPublicID": "ca5deec5-c9f9-4fb8-bd18-087510a8f6ab"
}
```
### Retrieve customer (Authenticated route)
#### GET: /customer/:customerPublicID
Only requires customerPublicID on URL params

Return (http code 200):
```(json)
{
    "customerPublicID": "ca5deec5-c9f9-4fb8-bd18-087510a8f6ab",
    "customerName": "gabriel bolzi",
    "customerEmail": "gabriel03@hotmail.com",
    "favoriteProducts": [
        {
            "price": 1699,
            "image": "http://challenge-api.luizalabs.com/images/1bf0f365-fbdd-4e21-9786-da459d78dd1f.jpg",
            "id": "1bf0f365-fbdd-4e21-9786-da459d78dd1f",
            "title": "Cadeira para Auto Iseos Bébé Confort Earth Brown"
        }
    ]
}
```
### Update customer (Authenticated route)
#### PUT: /customer/:customerPublicID
Payload body (only require one):
```(json)
{
	"customerName": "Gabriel B",
	"customerEmail": "testing@email.com"
}
```
Return (http code 204)
### Delete customer (Authenticated route)
#### DELETE: /customer/:customerPublicID
Only requires customerPublicID on URL params

Return (http code 204)
## Authenticating routes
Add this parameter to your request header
Payload header:
```(json)
{
	"Authorization": "Bearer ${token retrieved from /admin/login}"
}
```

Any questions you can send me on: gabriel03899@hotmail.com
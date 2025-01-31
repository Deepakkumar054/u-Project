# API Documentation

## User Registration

### POST /users/register

Register a new user in the system.

#### Request

```json
{
  "name": "string",
  "email": "string",
  "password": "string"
}
```

#### Request Parameters

| Parameter | Type   | Required | Description                     |
|-----------|--------|----------|---------------------------------|
| name      | string | Yes      | User's full name               |
| email     | string | Yes      | User's email address           |
| password  | string | Yes      | User's password (min 6 chars)  |

#### Response Codes

| Status Code | Description                                    |
|------------|------------------------------------------------|
| 201        | User successfully registered                    |
| 400        | Bad request - Invalid input data               |
| 409        | Conflict - Email already exists                |
| 500        | Internal server error                          |

#### Success Response

```json
{
  "success": true,
  "message": "User registered successfully",
  "user": {
    "id": "string",
    "name": "string",
    "email": "string"
  }
}
```

#### Error Response

```json
{
  "success": false,
  "message": "Error message description"
}
```

#### Example

```bash
curl -X POST http://localhost:5000/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }'
```

## User Login

### POST /users/login

Authenticate a user and retrieve an access token.

#### Request

```json
{
  "email": "string",
  "password": "string"
}
```

#### Request Parameters

| Parameter | Type   | Required | Description                    |
|-----------|--------|----------|--------------------------------|
| email     | string | Yes      | User's email address          |
| password  | string | Yes      | User's password               |

#### Response Codes

| Status Code | Description                                    |
|------------|------------------------------------------------|
| 200        | Login successful                               |
| 400        | Bad request - Invalid input data               |
| 401        | Unauthorized - Invalid credentials             |
| 500        | Internal server error                          |

#### Success Response

```json
{
  "token": "string",
  "user": {
    "id": "string",
    "name": "string",
    "email": "string"
  }
}
```

#### Error Response

```json
{
  "success": false,
  "message": "Invalid email or Password"
}
```

#### Example

```bash
curl -X POST http://localhost:5000/users/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

## Get User Profile

### GET /users/profile

Retrieve the authenticated user's profile information.

#### Request Headers

| Header        | Type   | Required | Description                    |
|---------------|--------|----------|--------------------------------|
| Authorization | string | Yes      | Bearer {token}                 |

#### Response Codes

| Status Code | Description                                    |
|------------|------------------------------------------------|
| 200        | Profile retrieved successfully                  |
| 401        | Unauthorized - Invalid or missing token         |
| 500        | Internal server error                          |

#### Success Response

```json
{
  "user": {
    "id": "string",
    "firstname": "string",
    "lastname": "string",
    "email": "string"
  }
}
```

#### Example

```bash
curl -X GET http://localhost:5000/users/profile \
  -H "Authorization: Bearer {token}"
```

## User Logout

### GET /users/logout

Logout the currently authenticated user and invalidate their token.

#### Request Headers

| Header        | Type   | Required | Description                    |
|---------------|--------|----------|--------------------------------|
| Authorization | string | Yes      | Bearer {token}                 |

#### Response Codes

| Status Code | Description                                    |
|------------|------------------------------------------------|
| 200        | Logged out successfully                         |
| 401        | Unauthorized - Invalid or missing token         |
| 500        | Internal server error                          |

#### Success Response

```json
{
  "message": "logged out successfully"
}
```

#### Example

```bash
curl -X GET http://localhost:5000/users/logout \
  -H "Authorization: Bearer {token}"
```

## Captain Routes

### POST /captains/register

Register a new captain in the system.

#### Request Body
```json
{
  "fullname": {
    "firstname": "string", // minimum 3 characters
    "lastname": "string"   // optional
  },
  "email": "string",      // must be valid email format
  "password": "string",   // minimum 6 characters
  "vehicle": {
    "color": "string",    // minimum 3 characters
    "plate": "string",    // minimum 3 characters
    "capacity": 4,        // minimum value: 1
    "vehicleType": "car"  // must be one of: "car", "motorcycle", "auto"
  }
}
```

#### Response
```json
{
  "token": "jwt_token_string",
  "captain": {
    "id": "captain_id",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "vehicle": {
      "color": "string",
      "plate": "string",
      "capacity": "number",
      "vehicleType": "string"
    }
  }
}
```

### POST /captains/login

Login for existing captains.

#### Request Body
```json
{
  "email": "string",    // must be valid email
  "password": "string"  // minimum 6 characters
}
```

#### Response
```json
{
  "token": "jwt_token_string",
  "captain": {
    "id": "captain_id",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "vehicle": {
      "color": "string",
      "plate": "string",
      "capacity": "number",
      "vehicleType": "string"
    }
  }
}
```

### GET /captains/profile

Get the authenticated captain's profile.

#### Headers
```json
{
  "Authorization": "Bearer jwt_token_string"
}
```

#### Response
```json
{
  "captain": {
    "id": "captain_id",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "vehicle": {
      "color": "string",
      "plate": "string",
      "capacity": "number",
      "vehicleType": "string"
    }
  }
}
```

### GET /captains/logout

Logout the currently authenticated captain.

#### Headers
```json
{
  "Authorization": "Bearer jwt_token_string"
}
```

#### Response
```json
{
  "message": "Logout successfully"
}
```

#### Common Response Codes

| Status Code | Description                                    |
|------------|------------------------------------------------|
| 200        | Success (for login, profile, logout)           |
| 201        | Created (for registration)                     |
| 400        | Bad Request - Invalid input                    |
| 401        | Unauthorized - Invalid credentials             |
| 403        | Forbidden - Invalid token                      |
| 500        | Internal Server Error                          |

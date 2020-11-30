# Login

Used to collect a Token for a registered User.

**URL** : `/api/user/login`

**Method** : `POST`

**Auth required** : NO

**Data constraints**

```json
{
  "username": "[username]",
  "password": "[password]"
}
```

**Data example**

```json
{
  "username": "authuser",
  "password": "abcd1234"
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "username": "smtg",
  "token": "eyJhbGciOiJIUzI1NiIsInI6MYSYYfefdgsyeyey"
}
```

## Error Response

**Condition** : If 'username' or 'password' is not present.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
  "message": "Username and password are required to login"
}
```

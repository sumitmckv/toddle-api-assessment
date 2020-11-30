## Add Question

Used to add question and get questions.

**URL** : `/api/question`

**Method** : `POST`

**Auth required** : YES

**Data constraints**

```json
{
  "name": "[question name required]",
  "description": "[question description, not required]"
}
```

**Data example**

```json
{
  "name": "test survey question 2",
  "description": "test survey question description 2"
}
```

### Success Response

**Code** : `201 Created`

**Content example**

```json
[
  {
    "id": "b357a9b4-927f-44c9-968e-c268427385c2",
    "createdAt": "2020-11-30T06:49:08.630Z",
    "updatedAt": "2020-11-30T06:49:08.630Z"
  }
]
```

### Error Response

**Condition** : If 'question name' is not present.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
  "message": "Question name is required"
}
```

## GET Questions

Used to get all questions.

**URL** : `/api/question`

**Method** : `GET`

**Auth required** : YES

### Success Response

**Code** : `200 OK`

**Content example**

```json
[
  {
    "id": "ac8cad27-17e0-4de7-8f7e-6d807da6741a",
    "createdAt": "2020-11-30T06:22:24.063Z",
    "updatedAt": "2020-11-30T06:22:24.063Z",
    "name": "test survey question 1",
    "description": null
  },
  {
    "id": "ae4d4d38-2dba-40e1-98ac-6e6f85571d22",
    "createdAt": "2020-11-30T06:23:07.813Z",
    "updatedAt": "2020-11-30T06:23:07.813Z",
    "name": "test survey question 2",
    "description": "test survey question description 2"
  }
]
```

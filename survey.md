## Add Survey

Used to add question and get questions.

**URL** : `/api/survey`

**Method** : `POST`

**Auth required** : YES

**Data constraints**

```json
{
  "name": "[survey name]",
  "description": "[survey description, not required]",
  "questions": ["question_id_1", "question_id_2"]
}
```

**Data example**

```json
{
  "name": "Test survey 1",
  "description": "Test survey description 1",
  "questions": ["ac8cad27-17e0-4de7-8f7e-6d807da6741a", "ae4d4d38-2dba-40e1-98ac-6e6f85571d22"]
}
```

### Success Response

**Code** : `201 Created`

**Content example**

```json
[
  {
    "id": "ac97641d-ec72-438b-9ad5-6bca9feb3be7",
    "createdAt": "2020-11-30T06:56:53.734Z",
    "updatedAt": "2020-11-30T06:56:53.734Z",
    "questions": ["ac8cad27-17e0-4de7-8f7e-6d807da6741a", "ae4d4d38-2dba-40e1-98ac-6e6f85571d22"]
  }
]
```

### Error Response

**Condition** : If 'survey name' is not present.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
  "message": "Survey name is required"
}
```

**Condition** : If 'survey questions' is not present.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
  "message": "Survey questions are required"
}
```

## GET All Survey

Used to get all survey.

**URL** : `/api/survey`

**Method** : `GET`

**Auth required** : YES

### Success Response

**Code** : `200 OK`

**Content example**

```json
[
  {
    "id": "6adce593-a9f1-4fb1-b8f8-4c36ea169ea7",
    "createdAt": "2020-11-30T06:25:23.447Z",
    "updatedAt": "2020-11-30T06:25:23.447Z",
    "name": "Test survey 1",
    "description": "Test survey description 1",
    "questions": ["ac8cad27-17e0-4de7-8f7e-6d807da6741a", "ae4d4d38-2dba-40e1-98ac-6e6f85571d22"]
  }
]
```

## Take Survey

Used to add question and get questions.

**URL** : `/api/survey/take`

**Method** : `POST`

**Auth required** : YES

**Data constraints**

```json
{
  "surveyId": "[survey id]",
  "response": [
    {
      "questionId": "[question_id_1]",
      "answer": ["boolean"]
    }
  ]
}
```

**Data example**

```json
{
  "surveyId": "6adce593-a9f1-4fb1-b8f8-4c36ea169ea7",
  "response": [
    {
      "questionId": "ac8cad27-17e0-4de7-8f7e-6d807da6741a",
      "answer": true
    },
    {
      "questionId": "ae4d4d38-2dba-40e1-98ac-6e6f85571d22",
      "answer": false
    }
  ]
}
```

### Success Response

**Code** : `201 Created`

**Content example**

```json
{
  "message": "Survey completed"
}
```

### Error Response

**Condition** : If 'survey id' is not present.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
  "message": "surveyId is required"
}
```

**Condition** : If 'survey response' is not present.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
  "message": "survey user response are required"
}
```

## Survey Result

Used to get all survey.

**URL** : `/api/survey/result/${surveyId}`

**Example**: `/api/survey/result/6adce593-a9f1-4fb1-b8f8-4c36ea169ea7`

**Method** : `GET`

**Auth required** : YES

### Success Response

**Code** : `200 OK`

**Content example**

```json
[
  {
    "id": "b760a907-c2e7-4cde-a22a-a1712d481ee6",
    "createdAt": "2020-11-30T06:29:50.481Z",
    "updatedAt": "2020-11-30T06:29:50.481Z",
    "username": "smtg",
    "surveyId": "6adce593-a9f1-4fb1-b8f8-4c36ea169ea7",
    "questionId": "ae4d4d38-2dba-40e1-98ac-6e6f85571d22",
    "answer": false
  },
  {
    "id": "80b90b3c-5c5e-4392-8b7a-5bddcf7ba56f",
    "createdAt": "2020-11-30T06:29:50.482Z",
    "updatedAt": "2020-11-30T06:29:50.482Z",
    "username": "smtg",
    "surveyId": "6adce593-a9f1-4fb1-b8f8-4c36ea169ea7",
    "questionId": "ac8cad27-17e0-4de7-8f7e-6d807da6741a",
    "answer": true
  }
]
```

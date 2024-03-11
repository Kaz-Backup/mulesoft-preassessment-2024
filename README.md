To run application: `npm run start`.

## API Endpoints

### Message Echo

`GET /echo`

This returns the message (optional) sent. If message is undefined, a "Hello world!" is returned.


**Request Payload**
```json
{
    "message": "<string>"
}
```

**Response Payload**
```json
{
    "message": "<string>"
}
```

### Sum of Two Numbers

`GET /sum`

This returns the sum of two numbers. This requires that the two numbers are not empty and are numeric (allows strings that are coercible to numbers, e.g. `"5" -> 5`).


**Request Payload**
```json
{
    "num1": "<string>" | <number>,
    "num2": "<string>" | <number>
}
```

**Response Payload**
```json
{
    "sum": <number>
}
```
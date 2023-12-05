# Fairy Tale Stories API

This API allows you to manage and retrieve fairy tale stories. Below are the available endpoints and their functionalities.

## Endpoints

```
https://fairy-tale-h8ekmey95-siemhong.vercel.app/
```

### Get All Fairy Tales

```
GET /api/fairytales
```

Example: https://fairy-tale-h8ekmey95-siemhong.vercel.app/api/fairytales

Returns a list of all fairy tales.

### Get a Single Fairy Tale

```
GET /api/fairytales/{id}
```

Example: https://fairy-tale-h8ekmey95-siemhong.vercel.app/api/fairytales/0001

Returns a single fairy tale by ID.

### Filter Fairy Tales by Age

```
GET /api/fairytales/filterByAge/{age}
```

Example: https://fairy-tale-h8ekmey95-siemhong.vercel.app/api/fairytales/filterByAge/3-7

Returns a filtered list of fairy tales by age range. The age parameter can take values like "3-7", "2-8", or "All".

### Sort Fairy Tales by Title(order: 'asc' or 'desc')

```
GET /api/fairytales/sortByTitle/{order}
```

https://fairy-tale-h8ekmey95-siemhong.vercel.app/api/fairytales/sortByTitle/asc

Returns a sorted list of fairy tales by title (ascending or descending).

### Sort Fairy Tales by Created Date

```
GET /api/fairytales/sortByCreatedAt/{order}
```

https://fairy-tale-h8ekmey95-siemhong.vercel.app/api/fairytales/sortByCreatedAt/asc

Returns a sorted list of fairy tales by created date (ascending or descending).

### Usage

Make requests to the respective endpoints using your preferred HTTP client.

### Response Format

The API responses will be in JSON format and follow this structure:
```
{
  "id": "0008",
  "title": "The Little Mermaid",
  "author": "Hans Christian Andersen",
  "created_at": "1837-01-01T00:00:00.000Z",
  "image": "./images/The Little Mermaid.jpeg",
  "audio": "./audios/កនជរកទង  Three Little Pigs in Khmer   Khmer Fairy Tales.mp3",
  "age": "All",
  "summary": "The Little Mermaid sacrifices her voice for love, longing to join the human world."
}
```

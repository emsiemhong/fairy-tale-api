# Fairy Tale Stories API

This API allows you to manage and retrieve fairy tale stories. Below are the available endpoints and their functionalities.

## Endpoints

```
https://fairy-tale-api.vercel.app/
```

### Get All Fairy Tales

```
GET /api/fairytales
```

Example: https://fairy-tale-api.vercel.app/api/fairytales

Returns a list of all fairy tales.

### Get a Single Fairy Tale

```
GET /api/fairytales/{id}
```

Example: https://fairy-tale-api.vercel.app/api/fairytales/0001

Returns a single fairy tale by ID.

### Filter Fairy Tales by Age

```
GET /api/fairytales/filterByAge/{age}
```

Example: https://fairy-tale-api.vercel.app/api/fairytales/filterByAge/3-7

Returns a filtered list of fairy tales by age range. The age parameter can take values like "3-7", "2-8", or "All".

### Sort Fairy Tales by Title(order: 'asc' or 'desc')

```
GET /api/fairytales/sortByTitle/{order}
```

https://fairy-tale-api.vercel.app/api/fairytales/sortByTitle/asc

Returns a sorted list of fairy tales by title (ascending or descending).

### Sort Fairy Tales by Created Date

```
GET /api/fairytales/sortByCreatedAt/{order}
```

https://fairy-tale-api.vercel.app/api/fairytales/sortByCreatedAt/asc

Returns a sorted list of fairy tales by created date (ascending or descending).

### Usage

Make requests to the respective endpoints using your preferred HTTP client.

### Response Format

The API responses will be in JSON format and follow this structure:
```
{
  "id": "0001",
  "title": "The Ugly Duckling",
  "author": "Hans Christian Andersen",
  "created_at": "1843-01-01",
  "image": "https://emsiemhong.github.io/fairy-tale-api/images/1.webp",
  "audio": "https://emsiemhong.github.io/fairy-tale-api/audios/កនជរកទង  Three Little Pigs in Khmer   Khmer Fairy Tales.mp3",
  "age": "0-3",
  "summary": "The Ugly Duckling is a story about a little bird that doesn't fit in with the rest of the ducks and other animals on the farm. He's teased and ostracized for being different until one day he discovers his true identity as a beautiful swan. It's a tale of self-discovery, acceptance, and the beauty of being true to oneself.",
  "description": "The Ugly Duckling is one of Hans Christian Andersen's most famous fairy tales. It teaches children the importance of kindness, empathy, and celebrating differences. The story has been adapted into various forms of media and continues to be cherished by readers of all ages. The Ugly Duckling is one of Hans Christian Andersen's most famous fairy tales. It teaches children the importance of kindness, empathy, and celebrating differences. The story has been adapted into various forms of media and continues to be cherished by readers of all ages. The Ugly Duckling is one of Hans Christian Andersen's most famous fairy tales. It teaches children the importance of kindness, empathy, and celebrating differences. The story has been adapted into various forms of media and continues to be cherished by readers of all ages."
}
```

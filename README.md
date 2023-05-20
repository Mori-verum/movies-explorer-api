# movies-explorer-api

К апи можно обратиться по адресу https://api.movie.stasy.nomoredomains.monster

`GET /users/me` - возвращает информацию о пользователе (email и имя)

`PATCH /users/me` - обновляет информацию о пользователе (email и имя)

`GET /movies` - возвращает все сохранённые текущим  пользователем фильмы

`POST /movies` - создаёт фильм с переданными в теле country, director, duration, year, description, image, trailer, nameRU, nameEN и thumbnail, movieId

`DELETE /movies/_id` - удаляет сохранённый фильм по id

`POST /signup` - создаёт пользователя с переданными в теле email, password и name

`POST /signin` - проверяет переданные в теле почту и пароль и возвращает JWT

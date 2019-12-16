# lamia_chan

## Project setup
```
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

## Api

http://localhost:8000/api/v1/

где http://localhost:8000 адрес сайта

### вывод всей манги:

http://localhost:8000/api/v1/manga/

```
[
    {
        "id": 4,
        "title": "Обещанный Неверленд",
        "description": "Эмма и ее друзья вели вполне счастливую сиротскую жизнь в приюте. Да, там жесткие правила, но зато смотритель добрый. Вот только почему детям  запрещено приближаться к воротам и забору?.. Иногда не известно... стоит ли узнавать правду, которая полностью переворачивает всю твою жизнь.",
        "preview_image_url": "https://imgcover.manga-chan.me/showfull_retina/uploads/posts/2019-05/thumbs/1558524715_plf6kfkv.jpg"
    },

    ...
]
```

где:

    id = первичный ключ (pk)

    title = Название манги

    description = Описание

    preview_image_url = маленькое изображение (preview)

### вывод всех глав

```
[
    {
        "id": 2,
        "title": "Том 17. Глава 160 - Оковы",
        "manga_id": 4
    },

    ...

]

```

где:

    id = первичный ключ (pk)

    title = Название главы

    manga_id = id манги -> manga_id (в таблице chapter) == id (в таблице manga)

### вывод всех страниц

```
[
    {
        "id": 2,
        "number": 1,
        "image": "http://localhost:8000/media/manga/Screenshot_20191208-233935_Chrome_Zhjw_TNnepCg.jpeg",
        "chapter_id": 2
    },

    ...

]

```

где:

    id = первичный ключ (pk)

    number = номер страницы

    image = собстванно сама картинка

    chapter_id = id главы -> chapter_id (в таблице page) == id (в таблице chapter)


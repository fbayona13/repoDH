**JOINS**
    los joins o uniones nos permiten hacer consultas entre tablas y unir los resultados.
    
    INNER JOIN --> nos permite cruzar dos tablas y traer resultados que coincidan entre las dos tablas. En un diagrama de venn seria la union interna entre dos universos

        SELECT movies.id, title, genre.id, genres_id, name
        FROM movies
        INNER JOIN genres ON genre_id = genre.id

    LEFT / RIGHT JOIN --> nos permite cruzar dos tablas y traer resultados que coincidan en las dos tablas y la tabla que este a la derecha o a la izquierda. En un diagrama de Venn seria la union interna de los universos mas el lado (izquierdo / derecho)

        SELECT movies.id, title, genre.id, genres_id, name
        FROM movies
        LEFT JOIN genres ON genre_id = genre.id


**DISTINCTS**
    distincts elimina todos los valores que son exactamente iguales

        SELECT DISTINCT first_name, last_name
        FROM movies

**GROUP BY**
    Sirve para agrupar un conjuntos de datos segun un determinado campo.

        SELECT name, COUNT(*), MAX(rating)
        FROM movies 
        INNER JOIN genres ON genre_id = genres.id
        GROUP BY name 

**FUNCIONES DE AGREGACION** 
    No operan sobre cada fila sino que obtienen un resultado general en conclusion.
    Existen solo 5 tipos de funciones de agregacion. Se usan despues del SELECT.

        COUNT --> va a contar la cantidad de filas que tiene una tabla 
        MAX --> busca el valor maximo de una columna
        MIN --> busca el valor minimo de una columna
        AVG --> saca el promedio de los valores de una columna
        SUM --> suma todos los valores de una columna 

**HAVING**
    Sirve para hacer filtros sobre los datos ya agrupados (GROUP BY), y las funciones de agregacion

        SELECT name, COUNT(*), MAX(rating), AVG(length)
        FROM movies
        INNER JOIN genres ON genres_id = genres.id
        GROUP BY name
        HAVING COUNT(*) >= 3

**EJERCITACION**
SELECT title, name
FROM movies
INNER JOIN genres ON movies.id = movies.genre_id;

SELECT episodes.title, actors.first_name, actors.last_name
FROM episodes
INNER JOIN actor_episode ON episodes.id = actor_episode.episode_id
INNER JOIN actors ON actor_episode.actor_id = actors.id;

SELECT DISTINCT actors.first_name, actors.last_name
FROM movies
INNER JOIN actor_movie ON movies.id = actor_movie.movie_id
INNER JOIN actors ON actor_movie.actor_id = actors.id
WHERE movies.title LIKE '%Guerra de las galaxias%';

SELECT series.title, datediff(series.end_date, series.release_date) AS 'Duracion'
FROM series;

SELECT actors.first_name 
FROM actors
WHERE length(actors.first_name >= 6)
ORDER BY first_name ASC;

SELECT COUNT(episodes.id) AS 'Cantidad'
FROM episodes;

SELECT series.title, COUNT(*) AS 'Temporadas'
FROM series
INNER JOIN seasons ON series.id = seasons.serie_id
GROUP BY seasons.serie_id;

(esta rara esta)
SELECT genres.name, COUNT(movies.genre_id) AS 'C.Peliculas'
FROM movies
INNER JOIN genres ON genre_id = movies.genre_id
GROUP BY genres.name
HAVING COUNT(movies.genre_id) >= 3;
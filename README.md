# MS - Ranking

MS para determinar los ranking's de un videojuego

## Parámetros recibidos
- nick: identificador del jugador
- tableRanked: arreglo de puntuaciones de la tabla de clasificación
- playerScore: arreglo de puntuaciones del jugador

## Restricciones

- tableRanked y playerScore tienen una longitud entre 1 y 2 x 10^5 posiciones.
- Cada valor del arreglo debe estar entre 0 y 10^9.
- tableRanked está en orden descendiente.
- playerScore está en orden ascendente.

## Ejemplo

tableRanked: [100, 90, 90, 80]

playerScore: [60, 80, 90]

El ranking del jugador debe ser: [4, 3, 2]

## Especificaciones

El desarrollo está hecho en Node.js y se utiliza una base de datos PostgreSQL para guardar los últimos puntajes del jugador.

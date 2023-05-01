// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array).
var number = function (busStops) {
  //1) tenemos una funcion que recibe el array(busStops)  como un argumento y retorna la cantidad de pasajeros que quedan en bus.

  const numPassangers = busStops.map((stops) => stops[0] - stops[1]);
  //2)numPassengers es un variable que tiene un nuevo array que contiene la cantidad de pasajeros en cada parada
  //  he utlizado el methodo de map() para transformar cada elemento de array(refiere a cada parada) y mediante la funcion arrow o flecha => podemos saber la cantidad de pasanjeros que suben y bajan en cada parada
  //La expresión stop[0] se refiere al primer número del par pasanjeros que suben (stops) y stops[1] se refiere al segundo número del par pasanjeros que bajan. Entonces, stop[0] - stop[1] representa la cantidad de pasajeros que quedan en el bus después de esa parada.!IMPORTANTE! todavía no hemos sumado la cantidad total de pasanjeros que quedan en bus!!!

  const totalPassengers = numPassangers.reduce(
    (accumulatedValue, currentValue) => accumulatedValue + currentValue
  );
  //3)para saber cantidad total de pasanjeros que quedan en bus despues de la ultima parada, he utlizado el    methodo de reduce() para sumar todos elementos de array numPassangers que se realiza mediante la funcion flecha => que tiene dos argumentos: el (accumulatedValue) y el (currentValue) .se suma el elemento actual al valor acumulado y se devuelve el nuevo valor acumulado que se presenta total pasanjeros en bus despues de la última parada:

  return Math.max(totalPassengers, 0);

  //4) en paso final tal como dice ejercicio aseguramos que el resultado no sea negetivo, con el metodo Math.max()retorna el mayor de cero, si  el resultado de totalPassangers es negativo, significa que hay más pasajeros que bajan que los que suben en todas las paradas, y en ese caso se debe retornar 0 en lugar de un número negativo. Por eso se utiliza Math.max(totalPassengers, 0) para retornar el valor máximo entre totalPassengers y 0.
};

// <!--------------------------Otra manera de resolver el ejercicio-----------------------------------!>

var number = function (busStops) {
  let totalPassangers = 0;
  for (let i = 0; i < busStops.length; i++) {
    totalPassangers += busStops[i][0];
    totalPassangers -= busStops[i][1];
  }
  return Math.max(totalPassangers, 0);
};

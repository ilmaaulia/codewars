const number = busStops => {
  let peopleOnBus = 0;
  
  for (const [getOn, getOff] of busStops) {
    peopleOnBus += getOn - getOff;
  }
  
  return peopleOnBus >= 0 ? peopleOnBus : 0;
}
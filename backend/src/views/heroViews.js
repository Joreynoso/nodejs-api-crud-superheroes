export function renderHero(hero) {
  return {
    nombre: hero.nombreSuperHeroe,
    'nombre real': hero.nombreReal,
    edad: hero.edad,
    planetaOrigen: hero.planetaOrigen,
    debilidad: hero.debilidad,
    poderes: hero.poderes,
    aliados: hero.aliados,
    creador: hero.creador,
  }
}

export function renderHeroList(heroes) {
  return heroes.map(hero => renderHero(hero))
}


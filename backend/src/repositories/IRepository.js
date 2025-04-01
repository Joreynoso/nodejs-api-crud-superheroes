class IRepository {
  // Obtener todos
  getAllHeros() {
    throw new Error('Método implementado por la subclase')
  }

  // Obtener los mayores de 30
  getHeros30() {
    throw new Error('Método implementado por la subclase')
  }

  // Buscar por atributo y valor
  getHeroByAttribute(atributo, valor) {
    throw new Error('Método implementado por la subclase')
  }

  // Buscar por ID
  getHeroById(id) {
    throw new Error('Método implementado por la subclase')
  }

  // Crear héroe
  createHero(heroData) {
    throw new Error('Método implementado por la subclase')
  }

  // Actualizar héroe
  updateHero(id, heroData) {
    throw new Error('Método implementado por la subclase')
  }

  // Eliminar héroe
  deleteHero(id) {
    throw new Error('Método implementado por la subclase')
  }

  // Eliminar por nombre
  deleteByName(name) {
    throw new Error('Método implementado por la subclase')
  }

  // Buscar héroe por nombre
  findHeroByName(name) {
    throw new Error('Método implementado por la subclase')
  }

  findAdvance(id, attribute, value){
    throw new Error('Método implementado por la subclase')
  }
}

export default IRepository

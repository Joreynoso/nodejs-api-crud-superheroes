import HeroRepository from '../repositories/heroRepository.js'

class HeroService {
  async getAllHeros() {
    return await HeroRepository.getAllHeros()
  }

  async getHeros30() {
    return await HeroRepository.getHeros30()
  }

  async getHeroById(id) {
    return await HeroRepository.getHeroById(id)
  }

  async createHero(heroData) {
    return await HeroRepository.createHero(heroData)
  }

  async updateHero(id, heroData) {
    const heroeActualizado = await HeroRepository.updateHero(id, heroData)

    if (!heroeActualizado) {
      throw new Error('héroe no encontrado')
    }

    return heroeActualizado
  }

  async deleteHero(id) {
    const resultado = await HeroRepository.deleteHero(id)

    if (resultado.deletedCount === 0) {
      return null
    }

    return resultado
  }

  // eliminarpor nombre
  async deleteByName(name) {
    const heroEliminado = await HeroRepository.deleteByName(name)
    if (!heroEliminado) {
      throw new Error('héroe no encontrado')
    }
    return heroEliminado
  }

  // buscar por atributo y valor
  async getHeroByAttribute(atributo, valor) {
    return await HeroRepository.getHeroByAttribute(atributo, valor)
  }

  // buscar héroe por nombre
  async findHeroByname(name) {
    // verificar si el héroe existe antes de intentar agregarlo
    const heroExist = await HeroRepository.findHeroByName(name)

    if (heroExist) {
      // si el héroe existe, != de null
      throw new Error('el nombre del héroe ya existe en la base de datos')
    }

    // si el héroe con ese nombre no existe, devuelve true
    return true
  }
}

export default new HeroService()

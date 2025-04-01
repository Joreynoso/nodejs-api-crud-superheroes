import IRepository from './IRepository.js'
import heroModel from '../model/heroModel.js'

class HeroRepository extends IRepository {
  // obtener todos los heroes
  async getAllHeros() {
    return await heroModel.find().sort({ nombreSuperhero: 1 })
  }

  // obtener heroes mayores de 30 de la tierra y con al menos 2 poderes
  async getHeros30() {
    return await heroModel
      .find({
        edad: { $gte: 30 },
        planetaOrigen: 'Tierra',
        $expr: { $gte: [{ $size: '$poderes' }, 2] }, 
      })
      .sort({ edad: -1 })
  }
  // obtener hero por atributo y valor
  async getHeroByAttribute(atributo, valor) {
    let query = {}
    query[atributo] = valor

    return await heroModel.find(query)
  }

  // obtener heroe por id
  async getHeroById(id) {
    return await heroModel.findById(id)
  }

  // crear un heroe
  async createHero(heroData) {
    const newHero = new heroModel(heroData)
    await newHero.save()
    return newHero
  }

  // actualizar un heroe
  async updateHero(id, heroData) {
    return await heroModel.findOneAndUpdate(
      { _id: id },
      { $set: heroData },
      { new: true }
    )
  }
  // borrar un heroe
  async deleteHero(id) {
    return await heroModel.deleteOne({ _id: id })
  }

  // borrar por nombre
  async deleteByName(name) {
    return await heroModel.findOneAndDelete(
      { nombreSuperHeroe: name },
      { returnDocument: 'before' }
    )
  }

  // buscar héroe por nombre
  async findHeroByName(name) {
    const newHero = heroModel.findOne({ nombreSuperHeroe: name })

    return newHero
  }

}

export default new HeroRepository()

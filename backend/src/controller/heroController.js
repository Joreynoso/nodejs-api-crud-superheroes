import { renderHero, renderHeroList } from '../views/heroViews.js'
import heroServices from '../services/heroServices.js'

class HeroController {
  constructor() {}

  // --> GET Obtener todos
  async getAllHeros(req, res) {
    try {
      console.log('buscando todos los heroes...')

      const heroes = await heroServices.getAllHeros()

      res.status(200).json({ message: 'lista de héroes', heroes: heroes })
      // res.status(200).json(renderHeroList(heroes))
    } catch (error) {
      res.status(500).json({
        message: 'Error al obtener todos los héroes',
        error: error.message,
      })
    }
  }

  //  --> GET Obtener los mayores de 30
  async getHeros30(req, res) {
    try {
      const mayores30 = await heroServices.getHeros30()

      if (mayores30.length === 0) {
        // si no hay coincidencias, lanzamos un error
        return res.status(200).json({
          message: 'no se encontraro héroes con esas caracteristicas',
          data: [],
        })
      }

      res.status(200).json({
        message: 'héroes mayores de 30 años',
        heroes: renderHeroList(mayores30),
      })
    } catch (error) {
      res.status(500).json({
        message: 'Error al obtener héroes mayores de 30',
        error: error.message,
      })
    }
  }

  //  --> GET Buscar por atributo y valor
  async getHeroByAttribute(req, res) {
    try {
      const { atributo, valor } = req.params
      const resultado = await heroServices.getHeroByAttribute(atributo, valor)

      res.status(200).json(renderHeroList(resultado))
    } catch (error) {
      res.status(500).json({
        message: 'Error al obtener héroes por atributo',
        error: error.message,
      })
    }
  }

  //  --> GET Buscar por ID
  async getHeroById(req, res) {
    try {
      const { id } = req.params
      console.log('id del superheroe desde controller:', id)

      const hero = await heroServices.getHeroById(id)

      if (!hero) {
        return res.status(404).send({ message: 'heroe no encontrado' })
      }

      res.status(200).json({ message: 'héroe buscado por id', hero: renderHero(hero) })
    } catch (error) {
      res.status(500).json({
        message: 'Error al obtener héroe por ID',
        error: error.message,
      })
    }
  }

  //  --> POST Crear héroe
  async createHero(req, res) {
    try {
      const { nombreSuperHeroe } = req.body

      const heroExist = await heroServices.findHeroByname(nombreSuperHeroe)

      if (!heroExist) {
        return res.status(400).json({ message: 'el héroe con ese nombre ya existe' })
      }

      // Crear el héroe si no existe
      const heroNuevo = await heroServices.createHero(req.body)
      res.status(201).json({
        message: 'héroe creado con exito',
        hero: renderHero(heroNuevo),
      })
    } catch (error) {
      res.status(500).json({ message: 'Error al crear el héroe', error: error.message })
    }
  }

  //  --> PUT Actualizar héroe
  async updateHero(req, res) {
    try {
      const { id } = req.params
      const heroData = req.body

      // Llamamos al servicio para actualizar el héroe
      const heroActualizado = await heroServices.updateHero(id, heroData)

      // Verificamos si el héroe fue encontrado y actualizado
      if (!heroActualizado) {
        return res.status(404).send({ message: 'Héroe no encontrado' })
      }

      res.status(200).json({
        message: 'Héroe actualizado correctamente',
        hero: renderHero(heroActualizado),
      })
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar el héroe', error: error.message })
    }
  }

  //  --> DELETE Eliminar héroe
  async deleteHero(req, res) {
    try {
      const { id } = req.params
      const heroExist = await heroServices.getHeroById(id)

      if (!heroExist) {
        return res.status(404).send({ message: 'no se encontró el héroe' })
      }

      // variable auxiliar para mostrar el heroe eliminado
      const heroParaEliminar = heroExist

      // si existe el id, se procede a borrarlo
      await heroServices.deleteHero(id)

      return res.status(200).json({
        message: 'héroe eliminado con exito',
        hero: renderHero(heroParaEliminar),
      })
    } catch (error) {
      return res.status(500).send({ message: 'error al eliminar el héroe', error: error.message })
    }
  }

  //  --> DELETE Eliminar por nombre
  async deleteHeroByName(req, res) {
    try {
      const { name } = req.params
      console.log('nombre obtenido', name)

      const heroeEliminado = await heroServices.deleteByName(name)

      if (!heroeEliminado) {
        return res.status(404).json({ message: 'héroe no encontrado' })
      }

      return res.status(200).json({
        message: `superheroe eliminado: ${name}`,
        hero: renderHero(heroeEliminado),
      })
    } catch (error) {
      return res.status(500).send({ message: 'error al eliminar el héro', error: error.message })
    }
  }
}

export default new HeroController()

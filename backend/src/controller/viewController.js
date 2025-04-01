import heroServices from '../services/heroServices.js'

class ViewController {
  constructor() {}

  // --> GET mostrar todos los heroes
  async getAllHeroes(req, res) {
    try {
      const heroes = await heroServices.getAllHeros()

      const origen = 1

      res.render('dashboard', { heroes: heroes, origin: origen })
    } catch (error) {
      res.status(500).json({
        message: 'error al renderizar todos los héroes',
        error: error.message,
      })
    }
  }

  // --> GET mostrar todos los heroes mayores de 30
  async getMayores30(req, res) {
    try {
      const mayores30 = await heroServices.getHeros30()

      // verificar si hay héroes que cumplan los requisitos
      if (mayores30.length === 0) {
        return res.status(200).json({
          message: 'no se encontraron héroes con esas caracteristicas',
          data: [],
        })
      }

      // renderizar la vista
      res.render('dashboard', { heroes: mayores30 })
    } catch (error) {
      res.status(500).json({
        message: 'error al renderizar todos los héroes',
        error: error.message,
      })
    }
  }

  // --> GET mostrar heroe por ID
  async getHeroeById(req, res) {
    try {
      const { id } = req.params
      const heroe = await heroServices.getHeroById(id)

      const heroeStats = {
        cantPoderes: heroe.poderes.length,
        cantEnemigos: heroe.enemigos.length,
        cantAliados: heroe.aliados.length,
      }

      const { cantPoderes, cantEnemigos, cantAliados } = heroeStats

      console.log('0. objeto:', heroeStats);
    
      console.log('1. Cantidad de poderes:', typeof cantPoderes)
      console.log('2. Cantidad de enemigos:',typeof cantEnemigos)
      console.log('3. Cantidad de aliados:', typeof cantAliados)

      // renderizar la vista
      res.render('heroProfile', { heroe: heroe, stats: heroeStats })
    } catch (error) {
      res.status(500).json({
        message: 'error al renderizar todos los héroes',
        error: error.message,
      })
    }
  }

  // --> GET renderizar vista crear un nuevo héroe
  async renderFormCreate(req, res) {
    try {
      res.render('heroAdd')
    } catch (error) {
      console.log('error al renderizar la vista', error)
      res.status(500).json({ message: 'error al renderizar la vista heroAdd' })
    }
  }

  // --> POST renderizar vista crear un nuevo héroe
  async createHeroe(req, res) {
    try {
      const datos = req.body
      console.log('datos:', datos)

      const heroNuevo = await heroServices.createHero(datos)

      res.redirect('/heroes')
    } catch (error) {
      console.log('error al crear el héroe', error)
      res.status(500).json({ message: ' error al crear el héroe ' })
    }
  }

  // --> UPDATE actualizar un héroe (id, newData)
  async updateHeroe(req, res) {
    try {
      const { id } = req.params
      const newData = req.body

      // Valida y convierte las cadenas en arrays
      if (typeof newData.poderes === 'string') {
        newData.poderes = newData.poderes.split(',').map((item) => item.trim())
      }
      if (typeof newData.enemigos === 'string') {
        newData.enemigos = newData.enemigos.split(',').map((item) => item.trim())
      }
      if (typeof newData.aliados === 'string') {
        newData.aliados = newData.aliados.split(',').map((item) => item.trim())
      }

      // Actualizar el héroe
      const heroeActualizado = await heroServices.updateHero(id, newData)

      res.redirect('/heroes')
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar el héroe', error: error.message })
    }
  }

  // --> GET mostrar formulario
  async getForm(req, res) {
    try {
      const { id } = req.params
      const heroe = await heroServices.getHeroById(id)

      // verificar si el héroe existe o no en la base de datos
      if (heroe === null) {
        return res.status(404).json({ message: 'no se encontró al héroe' })
      }

      // renderizar la vista
      res.render('heroEdit', { heroe: heroe })
    } catch (error) {
      res.status(500).json({
        message: 'error al renderizar todos los héroes',
        error: error.message,
      })
    }
  }

  // --> DELETE borrar un héroe por ID
  async deleteHeroe(req, res) {
    try {
      const { id } = req.params

      const eliminarHeroe = await heroServices.deleteHero(id)

      res.redirect('/heroes')
    } catch (error) {
      console.log('error al eliminar el héroe', error)
      res.status(500).send('error al elminar el héroe')
    }
  }
}

export default new ViewController()

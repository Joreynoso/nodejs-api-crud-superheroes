// GET --> obtener todos los heroes
export const fetchAllHeroes = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/heroes')

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`)
    }

    const listHeroes = await response.json() // Agregar await aquí
    return listHeroes
  } catch (error) {
    console.error('Error al cargar todos los heroes', error)
    return []
  }
}

// GET --> obtener los heroes > de 30
export const fetchHeroes30 = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/heroes/mayores-30')

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`)
    }

    const listHeros30 = await response.json() // Agregar await aquí
    return listHeros30
  } catch (error) {
    console.error('Error al obtener los héroes:', error)
    return [] // Puedes manejar el error devolviendo null o un array vacío []
  }
}

// GET --> obtener heroe por id
export const fetchHeroById = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/heroes/${id}`)

    if (!response.ok) {
      if (response.status === 404) {
        return null
      }
      throw new Error(`Error HTTP: ${response.status}`)
    }

    const heroeEncontrado = await response.json() // Agregar await aquí
    return heroeEncontrado
  } catch (error) {
    console.error('Error al buscar heroe por id', error)
    return null
  }
}

// POST --> crear un nuevo heroe
export const fetchCreateHero = async (newData) => {
  try {
    
    const response = await fetch('http://localhost:3000/api/heroes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newData),
    })

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`)
    }

    const nuevoHeroe = await response.json() // Agregar await aquí
    return nuevoHeroe // Agregar return para devolver el héroe creado
  } catch (error) {
    console.error('Error al crear el heroe', error)
    return null
  }
}

// GET --> buscar por atributo y valor
export const fetchHeroByAttribute = async (atributo, valor) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/heroes/buscar/${atributo}/${valor}`
    )

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`)
    }

    const heroBuscado = await response.json() // Agregar await aquí
    return heroBuscado
  } catch (error) {
    console.error('Error al buscar por atributo y valor', error)
    return []
  }
}

// PUT --> actualizar un heroe
export const fetchUpdateHero = async (id, heroData) => {
  try {
    const heroExist = await fetchHeroById(id)

    if (!heroExist) {
      console.log(`el hero con id: ${id} no se encontró`)
      return
    }

    const response = await fetch(`http://localhost:3000/api/heroes/${id}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(heroData),
    })

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`)
    }

    const heroActualizado = await response.json() // Agregar await aquí
    return heroActualizado
  } catch (error) {
    console.error('Error al actualizar el heroe', error)
    return null
  }
}

// DELETE --> borar un superheroe
export const fetchDeleteHero = async (id) => {
  try {
    const heroExist = await fetchHeroById(id)

    if (!heroExist) {
      console.log(`el heroe con id ${id}, no existe`)
      return null
    }

    const response = await fetch(`http://localhost:3000/api/heroes/${id}`, {
      method: 'DELETE',
    })

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`)
    }

    const data = await response.json() // Agregar await aquí
    console.log('heroe eliminado', data)
  } catch (error) {
    console.error('error al eliminar el heroe', error)
    return null
  }
}

import mongoose from 'mongoose'

const uri = process.env.MONGO_URI ||'mongodb+srv://grupo-01:grupo01@cursadanodejs.ls9ii.mongodb.net/Node-js'

const connectDB = async () => {
  try {
    await mongoose.connect(uri)
    console.log('Conexión exitosa en:', uri)
  } catch (error) {
    console.log('Error al conectarse', error)
    process.exit(1)
  }
}

export default connectDB

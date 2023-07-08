//este archivo es el encargado de recibir y administrar las variables de entorno

import 'dotenv/config'

export const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/listaDeTareas_db'
import {Schema, model} from 'mongoose'

const tareaSchema = new Schema({
    descripcionTarea: String
});

const Tarea = model('tarea', tareaSchema);

export default Tarea;
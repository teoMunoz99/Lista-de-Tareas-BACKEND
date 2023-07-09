import Tarea from "../models/tarea"


//controlador para obtener tareas
export const obtenerTareas = async (req, res)=>{
    try{
        const tareas = await Tarea.find();
        res.status(200).json(tareas);
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al buscar las tareas'
        })
    }
}

//controlador para crear una tarea 
export const crearTareas = async (req, res)=>{
    try{
        console.log(req.body);
        const tareaNueva = new Tarea(req.body);
        await tareaNueva.save();
        res.status(201).json({
            mensaje: 'La tarea fue creada correctamente'
        })
   }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al crear las tareas'
        })
    }
}

//controlador para borrar una tarea 

export const borrarTarea = async (req,res)=>{
    try {
        //obtener el id y luego solicitar a moongoose el borrar
        console.log(req.params.id)
        await Tarea.findByIdAndDelete(req.params.id);
        res.status(200).json({
            mensaje: 'La tarea fue borrada'
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al borrar la tarea'
        })
    }
}

//controlador para editar una tarea

export const editarTarea = async (req,res)=>{
    try {
        //extraer el id del request y el body
        await Tarea.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json({
            mensaje: "La tarea fue editada correctamente"
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al editar la tarea'
        })
    }
}

//controlador para obtener una tarea
export const obtenerUnaTarea = async (req, res)=>{
    try{
        const tarea = await Tarea.findById(req.params.id);
        res.status(200).json(tarea);
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al buscar las tareas'
        })
    }
}
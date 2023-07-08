import { Router} from "express";
import { borrarTarea, crearTareas, obtenerTareas } from "../controllers/tareas.controllers";

const router = Router();

router.route('/tareas').get(obtenerTareas).post(crearTareas);
router.route('/tareas/:id').delete(borrarTarea);
export default router;

//app.get('/prueba', (req, res)=>{
//    res.send('esto es una prueba de la peticion GET a mi backend');
//});
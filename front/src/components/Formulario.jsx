import { useState } from 'react';
import { useForm } from 'react-hook-form';


function Formulario() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [posts, setPosts] = useState([]);

    function enviarPost(data, e) {
        console.log(data);
        setPosts([
            ...posts,
            data
        ])
        e.target.reset();
    }

    
    return (
        <>
            <h2 className="title p-3" >Publica tu post sobre mitología</h2>
            <div className="container">
                <form onSubmit={handleSubmit(enviarPost)}>
                    <div className="row">
                        <div className="form-group col-md-6" >
                            <label>Título</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder= "Escribe el título del Post"
                                {...register('titulo', { required: true, minLength: 4 })}
                            />
                            {errors.titulo && <p className="error">El campo título es incorrecto</p>}
                        </div>

                        <div className="form-group col-md-6">
                            <label>Número</label>
                            <input
                                type="number"
                                placeholder="Escribe el número del post"
                                className="form-control"
                                {...register('numero')}
                            />
                        </div>
                    </div>
                    

                <div className="form-group">
                    <label>Post</label>
                    <textarea className="form-control"
                        placeholder="Escribe tu post de 20 a 200 caracteres"
                        {...register('post', { required: true, minLength: 20, maxLength:200 })}
                        rows="6"
                    ></textarea>
                    {errors.post && <p className="error">El campo post es incorrecto</p>}
                </div>

                         
                <div className="form-row align-items-end">
                    <div className="col-md-4">
                    <label className="mr-sm-2">Activo</label>
                        <select  class="custom-select mb-2" {...register('activo')}>
                            <option selected>Escoge una opción...</option>
                            <option value="true">Si</option>
                            <option value="false">No</option>
                        </select>
                        
                        
                    </div>
                    <div className="col-md-6">
                            <label className="mr-sm-2">Imagen</label>
                            <input
                                type="url"
                                placeholder="Copia la url de la imagen"
                                className="form-control mb-2"
                                {...register('img', { required: true })}
                            />
                            
                    </div>
                    <div class="col-md-2 ">
                        <button type="submit" class="btn btn-primary btn-block mb-2" value="Enviar">Enviar</button>
                    </div>
                </div>
                
            
                
            </form>
            </div>
        </>
        
    );
    
}

export default Formulario;
import * as React from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { cyan } from "@material-ui/core/colors";
import datos  from '../db.json'
import MenuItem from '@material-ui/core/MenuItem';
import { useState } from 'react';

const NuevoVideo = () =>{

    const manejarEnvio = (e) =>{
        e.preventDefault()
        console.log('Manejar el envio',e)
    }
    
  
    const descripcionInicial = '', tituloInicial = '', urlInicial = '', categoriaInicial = '';
    const [descripcion, setDescripcion] = useState(descripcionInicial);
    const [titulo, settitulo] = useState(tituloInicial);
    const [url, seturl] = useState(urlInicial);
    const [categoria, setcategoria] = useState(categoriaInicial);

    const handleDescripcionChange = (event) => {
        setDescripcion(event.target.value);
        
      };
      const handleurlChange = (event) => {
        
        seturl(event.target.value);
    
      };
      const handletituloChange = (event) => {
        
        settitulo(event.target.value);
     
      };
      const handlecategoriaChange = (event) => {

        setcategoria(event.target.value);
      };
    
      const handleLimpiar = () => {
        setDescripcion(descripcionInicial);
        settitulo(tituloInicial);
        seturl(urlInicial);
        setcategoria(categoriaInicial);
      };

      const theme = createTheme({
        palette: {
            
            type: "dark",
            primary: cyan,
        },
      });


      const estilos = {
        contenedor: {
            display: 'flex',
            margin: '0 10rem', 
            justifyContent:'space-between',
            flexDirection: 'row',
        },
    };

    return (
        
    
          <div  >
                <div  >
                    <h2 className="nuevovideo__titulo">Nuevo Video</h2>

                    <ThemeProvider theme={theme} >
                    <TextField
                        fullWidth 
                        margin = 'normal'
                        id="outlined-error-helper-text"
                        label="Título del video"
                        placeholder="overwatch 2"
                        value={titulo}
                        onChange={handletituloChange}
            
                    />
                    <TextField
                        fullWidth 
                        required
                        margin = 'normal'
                        id="outlined-error-helper-text"
                        label="Link del video"
                        placeholder="http://"
                        value={url}
                        onChange={handleurlChange}
                    />
                  <TextField
                        id="outlined-select-currency"
                        margin = 'normal'
                        fullWidth 
                        select
                        label="Secleccionar categoria"
                        value={categoria}
                        onChange={handlecategoriaChange}
                        >
                        {
                        datos.categorias.map((categoria, i) => {
                            return(
                                <MenuItem value={categoria.nombre} key={i}>{categoria.nombre}</MenuItem>
                            )
                        })
                    }
                  </TextField>
                  <TextField
                        id="outlined-multiline-flexible"
                        label="Descripción"
                        fullWidth 
                        placeholder="agrega una breve descripcion del video"
                        multiline
                        rows={4}
                        variant="filled"
                        value={descripcion}
                        onChange={handleDescripcionChange}
                        />
                        <div style={estilos.contenedor}>
                                  <Button variant="outlined" component={Link} to="/">Guardar</Button>
                                  <Button variant="outlined" onClick={handleLimpiar}>Limpiar</Button>
                        </div>  
                    </ThemeProvider>
  
                </div>
            </div>
        
        
        
        
        
    )
    
}

export default NuevoVideo
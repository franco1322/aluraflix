import datos from '../db.json'
import MediaCard from './mediacard'
import { makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      alignItems:'center',
      textAlign: 'center',
      justifyContent:'space-between',
      flexDirection: 'row',
    },
  
    content: {
      width: "100%",
      display: 'flex',
      flexDirection: 'row',
      alignItems:'center',
      margin: '1.5rem',
      justifyContent: 'center'  
    }
  
  }));

const ListaCategorias = () => {
    const classes = useStyles();

    return (
        <main >
            
            <div >
                {
                    datos.categorias.map((categoria) => {
                        const {id, nombre,  color} = categoria

                        let colorLista = {
                            backgroundColor: color
                        }

                        return (
                                <div key={id}>
                                    <div>
                                    <div style={ colorLista }>
                                    
                                      
                                            <Typography variant="h6" color="inherit">
                                            { nombre }
                                            </Typography>
                                      
                                            </div>
                                    </div>
                                    <div className={classes.root}>
                                    <div className={classes.content}>

                                    <MediaCard nombreCategoria={nombre} color={ color }/>
                                        </div>
                                    </div>
                                </div>
                        );
                    })
                }
            </div>
        </main>
    )
}

export default ListaCategorias
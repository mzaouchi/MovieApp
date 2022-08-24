import { Card,Button } from "react-bootstrap"
import Rating from '@mui/material/Rating';
import ReactReadMoreReadLess from "react-read-more-read-less";
import EditMovie from "./EditMovie";
const CardMovie=({movie,movies,setMovies})=>{
    const handleDelete=()=>{
        setMovies(movies.filter(el=> el.id != movie.id))
    }
    return(
        <>
             <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={movie.posterURL} style={{height :'390px'}} />
                <Card.Body>
                    <Card.Title  style={{height :'48px'}}>{movie.title}</Card.Title>
                    <Card.Text>
                
                     <ReactReadMoreReadLess
                        charLimit={40}
                        readMoreText={"Show More"}
                        readLessText={"Show Less"}
                    >
                        {movie.description}
                    </ReactReadMoreReadLess>
                    </Card.Text>
                    <Rating name="read-only" value={movie.rating} readOnly />
                    <br/>
                    <br/>
                    <EditMovie movie={movie} movies={movies} setMovies={setMovies}/>
                    <br/>
                    <br/>
                    <Button onClick={handleDelete}>Delete</Button>
                </Card.Body>
                </Card>
        </>
    )
}

export default CardMovie
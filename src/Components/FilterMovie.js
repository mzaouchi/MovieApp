import Rating from '@mui/material/Rating';
import { Button } from 'react-bootstrap';
const FilterMovie=({setSearchM,setRateM,searchM,rateM})=>{
    const handleRest=()=>{
        setSearchM('')
        setRateM(0)
    }
    return(
        <>
            <input value={searchM} type="text" onChange={(e)=>setSearchM(e.target.value)}/>
            <Rating value={rateM} name="simple-controlled" onChange={(e)=>setRateM(e.target.value)} />
            <Button onClick={handleRest}>Reset</Button>
        </>
    )
}

export default FilterMovie
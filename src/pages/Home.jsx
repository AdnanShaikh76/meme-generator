import React, {useEffect, useState} from 'react'
import { getAllMemes } from '../API/meme'
import MemeCard from '../components/Card'
import { data } from 'react-router'


const Home = () => {
    const [data, setdata] = useState([])

    useEffect(() => {
        getAllMemes().then(memes => setdata(memes.data.memes))
        // console.log(memes.data.memes)
    }, [])
  return (
    <> 
        <div className='row'>
            {
                data.map(el => <MemeCard img={el.url} title ={el.name}/>)
            }
        </div>
    </>
  )
}

export default Home
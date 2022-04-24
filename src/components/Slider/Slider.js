import React, {useState,useEffect} from 'react';
import "./Slider.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const Slider = ({images}) => {
    const[index,setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = images.length-1;
        if(index < 0){
            setIndex(lastIndex)
        }
        if(index > lastIndex){
            setIndex(0)
        }
    }, [index,images])

    useEffect(() =>{
        let slider = setInterval(() => {
              setIndex(index+1)
        }, 5000)

        return () => {
            clearInterval(slider)
        }
    }, [index])

  return (
    <div className='section'>
       <div className='section_center'>
           {images.map((image,IndexImage) => {
               let position = "nextSlide";
               if(IndexImage === index){
                   position = "activeSlide"
               }
               if(IndexImage === index -1 || (index===0 && IndexImage === images.length-1)){
                   position = "lastSlide"
               }

               return (
                   <article className={position} key={IndexImage}>
                       <img src={image} alt="bannerImg" className='banner_img'/>
                   </article>
               )
           })}
           <p className='prev' onClick={() => setIndex(index-1)}>
             <ArrowBackIosIcon/>
           </p>
           <p className='next' onClick={() => setIndex(index+1)}>
             <ArrowForwardIosIcon/>
           </p>
       </div>
    </div>
  )
}

export default Slider


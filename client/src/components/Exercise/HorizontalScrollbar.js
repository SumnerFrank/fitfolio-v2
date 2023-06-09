import React from 'react'
import {Box} from '@mui/material'
import BodyPartCard from './BodyPartCard'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import ExerciseCard from './ExerciseCard'


function HorizontalScrollbar({data, bodyPartCard, setBodyPartCards,isBodyParts }) {

  const slideLeft = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const slideRight = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  return (
    <div >
     <MdChevronLeft onClick={slideLeft} size={40} className='left-arrow'/>
      <div className='wrapper' id='slider'>
     
            {data.map((item) => (
                <Box
                    key={item.id|| item}
                    itemId={item.id|| item}
                    title={item.id|| item}
                    m= '0 40px'   
                    >
                      {isBodyParts ? <BodyPartCard item={item} bodyPartCard=
                      {bodyPartCard} setBodyPartCards=
                      {setBodyPartCards}/>
                      : <ExerciseCard exercise={item} />
                    }
              </Box>
            )
        )}  
        </div>
        <MdChevronRight onClick={slideRight} size={40} className='right-arrow'/>
    </div>
  )
}

export default HorizontalScrollbar
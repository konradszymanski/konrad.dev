import React from 'react'

const Circle = () => {
  
     const skills = [
          {
               icon: 'techIcons/html5.png',
               percentage: '90'
          },{
               icon: 'techIcons/css3.png',
               percentage: '90'
          },{
               icon: 'techIcons/bootstrap.png',
               percentage: '70'
          },{
               icon: 'techIcons/tailwind-css.png',
               percentage: '60'
          },{
               icon: 'techIcons/javascript.png',
               percentage: '60'
          },{
               icon: 'techIcons/react.png',
               percentage: '30'
          },{
               icon: 'techIcons/rwdFreepik.png',
               percentage: '95'
          },{
               icon: 'techIcons/git.png',
               percentage: '60'
          },{
               icon: 'techIcons/shopify.png',
               percentage: '80'
          },{
               icon: 'techIcons/wordpress-icon.png',
               percentage: '70'
          },
     ]
     return (
          
          <div className='techIcons'>
               <h3>my skills</h3>
                    {skills.map((item, index) =>
                        <img key={index} src={item.icon} className={item.class} alt='skillsIcons' />
                    )}
          </div>
     )
}

export default Circle

// <div className='techIcons'>
// <h3>my skills</h3>
//      {skills.map((item, index) =>
//          
//      )}
// </div>
/*
import { CircularProgressbarWithChildren  } from 'react-circular-progressbar';
 <CircularProgressbarWithChildren value={item.percentage}>
<img style={{ width: 50 }}  key={index} src={item.icon}  alt='skillsIcons'/>
</CircularProgressbarWithChildren> */
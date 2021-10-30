import React from 'react'

const Circle = () => {
  
     const skills = [
          {
               icon: 'techIcons/html5.png'
          },{
               icon: 'techIcons/css3.png'
          },{
               icon: 'techIcons/bootstrap.png'
          },{
               icon: 'techIcons/tailwind-css.png'
          },{
               icon: 'techIcons/javascript.png'
          },{
               icon: 'techIcons/react.png'
          },{
               icon: 'techIcons/shopify.png'
          },{
               icon: 'techIcons/wordpress-icon.png'
          },{
               icon: 'techIcons/responsive.png',
          },{
               icon: 'techIcons/git.png'
          },{
               icon: 'techIcons/bulb.png'
          },{
               icon: 'techIcons/support.png'
          }
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
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
               icon: 'techIcons/rwdFreepik.png'
          },{
               icon: 'techIcons/git.png'
          },{
               icon: 'techIcons/shopify.png'
          },{
               icon: 'techIcons/wordpress-icon.png'
          },
     ]
     return (
          <div className='techIcons'>
               <h3>my skills</h3>
                    {skills.map((item, index) =>
                         <img key={index} src={item.icon} alt='skillsIcons' />
                    )}
          </div>
     )
}

export default Circle

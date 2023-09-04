import React from 'react'

const Menu = ({menuItems}) => {
  return (
    <div>
      {menuItems.map((menu , index)=>{
        return (
          <article className="menu" key={index}>
            <img src={menu.img} alt="" />
            <div className="item-info">
              <header>
                <h4>{menu.title}</h4>
                <h4>{menu.price}</h4>
              </header>
              <p className="item-text">{menu.desc}</p>
            </div>
          </article>
        );        
      })}
    </div>
  )
}

export default Menu
import React from 'react'
import "./SkillListItem.css"



function SkillListItem(props) {
  const {name, level} = props.skill
  return (
    <div className="SkillListItem">
      <li>{name}</li>
      <li>{level}</li>

    </div>
  );
}


export default SkillListItem;
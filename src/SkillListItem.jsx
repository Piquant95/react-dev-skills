import React from 'react'
import "./SkillListItem.css"


function SkillListItem(props) {
  const {name, level} = props.skills;
  return (
    <li className="SkillListItem">
      <div>{name}</div>
      <div>level: {level} </div>

    </li>
  );
}


export default SkillListItem;
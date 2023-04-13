import React from 'react';
import SkillListItem from './SkillListItem';
import SkillListItem2 from './SkillListItem2';


function SkillList(props) {

    return (
      <div className='SkillList'>
          <ul>
              {props.skills.map((skill, idx) => (
                <SkillListItem skill={skill} key={idx + skill} />
                // <SkillListItem2 skill={skill} key={idx + skill} />
              ))}
              
          </ul>
      </div>
      
    )
  }
export default SkillList;
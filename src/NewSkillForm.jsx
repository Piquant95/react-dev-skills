import React, {useState} from 'react';
import "./NewSkillForm.css";

function NewSkillForm({handleAddSkill}) {
    const [newSkill, setNewSkill] = useState({name: '', level: 3})

    
  function handleNameChange(event) {
    setNewSkill({ ...newSkill, name: event.target.value });
  };

  function handleLevelChange(event) {
    setNewSkill({ ...newSkill, level: parseInt(event.target.value) });
  };

  function handleSubmit(event) {
    event.preventDefault();
    handleAddSkill(newSkill);
    setNewSkill({ name: "", level: 3 });
  };

  return (
    <div className='NewSkillForm'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="input">Skill: </label>
          <input
            type="text"
            id="input"
            name="input"
            value={newSkill.name}
            onChange={handleNameChange}
          />
        </div>
        <div className='LevelOption'>
          <label htmlFor="select">Level: </label>
            <select id="select" name="select" value={newSkill.level} onChange={handleLevelChange}>
                <option value=""></option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
        </div>
        <button type="submit" id="addSkill">Add Skill</button>
      </form>
    </div>
  );
}

export default NewSkillForm;
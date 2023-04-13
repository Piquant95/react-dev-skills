import React from 'react';
import "./NewSkillForm.css";

function NewSkillForm() {
    const [newSKill, setNewSkill] = useState({name: '', level: 3})

    
  const handleNameChange = (event) => {
    setNewSkill({ ...newSKill, name: event.target.value });
  };

  const handleLevelChange = (event) => {
    setNewSkill({ ...newSkill, level: parseInt(event.target.value) });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Pass the form state up to the parent component
    // via a callback function passed in as a prop
    this.props.onSubmit(newSkill);
    // Clear the form
    setNewSkill({ name: '', level: 3 });
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
            value={formState.name}
            onChange={handleNameChange}
          />
        </div>
        <div className='LevelOption'>
          <label htmlFor="select">Level: </label>
            <select id="select" name="select" value={formState.level} onChange={handleLevelChange}>
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
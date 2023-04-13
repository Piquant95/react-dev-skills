import React from 'react';
import "./NewSkillForm.css";

function NewSkillForm() {
    return (
<div className='NewSkillForm'>
            <form>
                <div>
                <label for="input">Skill: </label>
                <input type="text" id="input" name="input" />
                </div> 
                <div className='LevelOption'>
                <label for="select">Level: </label>
                <select id="select" name="select">
                    <option value=""></option>
                    <option value="option1">1</option>
                    <option value="option2">2</option>
                    <option value="option3">3</option>
                    <option value="option3">4</option>
                    <option value="option3">5</option>
                </select>
                </div>

                <button type="submit" id="addSkill">Add Skill</button>
            </form>
        </div>
    );
}

export default NewSkillForm;
import React from 'react';
import "./NewSkillForm.css";

function NewSkillForm() {
    return (
<div className='NewSkillForm'>
            <form>
                <label for="input">Skill: </label>
                <input type="text" id="input" name="input" />

                <label for="select">Level:</label>
                <select id="select" name="select">
                    <option value="">Select:</option>
                    <option value="option1">Level 1</option>
                    <option value="option2">Level 2</option>
                    <option value="option3">Level 3</option>
                    <option value="option3">Level 4</option>
                    <option value="option3">Level 5</option>
                </select>

                <button type="submit">Add Skill</button>
            </form>
        </div>
    );
}

export default NewSkillForm;
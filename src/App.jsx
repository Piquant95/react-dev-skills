import './App.css';

function App() {
  return (
    <div>
      <h1>React Dev Skills</h1>
      <ul>
        <li>SkillListItem</li>
        <li>SkillListItem</li>
        <li>SkillListItem</li>
      </ul>
      <hr />
      <div className='NewSkillForm'>
            <form>
                <label for="input">Skill: </label>
                <input type="text" id="input" name="input" />

                <label for="select">Add:</label>
                <select id="select" name="select">
                    <option value="">Select:</option>
                    <option value="option1">1</option>
                    <option value="option2">2</option>
                    <option value="option3">3</option>
                </select>

                <button type="submit">Add Skill</button>
            </form>
        </div>
    </div>
  );
} 

export default App;

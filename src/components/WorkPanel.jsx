import { useState } from 'react';
import '../styles/EducationPanel.css';
import '../styles/WorkPanel.css';

export default function WorkPanel({ work, setWork, handleAddWork }) {

  const [isActive, setIsActive] = useState(false);

  function handleFromChange(e, id) {
    const updatedWork = work.map(work => work.id === id ? {...work, from: e.target.value} : work)
    setWork(updatedWork);
  }

  function handleToChange(e, id) {
    const updatedWork = work.map(work => work.id === id ? {...work, to: e.target.value} : work)
    setWork(updatedWork);
  }

  function handleCompanyChange(e, id) {
    const updatedWork = work.map(work => work.id === id ? {...work, company: e.target.value} : work)
    setWork(updatedWork);
  }

  function handlePositionChange(e, id) {
    const updatedWork = work.map(work => work.id === id ? {...work, position: e.target.value} : work)
    setWork(updatedWork);
  }

  function handleWorkDescChange(e, id) {
    const updatedWork = work.map(work => work.id === id ? {...work, description: e.target.value} : work)
    setWork(updatedWork);
  }

  function handleDeleteWork(id) {
    const updatedWork = work.filter(work => work.id !== id)
    setWork(updatedWork);
  }

  function showPanel() {
    setIsActive(true);
  }

  function closePanel() {
    setIsActive(false)
  }

  return (
    <div className="user-panel">
  {isActive ? (
    <div className='form-wrapper'>
      <h2>Work Experience</h2>
      <button className='show-panel' onClick={closePanel}><i className="fa-regular fa-eye-slash"></i></button>
      {work.map((work, index) => (
        <div key={index} className="education-panel">
          <button className='delete-education' onClick={() => {handleDeleteWork(work.id)}}><i className="fa-regular fa-trash-can"></i></button>
          <input type="number" placeholder="From" onChange={(e) => handleFromChange(e, work.id)} />
          <input type="number" placeholder="To" onChange={(e) => handleToChange(e, work.id)}/>
          <input type="text" placeholder="Company Name" onChange={(e) => handleCompanyChange(e, work.id)} />
          <input type="text" placeholder="Job Title / Position" onChange={(e) => handlePositionChange(e, work.id)} />
          <textarea name="" id="" cols="25" rows="10" placeholder='Job Description' onChange={(e) => handleWorkDescChange(e, work.id)}></textarea>
        </div>
      ))}
      <button onClick={handleAddWork}>Add New Work</button>
    </div>
  ) : (
    <>
      <h2>Work Experience</h2>
      <button className='show-panel' onClick={showPanel}><i className="fa-regular fa-eye"></i></button>
    </>
  )}
</div>

  );
}


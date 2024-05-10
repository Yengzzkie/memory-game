import { useState } from "react";
import "../styles/PersonalPanel.css";

export default function PersonalPanel({ setName, setEmail, setContact, setLinkedIn, setGithub, clearPreview }) {

  const [isActive, setIsActive] = useState(false);

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  function handleContactChange(e) {
    setContact(e.target.value)
  }

  function handleLinkedinChange(e) {
    setLinkedIn(e.target.value)
  }

  function handleGithubChange(e) {
    setGithub(e.target.value)
  }

  const handleClearInput = () => {
    clearPreview();
    const inputFields = document.querySelectorAll('.user-panel input');
    inputFields.forEach(input => {
      input.value = '';
    });
  };

  function showPanel() {
    setIsActive(true);
  }

  function closePanel() {
    setIsActive(false)
  }

  return (
    <div className="user-panel">
      {isActive ? (
        <div className="education-panel">
          <h2>Personal</h2>
          <button className='show-panel' onClick={closePanel}><i className="fa-regular fa-eye-slash"></i></button>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleNameChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleEmailChange}
          />
          <input
            type="tel"
            name="tel"
            placeholder="Contact"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            onChange={handleContactChange}
          />
          <input
            type="text"
            name="linkedin"
            placeholder="LinkedIn"
            onChange={handleLinkedinChange}
          />
          <input
            type="text"
            name="github"
            placeholder="Github"
            onChange={handleGithubChange}
          />
          <button onClick={handleClearInput}>Clear</button>
        </div>
      ) : (
        <>
          <h2>Personal</h2>
          <button className='show-panel' onClick={showPanel}><i className="fa-regular fa-eye"></i></button>
        </>
      )}
    </div>
  );
}

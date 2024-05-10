import { useState } from "react"
import '../styles/About.css';

export default function AboutPanel({ setAbout }) {

    const [isActive, setIsActive] = useState(false)

    function handleSetAbout(e) {
        setAbout(e.target.value)
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
                <div className="about-panel">
                    <h2>About</h2>
                    <button className='show-panel' onClick={closePanel}><i className="fa-regular fa-eye-slash"></i></button>
                    <textarea cols="30" rows="5" placeholder="About yourself" onChange={handleSetAbout}></textarea>
                </div>
            ) : (
                <>
                    <h2>About</h2>
                    <button className='show-panel' onClick={showPanel}><i className="fa-regular fa-eye"></i></button>
                </>
            )}
        </div>
    )
}
import '../styles/About.css';

export default function About({ about }) {
    
    return (
        <div className='about'>
            <h3>About</h3>
            <hr />
            <p>{about}</p>
        </div>
    )
}
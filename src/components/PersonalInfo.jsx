import "../styles/PersonalInfo.css";

export default function PersonalInfo({name, email, contact, linkedin, github}) {
  return (
    <div className="personal-info">
      <h1 className="name">{name}</h1>
      <div className="socials">
        <p>
        <a href={"https://github.com/" + github} target="_blank"><i className="fa-brands fa-github"></i> : {github}</a>
        </p>
        <p>
        <a href={'https://www.linkedin.com/in/' + linkedin} target="_blank" ><i className="fa-brands fa-linkedin"></i> : {linkedin}</a>
        </p>
        <p>
          <span className="material-symbols-outlined">language</span> : {email}
        </p>
        <p>
          <span className="material-symbols-outlined">phone_iphone</span>: {contact}
        </p>
      </div>
    </div>
  );
}

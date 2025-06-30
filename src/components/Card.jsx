export default function Card() {
    const name = "Mario Garcia";
    const image = "https://imgs.search.brave.com/_UA_MyykWu--uKfhiC1bnJPE8IDIWBjXiCQ-KpheBv8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9mbHlpbmctcGl6/emEtd2l0aC1pbmdy/ZWRpZW50cy1ibGFj/ay1iYWNrZ3JvdW5k/XzU2NTQ3MC03MDAu/anBnP3NlbXQ9YWlz/X2h5YnJpZCZ3PTc0/MA";
const github = "https://github.com/mario-ionicode";
const linkedin = "https://www.linkedin.com/in/mario-ionicode/";


  const cardStyle = {
    width: "300px",
    height: "550px",
    borderRadius: "50px",
    boxShadow: "0 4px 8px #000000",
    overflow: "hidden",
    textAlign: "center",
    margin: "20px auto",
    backgroundColor: "#000000",
    color: "#333",
  };

  const imageStyle = {
    width: "80%",
    height: "300px",
    objectFit: "cover",
    borderRadius: "20%",
    margin: "20px auto",
  };
    const linkStyle = {
    color: "#32EC82",
    textDecoration: "none",
    fontSize: "1rem",
    margin: "5px 0",
    display: "inline-block",
    };
   
    const nameStyle = {
    color: "#32EC82",
    textAlign: "center",
    fontSize: "2rem",
    letterSpacing: "2px",
    position: "relative",
    width: "100%",
    display: "block",
    transition: "color 0.3s ease",
    };
    const githubStyle = {
    color: "#32EC82",
        
    textDecoration: "none",
    fontSize: "1rem",
    margin: "5px 0",
    display: "inline-block",

  
      
    };


  return (
    <div style={cardStyle}>
      <img src={image} alt={name} style={imageStyle} />
      <h2 style={nameStyle}>{name} </h2>
      <div>
        <a style={githubStyle}  href={github} target="_blank" rel="noopener noreferrer" >GitHub</a>
        <br />
        <a style={linkStyle} href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  );
}
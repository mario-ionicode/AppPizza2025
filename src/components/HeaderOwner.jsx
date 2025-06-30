export default function Header() {

    const headerStyle ={
       color: "#252525",
       blackout: "10",
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: "3rem",
    fontWeight: 300,
    letterSpacing: "3px",
    position: "relative",
    width: "100%",
    display: "block",
    hover: {
      filter: "brightness(10)",
    },
}
  return (
    <header>
      <h1 style={headerStyle}>Current Owner</h1>
     
    </header> 
  )
}
/**
 * componente card con 
 * imagen
 * una parte de texto donde va a ir nombre
 * 2 links, uno a github y uo a linkedin
 */
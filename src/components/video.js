
export default function Video({url}){

  return(
    <video autoPlay muted loop key={url}>
        <source 
        src={url} 
        type="video/mp4"/>
    </video>
  )
}
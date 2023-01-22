
export default function Article(props){

  return(
    <article className="container" id={props.id}>
        <h3>{props.heading}</h3>
        <h2>
            {props.subHeading}
        </h2>
        <p>
            {props.description}
        </p>

        <video autoPlay muted loop className="inner-clip">
            <source 
            src={props.url} 
            type="video/mp4"/>

        </video>
    </article>
  )
}
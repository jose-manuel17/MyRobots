// Recibe como prop name e email
function Card({name, email}){
    return(
        <div className="column is-one-quarter">

            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                    <img
                        // src necesita el prop name
                        src={`https://robohash.org/${name}`}
                        // alt necesita el prop email
                        alt={`${email}`}
                    />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            {name}
                            <p className="title is-4"> </p>
                            {email}
                            <p className="subtitle is-6"> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
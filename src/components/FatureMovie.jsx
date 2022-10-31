export default function FatureMovie({item}){
    let descripition = item.overview

    if(descripition.length > 200) {
        descripition = descripition.substring(0, 200)+'...'
    }

    let firstDate = new Date(item.first_air_date)
    let genres = []
    for(let i in item.genres){
        genres.push(item.genres[i].name)
    }

    return (
        <section className='feature' style={{
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }}>
            <div className="feature--vertical">
                <div className="feature--horizontal">
                    <div className="feature--name">{item.original_name}</div>
                    <div className="featura--info">
                        <div className="feature--points">{item.vote_average} pontos</div>
                        <div className="feature--year"><strong>{firstDate.getFullYear()}</strong></div>
                        <div className="feature--seasons"><strong>{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</strong></div>
                    </div>
                    <div className="feature--descripition">{descripition}</div>
                    <div className="feature--buttons">
                        <a href={`#`} className='btn1'>▶ Assistir</a>
                        <a href={`#`} className='btn2'>+ Minha Lista</a>
                    </div>
                    <div className="feature-genres"><strong>Gêneros: </strong> {genres.join(', ')}</div>
                </div>
            </div>
        </section>
    )
}
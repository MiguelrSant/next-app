import Tmdb from '../src/Tmdb'
import MovieRow from '../src/components/MovieRow'

export default function Home({list}) {
    
  return (
    <div className='page'>
      <section className='lists'>
        {list.map((item, key) =>(
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
    </div>
  )
}


export async function getStaticProps() {  
    const list = await Tmdb.getHomeList()

    return {
        props: {
            list,
        },
        revalidate: 86400
    }
}
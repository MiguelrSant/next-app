import Tmdb from '../src/Tmdb'
import MovieRow from '../src/components/MovieRow'
import FatureMovie from '../src/components/FatureMovie'
import Head from '../src/components/Head'
import Header from 'next/head'
import { useState, useEffect } from 'react'

export default function Home({list, feature}) {
  const featureData = feature
  const [blackHeader, setBleckHeader] = useState(false)

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10){
        setBleckHeader(true)
      } else{
        setBleckHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener)
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  })
  return (

    <div className='page'>
      <Head black={blackHeader}>
        <title>This page has a title 🤔</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />

      {featureData &&
        <FatureMovie item={featureData} />
      }

        <section className='lists'>
          {list.map((item, key) =>(
            <MovieRow key={key} title={item.title} items={item.items}/>
          ))}
        </section>

        <footer>
          Feito por Miguel Angelo <br/>

        </footer>
    </div>
  )
}


export  async function getStaticProps()   {  
    const list = await Tmdb.getHomeList()

    let chosenInfo = await Tmdb.getMovieinfo(113988, 'tv')
    

    return {
        props: {
            list,
            feature: chosenInfo
        },
        revalidate: 86400
    }
}
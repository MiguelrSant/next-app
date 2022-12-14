import Tmdb from '../src/Tmdb'
import MovieRow from '../src/components/MovieRow'
import FatureMovie from '../src/components/FatureMovie'
import Header from '../src/components/Header'
import Head from 'next/head'
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
      <Head leng='pt-br'>
        <title>Netiflix</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header black={blackHeader}/>

      {featureData &&
        <FatureMovie item={featureData} />
      }

        <section className='lists'>
          {list.map((item, key) =>(
            <MovieRow key={key} title={item.title} items={item.items}/>
          ))}
        </section>

        <footer>
          Feito por <a href="https://github.com/MiguelrSant/next-app" target={'_blank'} style={{textDecoration: 'none', color: '#fff', textTransform: 'uppercase', cursor: 'pointer'}}>Miguel Angelo</a> <br/>

        </footer>
    </div>
  )
}


export  async function getStaticProps()   {  
    const list = await Tmdb.getHomeList()
    // const list = await Tmdb.getHomeList()

    // const originals = list.filter(i=>i.slug == 'originals')
    //let reamdomChosem = Math.floor(Math.random() * (20))
    //let chosen = originals[0].items.results[reamdomChosem]
    // let chosenId = chosen.id
    // let chosenInfo = await Tmdb.getMovieinfo(chosenId, 'tv')
    let chosenInfo = await Tmdb.getMovieinfo(113988, 'tv')
    

    return {
        props: {
            list,
            feature: chosenInfo
        },
        revalidate: 86400
    }
}
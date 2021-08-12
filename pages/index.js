import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>welcome</title>
        <link rel="icon" href="/teedo.ico" />
      </Head>

      <main>
				<Layout /> 
        <h1 className="title">
					BigBlase.xyz
        </h1>

        <p style={{color:"#ffbbbb"}} className="description" >
					aka me learning front end
        </p>

        <div className="grid">
          <a href="https://github.com/thebigblase/" className="card">
            <h3>My github &rarr;</h3>
            <p>Aka the dumb shit I do to learning fancy stuff</p>
          </a>

          <Link href="/tts" className="grid">
						<div className="card">
            <h3>TTS &rarr;</h3>
            <p>Leave a message and a bot will read it </p>
					</div>
          </Link>

          <a
            href="https://en.wikipedia.org/wiki/Classe_pr%C3%A9paratoire_aux_grandes_%C3%A9coles"
            className="card"
          >
            <h3>Studies &rarr;</h3>
            <p> 
								I did MPSI, engineering school next year</p>
          </a>

          <a
            href="https://twitch.tv/big_blase"
            className="card"
          >
            <h3>Twitch &rarr;</h3>
            <p>
							I do stream on it about twice a year, nothing fancy  
            </p>
          </a>
        </div>
      </main>

      <footer style={{padding:0}}>
        <a href="https://twitch.tv/totally_not_a_spy_" style={{color:"#aa22ff", padding:0}}>
          Teedo : {' '}
          <img src="/teedo.ico" className="logo" />
        </a>
      </footer>
			<footer style={{padding:0}}>
				<p style={{color:"#ff22aa", padding:0}}>
					Contact me : 
					<a href="https://twitter.com/thebigblase" style={{color:"#aa22ff", padding:0}}>
						@thebigblase
					</a>
				</p>
			</footer>
    </div>
  )
}

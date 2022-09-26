import Link from 'next/link'

import Head from 'next/head'
import React from 'react'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Udon TRPG</title>
      </Head>

      <main>
        <p className="description">
          This site is for playing&nbsp;
          <a href="https://twitter.com/mikadukiakira/status/705624889479172096">Udon TRPG!</a>
        </p>

        <h2>What is Udon RPG?</h2>
        <p>
          First, PLs appeal their original udons with conditions determined by random.<br />
          Second, the GM determines what udon is the best.<br />
          (players: 3~6)
        </p>

        <h1 className="title">
          <Link href="/posts/display-udon-condition">
            <a>Let's make udon!</a>
          </Link>
        </h1>
      </main>
    </div>
  )
}

import Head from 'next/head'
import React from "react"
import Link from 'next/link'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'

export default class Home extends React.Component {
  render() {
    return (
      <Layout home>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <section className="utilStyles">
          <p>hi i code things</p>
          <p>
            (This is a sample website - you’ll be building a site like this on{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>
        <secion>
          <h2>yoo i made something that isnt in the tutorial!</h2>
          <p>its a simple <Link href="/chatroom">chatroom</Link> i made to figure out how to use socket.io with nextjs</p>
        </secion>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>blog</h2>
          <ul className={utilStyles.list}>
          {this.props.allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br/>
              <small className={utilStyles.lightText}>
                <Date dateString={date}/>
              </small>
            </li>
          ))}
        </ul>
        </section>
      </Layout>
    )
  }
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData
    }
  }
}

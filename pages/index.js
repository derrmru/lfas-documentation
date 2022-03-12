import Head from 'next/head'
import Body from '../templates/Body'
import { getProjectsInfo } from '../lib/projects'

export default function Home({ projects }) {
  return (
    <>
      <Head>
        <title>Documentation - London Foot & Ankle Surgery</title>
        <meta name="description" content="Project Documentation for all LFAS projects." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Body projects={projects}>
        <h1>Project Documentation</h1>
        <p>This site contains all of the details, instructions and information required to manage the IT and digitial dependencies for London Foot & Ankle Surgery.</p>
        <p>You can search for and filter projects in the sidebar / menu and each page should contain everything you need to develop and maintain this aspect of the clinic.</p>
        <p>Many of the projects in this documentation require access to accounts and varying degrees of authorization. These will be provided to you separately.</p>
        <p>If you need any information, get in touch:</p>
        <ul>
          <li><a href="mailto:bookings@podogo.com">Anjelica: bookings@podogo.com</a> (Dev / Admin)</li>
          <li><a href="mailto:admin@podogo.com">Fiona: admin@podogo.com</a> (Admin)</li>
          <li><a href="mailto:kaser@podogo.com">Kaser: kaser@podogo.com</a> (Owner)</li>
        </ul>
      </Body>

    </>
  )
}

export const getStaticProps = () => {
  const projects = getProjectsInfo()
  return {
    props: {
      projects
    }
  }
}
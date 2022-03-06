import Head from 'next/head'
import Body from '../../templates/Body'
import KeyInformation from '../../components/KeyInformation'
import ReactMarkdown from 'react-markdown'
import { getAllProjectIds, getProjectData, getProjectsInfo } from '../../lib/projects'


const Project = ({ projectData, projects }) => {
    return (
        <>
            <Head>
                <title>{projectData.id} - Documentation</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Body projects={projects}>
                <h1>{projectData.id}</h1>
                <hr className="my-4" />
                <KeyInformation projectData={projectData} />
                <h2 className="mt-6">Description</h2>
                <hr className="my-4 w-full md:w-1/2" />
                <ReactMarkdown>
                    {projectData.content}
                </ReactMarkdown>
            </Body>
        </>
    )
}

export default Project

export const getStaticPaths = async () => {
    const paths = getAllProjectIds()
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    const projectData = getProjectData(params.id)
    const projects = getProjectsInfo()
    return {
        props: {
            projectData,
            projects
        }
    }
}
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { fileURLToPath } from 'url'

const projectsDirectory = path.join(process.cwd(), 'projects')

export const getProjectsInfo = () => {
    const fileNames = fs.readdirSync(projectsDirectory)
    const allProjectsData = fileNames.map(fileName => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '')

        // Read markdown file as string
        const fullPath = path.join(projectsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        // Combine the data with the id
        return {
            filename: matterResult.data.title.replace(/-/g, ' ').split(' ').map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' '),
            path: `/projects/${id}`,
            ...matterResult.data
        }
    })
    const allProjectsByCategory = {}
    allProjectsData.forEach(file => {
        allProjectsByCategory[file.type]
            ? allProjectsByCategory[file.type].push(file)
            : allProjectsByCategory[file.type] = [file]
    })

    return allProjectsByCategory
}

export const getAllProjectIds = () => {
    const fileNames = fs.readdirSync(projectsDirectory)

    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }
    })
}

export const getProjectData = (id) => {
    const fullPath = path.join(projectsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
        id: matterResult.data.title.replace(/-/g, ' ').split(' ').map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' '),
        ...matterResult.data,
        content: matterResult.content
    }
}
const KeyInformation = ({ projectData }) => (
    <div className="border-2 w-full md:w-12/12 lg:w-8/12 p-4 pb-6 rounded-md bg-[#1d355e] text-white">
        <h2 className="text-white">Key Information</h2>
        {projectData.link &&
            <div className="text-white">
                &gt; <em>
                    {
                        projectData.type === 'Websites'
                            ? <>Website:</>
                            : projectData.type === 'Standalone Applications'
                                ? <>Application:</>
                                : <>Link:</>
                    }
                </em> <a href={projectData.link} target="_blank" rel="noreferrer">{projectData.link}</a>
            </div>
        }
        {projectData.repository &&
            <div className="text-white">
                &gt; <em>Repository: </em><a href={projectData.repository} target="_blank" rel="noreferrer">Click Here</a>
            </div>
        }
        {projectData.host &&
            <div className="text-white" >
                &gt; <em>Host: </em><a href={projectData.host} target="_blank" rel="noreferrer">{projectData.host}</a>
            </div>
        }
        {projectData.login &&
            <div className="text-white">
                &gt; <em>Login Link: </em><a href={projectData.login} target="_blank" rel="noreferrer">{projectData.login}</a>
            </div>
        }
        {projectData.framework &&
            <div className="text-white">
                &gt; <em>Framework: </em> {projectData.framework}
            </div>
        }
        {projectData.seo &&
            <div className="text-white">
                &gt; <em>SEO: </em> {projectData.seo}{projectData["seo-contact"] && <>; contact: <a href={"mailto:" + projectData["seo-contact"]}>{projectData["seo-contact"]}</a></>}
            </div>
        }
    </div>
)

export default KeyInformation
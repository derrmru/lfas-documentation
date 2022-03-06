import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

const Body = ({ projects, children }) => {
    return (
        <>
            <Header />
            <main className="w-100 text-center mt-32 mb-8">
                <Sidebar projects={projects} />
                <div className="text-left ml-8 md:ml-80 mr-8 w-100 min-height-screen">
                    <div className="w-full min-h-screen">{children}</div>
                    <Footer />
                </div>
            </main>
        </>
    )
}

export default Body
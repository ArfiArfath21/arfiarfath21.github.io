import '@/app/globals.css';
import Navbar from '@/components/Navbar';
import Column from '@/components/Column/Column';

export default function Home() {
    return (
        <main>
            <Navbar activeTab="home"/>
            <Column >
                <div className='relative px-4 sm:px-8 lg:px-12'>
                    <div className='me-auto mb-12 px-12'>
                        <h1 className="lg:text-7xl md:text-5xl text-3xl font-extrabold font-satoshi lg:w-3/5 lg:text-wrap lg:leading-tight">AI Engineer and Data Scientist</h1>
                        <h3 className="lg:text-3xl md:text-2xl text-xl mt-5 text-wrap lg:w-4/5">I'm Arfath, a Senior Data Scientist at <span>Publicis Sapient</span>, where I build AI Solutions. I work on my own projects after hours.</h3>
                    </div>
                    {/* <div className='mx-auto mx-w-2xl lg:max-w-5xl mb-12'>
                        <h1 className="text-4xl">Latest in the blog</h1>
                    </div>
                    <div className='mx-auto mx-w-2xl lg:max-w-5xl mb-12'>
                        <h1 className="text-4xl">Works</h1>
                    </div>
                    <div className='mx-auto mx-w-2xl lg:max-w-5xl mb-12'>
                        <h1 className="text-4xl">Subscribe</h1>
                    </div> */}
                </div>
            </Column>
        </main>
    );
}

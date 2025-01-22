import '@/app/globals.css';
import Navbar from '@/components/Navbar';
import Column from '@/components/Column/Column';
import { BlogTile, BigTile } from '@/components/Blog/Tile';
import Link from 'next/link';


export default function Home() {
    return (
        <main>
            <Navbar activeTab="home" />
            <Column >
                <div className='relative px-8 lg:px-12'>
                    <div className='me-auto mb-12 px-12'>
                        <h1 className="lg:text-7xl md:text-5xl text-3xl font-extrabold font-satoshi lg:w-3/5 lg:text-wrap lg:leading-tight">Everyday Data Science</h1>
                        <h3 className="lg:text-3xl md:text-2xl text-xl mt-5 text-wrap lg:w-4/5">We're <span className='inline-code'>Data Scientists</span> building AI Solutions.<br></br>We work on our own projects after hours.</h3>
                        {/* <h3 className="lg:text-3xl md:text-2xl text-xl mt-5 text-wrap lg:w-4/5">We work on our own projects after hours.</h3> */}
                    </div>
                    <div className='mx-auto mx-w-2xl lg:max-w-5xl mb-12'>
                        <h1 className="text-4xl">Latest in the blog</h1>
                        <div className='mt-8'>
                            <div className='flex lg:flex-row md:flex-row md:flex-wrap flex-col'>
                                <div className='flex-1'>
                                    <BlogTile title="How to deploy FastAPI applications" destination="/" type="Blog" image="" />
                                </div>
                                <div className='flex-1'>
                                    <BlogTile title="Interview with Rakuten" destination="/" type="Blog" />
                                </div>
                            </div>
                            <div className='flex lg:flex-row md:flex-row md:flex-wrap flex-col'>
                                <div className='flex-1'>
                                    <BlogTile title="How Netflix f*cked up" destination="/" type="Case Study" />
                                </div>
                                {/* <div className='flex-1'>
                                    <BlogTile title="" destination="/blog" type="Blogs"/>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className='mx-auto mx-w-2xl lg:max-w-5xl mb-12'>
                        <h1 className="text-4xl">Works</h1>
                        <div className='flex lg:flex-row md:flex-row md:flex-wrap flex-col'>
                            <div className='flex-1 '>
                                <BigTile title="Data Converse" destination="/" type="Project Spotlight" />
                            </div>
                        </div>
                        {/* <BlogTile title="" destination="/blog" type="Work"/> */}
                    </div>
                    <div className='mx-auto mx-w-2xl lg:max-w-5xl mb-12  mt-12'>
                        {/* <h1 className="text-4xl">Subscribe</h1> */}
                        <div className='w-full flex justify-center items-center border rounded-lg'>
                            <div className='p-12 w-full max-w-2xl text-center'>
                                <h2 className='text-2xl font-bold mb-4'>Stay Updated</h2>
                                <p className='mb-4'>Subscribe to our newsletter to get the latest updates.</p>
                                <form>
                                    <input
                                        type='email'
                                        placeholder='Enter your email'
                                        className='w-full p-2 mb-4 border border-gray-300 rounded'
                                    />
                                    <button
                                        type='submit'
                                        className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600'
                                    >
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Column>
            <footer className='h-24 w-full'></footer>
        </main>
    );
}

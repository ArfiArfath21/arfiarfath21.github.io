import { IconButton } from './Icons';
import PersonPhoto from './PersonPhoto';

export default function Navbar() {
    return (
        <div className='top-0 w-full py-8'>
            <div className="flex justify-between h-12 mx-auto lg:px-8 max-w-7xl">

                <PersonPhoto imgSrc = "/assets/Arfi_Photo.png" height="10" width="10"/>
                <div className="flex flex-row justify-around w-auto h-auto border rounded-full py-1 px-3 items-center">
                    <IconButton iconName="home" destination="/" />
                    <IconButton iconName="book" text="Blog" destination="/blog" />
                    <IconButton iconName="person" text="About" destination="/about" />
                    <IconButton iconName="briefcase" text="Work" destination="/work" />
                </div>
                <div>
                    {/* Placeholder */}
                </div>
            </div>
        </div>
    );
};

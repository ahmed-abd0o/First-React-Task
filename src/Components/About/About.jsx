import Star from './../Star and lines/Star';

export default function About() {
    return (
        <div className=" text-white flex flex-col justify-center items-center bg-emerald-400 h-[90vh]">
            <div className="text-4xl font-bold mt-10 uppercase">
                about component
            </div>
            <div>
              <Star white={true}/>
            </div>
            <div className="flex container mx-auto px-12 space-x-12 mt-5">
                <p>
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization.
                </p>
                <p>
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization.
                </p>
            </div>
        </div>
    );
}

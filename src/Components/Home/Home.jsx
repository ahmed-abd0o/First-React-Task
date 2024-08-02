import Star from './../Star and lines/Star';

export default function Home() {
    return (
        <div>
            <div className=" text-white flex flex-col justify-center items-center bg-emerald-400 h-[90vh]">
                <div className="w-72">
                    <img
                        src="../../../public/Home/routeegy.github.io/avataaars.svg"
                        className="w-full"
                        alt=""
                    />
                </div>
                <div>
                    <h1 className="text-4xl font-bold mt-10">
                        START FRAMEWORK
                    </h1>
                    <Star/>
                    <div className="mt-4 text-center">
                        <span>Graphic Artist - </span>
                        <span>Web Designer - </span>
                        <span>illustrator</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

import { faFacebook, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <div className="bg-cyan-900">
            <div className=" *:py-20 *:text-center container mx-auto grid grid-cols-3 text-white ">
                <div className="flex items-center flex-col">
                    <h3 className="text-3xl">LOCATION</h3>
                    <h4 className="mt-3 mb-6">2215 John Daniel Drive</h4>
                    <h4>Clark, MO 65243</h4>
                </div>
                <div className="flex items-center flex-col">
                    <h3 className="text-3xl">AROUND THE WEB</h3>
                    <div className="text-xl space-x-2 *:rounded-full *:border *:p-2 mt-4 ">
                    <FontAwesomeIcon className="hover:text-blue-200 hover:bg-black cursor-pointer" icon={faFacebook} />
                    <FontAwesomeIcon className="hover:text-blue-200 hover:bg-black cursor-pointer" icon={faTwitter} />
                    <FontAwesomeIcon className="hover:text-blue-200 hover:bg-black cursor-pointer" icon={faLinkedinIn} />
                    <FontAwesomeIcon className="hover:text-blue-200 hover:bg-black cursor-pointer" icon={faGlobe} />
                    </div>
                </div>
                <div className="flex items-center flex-col">
                    <h3 className="text-3xl">ABOUT FREELANCER</h3>
                    <p>
                    Freelance is a free to use, licensed Bootstrap theme created by Route.
                    </p>
                </div>
            </div>
        </div>
    );
}

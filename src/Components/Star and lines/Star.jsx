import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Star({white = true}) {
    console.log(white)
    return (
        <>
            <div className="flex items-center mx-auto w-10/12 mt-4 space-x-4 justify-around">
                <span className={` ${white ? "bg-white" : "bg-black"} w-28 h-1 block rounded-xl`}></span>
                <FontAwesomeIcon className="text-xl " icon={faStar} />
                <span className={` ${white ? "bg-white" : "bg-black"} w-28 h-1 block rounded-xl`}></span>
            </div>
        </>
    );
}

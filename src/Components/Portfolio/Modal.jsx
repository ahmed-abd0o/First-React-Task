export default function Modal({state,src}) {

    return (
        <div className={` bg-blue-500 flex justify-center  items-center ${state ? "hidden" : ""} bg-opacity-20 fixed top-0 right-0 left-0 bottom-0  z-20`}>
            <div className="img-container w-5/12">
                <img src={src} alt="" />
            </div>
        </div>
    );
}

import VideoSrc from "../assets/video.png"
function Video() {
    return (
        <div className="mt-4">
            <h1 className="text-[#ff661f] text-center text-[28px] md:text-[40px] font-bold">MorphoAI Launches on YC!</h1>

            <div className="flex justify-center w-full mt-6">
                <img src={VideoSrc} alt="video-logo" className="text-center w-[950px] cursor-pointer" />
            </div>
        </div>
    )
}

export default Video
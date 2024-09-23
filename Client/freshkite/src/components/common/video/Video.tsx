import { useState } from "react";
import VideoPlayerPopup from "./VideoPayer";

interface VideoProps {
    topic: string;
  }
const extractYouTubeVideoId = (url: string) => {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
};
const Video: React.FC<VideoProps> = ({ topic }) =>{
    const [isVideoOpen, setVideoOpen] = useState(false);
    const videoUrl = "https://www.youtube.com/embed/mVvLzmG6Z_Q?si=GQ-gJZA_o2K8MY81";

    // Extract video ID from the YouTube URL
    const videoId = extractYouTubeVideoId(videoUrl);
    console.log("Video ID:", videoId);

    // YouTube thumbnail URL
    const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '';
    console.log("Thumbnail URL:", thumbnailUrl);
    return (
        <div className=" bg-gray-200 dark:bg-gray-900 flex items-center">
            <div
                className="cursor-pointer max-w-xs"
                onClick={() => setVideoOpen(true)}
            >
                <img
                    src={thumbnailUrl}
                    alt="Video Thumbnail"
                    className="rounded-md shadow-lg"
                />
            </div>

            <VideoPlayerPopup
                topic={topic}
                videoUrl={videoUrl}
                isOpen={isVideoOpen}
                onClose={() => setVideoOpen(false)}
            />
        </div>
    )
}
export default Video
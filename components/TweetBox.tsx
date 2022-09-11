import {
  CalendarOutline,
  EmojiHappyOutline,
  LocationMarkerOutline,
  PhotographOutline,
  SearchOutline,
} from "heroicons-react";
import { useState } from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import toast, { Toaster } from "react-hot-toast";

function TweetBox() {
  const [input, setinput] = useState<string>("");

  return (
    <div className="flex flex-col">
      <div className="flex space-x-2 p-2 md:p-5 ">
        <img
          src="https://pbs.twimg.com/profile_images/1564698662764265472/D6PDoW5x_400x400.jpg"
          alt=""
          className="h-14 -14 object-cover 
        rounded-full mt-4"
        />
        <div className="flex flex-1 md:pl-2">
          <form className="flex flex-1 flex-col">
            <input
              type="text"
              value={input}
              onChange={(e) => setinput(e.target.value)}
              placeholder="what`s happening?"
              className="h-24 w-full text-xl outline-none placeholder:text-xl"
            />
            <div className="flex items-center flex-1">
              <div className="flex items-center space-x-2 flex-1 text-twitter">
                <PhotographOutline className="w-5 h-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150 " />
                <SearchOutline className="w-5 h-5  cursor-pointer transition-transform duration-150 ease-out hover:scale-150 " />
                <EmojiHappyOutline className="w-5 h-5  cursor-pointer transition-transform duration-150 ease-out hover:scale-150  " />
                <CalendarOutline className="w-5 h-5   cursor-pointer transition-transform duration-150 ease-out hover:scale-150 " />
                <LocationMarkerOutline className="w-5 h-5  cursor-pointer transition-transform duration-150 ease-out hover:scale-150  " />
              </div>
              <button
                className="bg-twitter rounded-full px-5 py-2
             font-bold text-white disabled:opacity-40"
                disabled={!input}
              >
                Tweet
              </button>
            </div>
          </form>
        </div>
      </div>
      <TwitterTweetEmbed tweetId={"1498516810626478087"} />
    </div>
  );
}

export default TweetBox;

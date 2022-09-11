import { RefreshOutline } from "heroicons-react";
import toast from "react-hot-toast";
import TweetBox from "./TweetBox";

function Feed() {
  function HandleCheck() {
    setTimeout(() => {
      toast.success("Refresh success? 🚀🚀");
    }, 1000);
  }

  return (
    <div className=" col-span-7 border-x lg:col-span-5">
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <RefreshOutline
          className="w-8 h-8 cursor-pointer
       text-twitter mt-5 mr-5 transition-all duration-500 ease-out
       hover:rotate-180 active:scale-125 "
          onClick={HandleCheck}
        />
      </div>
      {/* tweet box */}
      <TweetBox />
    </div>
  );
}

export default Feed;

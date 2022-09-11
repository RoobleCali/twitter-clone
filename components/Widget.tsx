import { SearchOutline } from "heroicons-react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

function Widget() {
  return (
    <div className="px-2 mt-2 space-y-4 col-span-2 hidden lg:inline">
      <div
        className="flex mt-2 items-center space-x-2 bg-gray-100 
    p-3 rounded-full "
      >
        {/* search */}
        <SearchOutline className="h-5 text-gray-400 " />
        <input
          type="text"
          placeholder="Search Titter"
          className="flex-1 outline-none bg-transparent"
        />
      </div>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="ShakuurAlly"
        options={{ height: 1000 }}
      />
    </div>
  );
}

export default Widget;

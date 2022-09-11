import {
  BellOutline,
  HashtagOutline,
  BookmarkOutline,
  CollectionOutline,
  DotsCircleHorizontalOutline,
  MailOutline,
  UserOutline,
  HomeOutline,
} from "heroicons-react";
import SidebarRows from "./SidebarRows";

function Sidebar() {
  return (
    <div className="col-span-2 flex flex-col items-center md:items-start">
      <img
        src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c53e.png"
        alt=""
        className="h-10 w-10 m-3"
      />
      <SidebarRows Icon={HomeOutline} title="Home" />
      <SidebarRows Icon={HashtagOutline} title="Explore" />
      <SidebarRows Icon={BellOutline} title="Notification" />
      <SidebarRows Icon={MailOutline} title="Messages" />
      <SidebarRows Icon={BookmarkOutline} title="Bookmarks" />
      <SidebarRows Icon={CollectionOutline} title="Lists" />
      <SidebarRows Icon={UserOutline} title="Sign in" />
      <SidebarRows Icon={DotsCircleHorizontalOutline} title="More" />
    </div>
  );
}

export default Sidebar;

import React from "react";
import {
  HomeOutline,
  SearchOutline,
  LibraryOutline,
  PlusCircleOutline,
  HeartOutline,
  RssOutline,
} from "heroicons-react";
import SidebarRows from "./SidebarRows";
function Sidebar() {
  return (
    <div className="text-gray-500 p-5 text-sm border-gray-900 space-y-3">
      <SidebarRows title="Home" Icon={HomeOutline} />
      <SidebarRows title="Search" Icon={SearchOutline} />
      <SidebarRows title="Your Library" Icon={LibraryOutline} />
      <hr className="border-t-[0.1px] border-gray-900" />

      <SidebarRows title="Create Playlist" Icon={PlusCircleOutline} />
      <SidebarRows title="Liked songs" Icon={HeartOutline} />
      <SidebarRows title="Your episodes" Icon={RssOutline} />
      <hr className="border-t-[0.1px] border-gray-900" />

      {/* playlist */}
      <p className="cursor-pointer hover:text-white">Playlist Name...</p>
      <p className="cursor-pointer hover:text-white">Playlist Name...</p>
      <p className="cursor-pointer hover:text-white">Playlist Name...</p>
      <p className="cursor-pointer hover:text-white">Playlist Name...</p>
      <p className="cursor-pointer hover:text-white">Playlist Name...</p>
      <p className="cursor-pointer hover:text-white">Playlist Name...</p>
      <p className="cursor-pointer hover:text-white">Playlist Name...</p>
      <p className="cursor-pointer hover:text-white">Playlist Name...</p>
      <p className="cursor-pointer hover:text-white">Playlist Name...</p>
      <p className="cursor-pointer hover:text-white">Playlist Name...</p>
      <p className="cursor-pointer hover:text-white">Playlist Name...</p>
    </div>
  );
}

export default Sidebar;

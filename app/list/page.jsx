import Sidebar from "@/components/Sidebar";
import TopicList from "@/components/TopicList";
import React from "react";

export default function page() {
  return(
    <div>
        <h1 className='text-3xl font-bold'>신청 리스트</h1>
        <Sidebar />
        <TopicList />
    </div>
  )
}
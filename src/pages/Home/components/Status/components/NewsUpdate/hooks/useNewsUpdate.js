import { useState } from "react";

function useNewsUpdate() {
  const [expanded, setExpanded] = useState(false);

  const newsData = [
    {
      title: "New Feature Release",
      description: "We have released an exciting new feature.",
      timestamp: "13:45",
    },
    {
      title: "Important Announcement",
      description: "Please read this important announcement.",
      timestamp: "10:30",
    },
    {
      title: "Senior Implementation Consultant",
      description: "Chief Research Designer",
      timestamp: "12:30",
    },
    {
      title: "Direct Data Strategist",
      description: "Product Group Architect",
      timestamp: "15:30",
    },
    {
      title: "Product Quality Agent",
      description: "Direct Tactics Architect",
      timestamp: "17:30",
    },

    // Add more news items as needed
  ];

  const visibleNewsData = expanded ? newsData : newsData.slice(0, 5);
  const showSeeMore = newsData.length > 5 && !expanded;

  const handleSeeMore = () => {
    setExpanded(true);
  };

  return {
    newsData,
    visibleNewsData,
    showSeeMore,
    handleSeeMore,
  };
}

export default useNewsUpdate;

import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";
import Post from "./Post";

export default function Feed() {
  const posts = [
    {
      id: "1",
      name: "Juan Guzman",
      username: "juanguzman",
      userImg:
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iFQLjEeO6bIQ/v0/-1x-1.jpg",
      img: "https://images.unsplash.com/photo-1660911713510-db313ff34c99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      text: "Nice View!!",
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      name: "Juan Guzman",
      username: "juanguzman",
      userImg:
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iFQLjEeO6bIQ/v0/-1x-1.jpg",
      img: "https://images.unsplash.com/photo-1660860548716-a750ac5b2bbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      text: " View the diamond",
      timestamp: "2 days ago",
    },
  ];

  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-start justify-center px-0 ml-auto w-9 h-9">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <Input />

      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

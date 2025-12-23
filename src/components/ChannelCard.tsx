import { ChannelCardProps } from "../types";

const ChannelCard = ({ channel, setPlayingChannel }: ChannelCardProps) => {
  return (
    <li
      key={channel.id}
      className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 rounded-md p-2 px-4 flex flex-col border border-gray-700 mb-2"
    >
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => {
          setPlayingChannel(channel);
          console.log("Launching channel:", channel);
        }}
      >
        <span className="font-bold text-lg mb-1 text-sky-300 group-hover:text-purple-400 transition-colors duration-200">
          {channel.name}
        </span>
        <span>
          <span className="text-yellow-300">{channel.country}</span>
          <a
            href={channel.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 hover:text-sky-200 ml-2"
          >
            🌐
          </a>
        </span>
      </div>

      <span className="text-xs">
        {channel.categories?.map((cat, i) => (
          <span
            key={cat}
            className={`inline-block px-2 py-0.5 rounded-full mr-1 mb-1 text-xs font-medium ${
              i % 2 === 0 ? "bg-orange-800" : "bg-sky-700"
            } bg-opacity-80`}
          >
            {cat}
          </span>
        ))}
      </span>
    </li>
  );
};

export default ChannelCard;

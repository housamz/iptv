export default function ChannelPlayer({ channel, streams, loading }) {
  // Try to match by channelId, or by title if channel is null
  const filtered = streams.filter(
    (s) =>
      s.channel === channel.id ||
      (s.channel === null &&
        s.title &&
        s.title.trim().toLowerCase() === channel.name.trim().toLowerCase())
  );
  if (loading) return <div className="p-4">Loading stream...</div>;
  if (!filtered.length)
    return <div className="p-4">No streams found for this channel.</div>;

  // Use the first stream for playback
  const stream = filtered[0];

  return (
    <div className="flex justify-center col-span-2 ">
      <div className="w-full relative">
        <h2 className="text-lg font-bold mb-2">{stream.title}</h2>
        <video
          src={stream.url}
          controls
          autoPlay
          className="w-full h-96 bg-black mb-2"
        />
        <div className="text-xs text-gray-500">
          Quality: {stream.quality || "Unknown"}
        </div>
        {stream.referrer && (
          <div className="text-xs text-gray-400">
            Referrer: {stream.referrer}
          </div>
        )}
        {stream.user_agent && (
          <div className="text-xs text-gray-400">
            User-Agent: {stream.user_agent}
          </div>
        )}
      </div>
    </div>
  );
}

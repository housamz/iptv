import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import AppButton from "./AppButton.jsx";
import ChannelCard from "./ChannelCard.jsx";
import ChannelPlayer from "./ChannelPlayer.jsx";
import {
  fetchChannels,
  fetchStreams,
  fetchCountries,
  fetchCategories,
} from "../services/apiService";
import SearchBar from "./SearchBar.jsx";
import { Header } from "./Header.jsx";

export default function ChannelBrowser({ tab: initialTab }) {
  const PAGE_SIZE = 50;
  const [channels, setChannels] = useState([]);
  const [loadingStreams, setLoadingStreams] = useState(true);
  const [page, setPage] = useState(1);
  const [playingChannel, setPlayingChannel] = useState(null);
  const [search, setSearch] = useState("");
  const [streams, setStreams] = useState([]);
  const [tab, setTab] = useState(initialTab || "country");
  const [countries, setCountries] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchChannels().then((data) => {
      setChannels(data);
    });
    fetchStreams().then((data) => {
      setStreams(data);
      setLoadingStreams(false);
    });
    fetchCountries().then((data) => setCountries(data));
    fetchCategories().then((data) => setCategories(data));
  }, []);

  const filtered = useMemo(() => {
    let result = channels;
    if (tab === "country" && selectedCountry) {
      result = result.filter((c) => c.country === selectedCountry);
    } else if (tab === "category" && selectedCategory) {
      result = result.filter(
        (c) => c.categories && c.categories.includes(selectedCategory)
      );
    }
    if (search) {
      result = result.filter(
        (c) =>
          c.name.toLowerCase().includes(search.toLowerCase()) ||
          (c.alt_names &&
            c.alt_names.join(" ").toLowerCase().includes(search.toLowerCase()))
      );
    }
    return result.slice(0, page * PAGE_SIZE);
  }, [channels, search, page, tab, selectedCountry, selectedCategory]);

  const handleLoadMore = () => setPage((p) => p + 1);
  const handleTab = (t) => {
    setTab(t);
    setPage(1);
    setSearch("");
    setSelectedCountry("");
    setSelectedCategory("");
    navigate(`/${t}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 text-white py-8 px-2">
      <div className="max-w-5xl mx-auto">
        <Header tab={tab} handleTab={handleTab} />
        <SearchBar
          search={search}
          setSearch={setSearch}
          tab={tab}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          countries={countries}
          categories={categories}
          setPage={setPage}
        />
        <div className="grid grid-cols-3 gap-4">
          <div className="max-h-112 overflow-scroll">
            <ul className="grid grid-cols-1">
              {filtered.map((channel) => (
                <ChannelCard
                  key={channel.id}
                  channel={channel}
                  setPlayingChannel={setPlayingChannel}
                />
              ))}
            </ul>
            {filtered.length < channels.length && (
              <AppButton
                className="mt-10 block mx-auto px-8 py-3 rounded-xl text-lg"
                onClick={handleLoadMore}
              >
                Load More
              </AppButton>
            )}
          </div>
          {playingChannel && (
            <ChannelPlayer
              channel={playingChannel}
              streams={streams}
              loading={loadingStreams}
            />
          )}
        </div>
      </div>
    </div>
  );
}

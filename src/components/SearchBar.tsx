import { SearchBarProps } from "../types";

const SearchBar = ({
  search,
  setSearch,
  tab,
  selectedCountry,
  setSelectedCountry,
  selectedCategory,
  setSelectedCategory,
  countries,
  categories,
  setPage,
}: SearchBarProps) => {
  return (
    <div className="flex justify-between items-center mb-6 gap-4">
      <input
        className="border border-gray-700 focus:ring-2 focus:ring-purple-500 px-4 py-2 rounded-md w-full bg-gray-800 text-white placeholder-gray-400"
        placeholder="🔍 Search channels..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
      />
      {tab === "country" && (
        <select
          className="px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700"
          value={selectedCountry}
          onChange={(e) => {
            setSelectedCountry(e.target.value);
            setPage(1);
          }}
        >
          <option value="">Select Country</option>
          {countries.map((c) => (
            <option key={c.code} value={c.code}>
              {c.name}
            </option>
          ))}
        </select>
      )}
      {tab === "category" && (
        <select
          className="px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700"
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setPage(1);
          }}
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default SearchBar;

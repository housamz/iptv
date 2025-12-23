import AppButton from "./AppButton";

export const Header = ({ tab, handleTab }) => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-500 to-yellow-400">
        IPTV Channel Browser
      </h1>
      <div className="flex gap-2 mb-6">
        <AppButton
          className={`px-4 py-2 rounded-md ${
            tab === "country" ? "ring-2 ring-yellow-400" : ""
          }`}
          onClick={() => handleTab("country")}
        >
          By Country
        </AppButton>
        <AppButton
          className={`px-4 py-2 rounded-md ${
            tab === "category" ? "ring-2 ring-yellow-400" : ""
          }`}
          onClick={() => handleTab("category")}
        >
          By Category
        </AppButton>
        <AppButton
          className={`px-4 py-2 rounded-md ${
            tab === "all" ? "ring-2 ring-yellow-400" : ""
          }`}
          onClick={() => handleTab("all")}
        >
          All
        </AppButton>
      </div>
    </div>
  );
};

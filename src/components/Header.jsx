import AppButton from "./AppButton";

export const Header = ({ tab, handleTab }) => {
  const LINKS = ["country", "category", "all"];
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-500 to-yellow-400">
        TeeVee <span className="text-sm">IPTV Channel Browser</span>
      </h1>
      <div className="flex gap-2 mb-6">
        {LINKS.map((link) => (
          <AppButton
            key={link}
            className={tab === link ? "ring-2 ring-yellow-400" : ""}
            onClick={() => handleTab(link)}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </AppButton>
        ))}
      </div>
    </div>
  );
};

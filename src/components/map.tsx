const Map = () => {
  return (
    <div className="w-full h-[300px] rounded-lg overflow-hidden">
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        src="https://www.openstreetmap.org/export/embed.html?bbox=2.3319244384765625%2C48.85661400117681%2C2.3467731475830083%2C48.86542324190692&amp;layer=mapnik"
      ></iframe>
    </div>
  );
};

export default Map;

export default function MapTextMarker({ children, className, style, backgroundColor, onClick }) {
  return (
    <div className="mb-[10px]">
      <div className={`${className} p-1 rounded-lg shadow-md shadow-black/70`} style={{ backgroundColor: backgroundColor || 'white' }}>
        {children}
      </div>
      <div className="w-full h-[7px] overflow-clip">
        <div className="w-[10px] h-[10px] rotate-45 translate-y-[-4.5px] mx-auto shadow-md shadow-black/70" style={{ backgroundColor: backgroundColor || 'white' }}></div>
      </div>
    </div>
  );
}
import { baseImgUrl } from "../constant";

const DetailDisplay = ({ title, data }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div className="flex gap-5">
        {data.map((item) =>
          item.logo_path ? (
            <div key={item.name} className="bg-white rounded p-1">
              <img
                className="w-[100px] h-[40px] object-contain"
                src={baseImgUrl + item.logo_path}
              ></img>
            </div>
          ) : (
            <span key={item.name}>{item.name}</span>
          )
        )}
      </div>
    </div>
  );
};

export default DetailDisplay;

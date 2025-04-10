export default function Product1({ image, title, tag, description }) {
  return (
    <div className="flex bg-gray-200 lg:p-5 p-3 gap-3 rounded-[12px] border-[#A2BADE] border-2">
      <img
        className="lg:w-[116px] lg:h-[116px] w-[82px] h-[91px]"
        src={image}
        alt={title}
      />
      <div>
        <h1 className="font-bold">{title}</h1>
        <h1 className="mt-1 bg-[#2AA7DF] w-22 p-1 text-[12px] text-white rounded-[6px]">
          {tag}
        </h1>
        <p className="lg:text-[15px] text-[10px] pt-1">{description}</p>
      </div>
    </div>
  );
}

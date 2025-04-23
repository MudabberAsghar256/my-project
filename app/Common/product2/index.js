export default function Product2({ image, title, description }) {
  return (
    <div className="flex xl:w-[424px]  xl:h-[114px] bg-gray-200  p-3 gap-3 rounded-[12px] border-[#A2BADE] border-2">
      <img
        className="lg:w-[82px] lg:h-[82px] w-[82px] h-[91px] rounded-[16px]"
        src={image}
        alt={title}
      />
      <div>
        <h1 className="font-bold text=[20px] text-black pt-3 lg:pt-0">
          {title}
        </h1>

        <p className="lg:text-[16px] text-[12.5px] pt-1 text-[#757575]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Product1({ image, title, tag, tagColor, description }) {
  return (
    <div className="flex xl:w-[424px] xl:h-[148px] bg-gray-200 lg:p-[16px] p-3 lg:gap-[20px] gap-[16px] rounded-[10px] border-[#A2BADE] border-2">
      <img
        className="lg:w-[116px] lg:h-[116px] w-[82px] h-[91px]"
        src={image}
        alt={title}
      />
      <div>
        <h1 className="font-bold text-black lg:text-[20px] text-[16px]">
          {title}
        </h1>

        <div
          className={` text-[12px] text-white font-medium rounded-[6px]  ${tagColor} mt-1`}
        >
          {tag}
        </div>
        <p className="lg:text-[14px] text-[10px] pt-1 text-[#757575]">
          {description}
        </p>
      </div>
    </div>
  );
}

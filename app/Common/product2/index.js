export default function Product2({ image, title, description }) {
  return (
    <div className="flex bg-gray-200 lg:p-5 p-3 gap-3 rounded-[12px] border-[#A2BADE] border-2">
      <img
        className="lg:w-[82px] lg:h-[82px] w-[82px] h-[91px]"
        src={image}
        alt={title}
      />
      <div>
        <h1 className="font-bold">{title}</h1>

        <p className="lg:text-[16px] text-[12.5px] pt-1">{description}</p>
      </div>
    </div>
  );
}

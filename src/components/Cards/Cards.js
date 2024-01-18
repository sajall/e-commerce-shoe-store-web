import { Link } from "react-router-dom";

export function Cards({ prod }) {
  const { images, name, colors, price, discountedPrice, _id } = prod;
  return (
    <Link to={`/product-details/${_id}`}>
      <div className="w-[350px] h-[500px] mt-[350px] bg-white shadow-xl">
        <div>
          <img src={images[0]} alt="" />
        </div>
        <div>
          <p className="font-bold text-xl">{name}</p>
          {colors.map((col, i) => (
            <span key={i} className="text-lg">
              {col} /{" "}
            </span>
          ))}
          <div className="flex gap-5 justyfy-between">
            <span className="text-lg text-red-700 line-thorugh">{price}</span>
            <span className="text-lg text-green-700 grow">{discountedPrice}</span>
            <span className="text-lg te(discountedPrice/price) *100xt-blue-700">{Math.round((discountedPrice/price) *100)} %</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

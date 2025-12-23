import { FaStar, FaEye, FaBookmark, FaShareAlt } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    image_url,
    rating,
    total_view,
    details,
  } = news;

  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-gray-100">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-sm">{author.name}</h4>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-500">
          <FaBookmark className="cursor-pointer hover:text-black" />
          <FaShareAlt className="cursor-pointer hover:text-black" />
        </div>
      </div>

      {/* Title */}
      <div className="p-4">
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>

      {/* ✅ Image (FIXED – no crop) */}
      <div className="bg-gray-100 flex justify-center">
        <img
          src={image_url}
          alt={title}
          className="max-h-[450px] w-full object-contain"
        />
      </div>

      {/* Details */}
      <div className="p-4">
        <p className="text-gray-600 text-sm leading-relaxed">
          {details.length > 250 ? details.slice(0, 250) + "..." : details}
          <span className="text-orange-500 font-semibold cursor-pointer ml-1">
            Read More
          </span>
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between p-4 border-t">
        <div className="flex items-center gap-1 text-orange-500">
          {Array.from({ length: rating.number }).map((_, idx) => (
            <FaStar key={idx} />
          ))}
          <span className="text-gray-600 ml-2">{rating.number}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

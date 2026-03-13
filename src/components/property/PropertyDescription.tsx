interface PropertyDescriptionProps {
  description: string;
}

export default function PropertyDescription({
  description,
}: PropertyDescriptionProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-md animate-fade-in">
      <h2 className="text-3xl font-bold text-luxury-black mb-6 font-serif">
        Property Description
      </h2>

      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
        {description.split("\n\n").map((paragraph, index) => (
          <p key={index} className="text-base leading-loose">
            {paragraph.trim()}
          </p>
        ))}
      </div>
    </div>
  );
}

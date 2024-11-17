const SizeDetails = ({ property }) => {
  return (
    <div className="mb-4 flex flex-wrap">
      <div className="w-full sm:w-1/3 pr-2">
        <label htmlFor="beds" className="block text-gray-700 font-bold mb-2">
          Beds
        </label>
        <input
          type="number"
          id="beds"
          name="beds"
          className="border rounded w-full py-2 px-3"
          defaultValue={property?.beds}
          required
        />
      </div>
      <div className="w-full sm:w-1/3 px-2">
        <label htmlFor="baths" className="block text-gray-700 font-bold mb-2">
          Baths
        </label>
        <input
          type="number"
          id="baths"
          name="baths"
          className="border rounded w-full py-2 px-3"
          defaultValue={property?.baths}
          required
        />
      </div>
      <div className="w-full sm:w-1/3 pl-2">
        <label
          htmlFor="square_feet"
          className="block text-gray-700 font-bold mb-2"
        >
          Square Feet
        </label>
        <input
          type="number"
          id="square_feet"
          name="square_feet"
          className="border rounded w-full py-2 px-3"
          defaultValue={property?.square_feet}
          required
        />
      </div>
    </div>
  );
};

export { SizeDetails };

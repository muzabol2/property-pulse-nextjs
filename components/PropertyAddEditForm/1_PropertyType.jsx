const PropertyType = ({ value }) => {
  return (
    <div className="mb-4">
      <label htmlFor="type" className="block text-gray-700 font-bold mb-2">
        Property Type
      </label>
      <select
        id="type"
        name="type"
        className="border rounded w-full py-2 px-3"
        defaultValue={value}
        required
      >
        <option value="Apartment">Apartment</option>
        <option value="Condo">Condo</option>
        <option value="House">House</option>
        <option value="CabinOrCottage">Cabin or Cottage</option>
        <option value="Room">Room</option>
        <option value="Studio">Studio</option>
        <option value="Other">Other</option>
      </select>
    </div>
  );
};

export { PropertyType };

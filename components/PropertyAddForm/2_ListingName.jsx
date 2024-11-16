const ListingName = () => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2">Listing Name</label>
      <input
        type="text"
        id="name"
        name="name"
        className="border rounded w-full py-2 px-3 mb-2"
        placeholder="eg. Beautiful Apartment In Miami"
        required
      />
    </div>
  );
};

export { ListingName };

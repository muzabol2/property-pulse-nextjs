const Description = ({ value }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor="description"
        className="block text-gray-700 font-bold mb-2"
      >
        Description
      </label>
      <textarea
        id="description"
        name="description"
        className="border rounded w-full py-2 px-3"
        rows="4"
        placeholder="Add an optional description of your property"
        defaultValue={value}
      ></textarea>
    </div>
  );
};

export { Description };

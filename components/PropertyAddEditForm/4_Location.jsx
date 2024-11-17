const locationFields = [
  { id: "street", placeholder: "Street", required: false },
  { id: "city", placeholder: "City", required: true },
  { id: "state", placeholder: "State", required: true },
  { id: "zipcode", placeholder: "Zipcode", required: false },
];

const Location = ({ value }) => {
  return (
    <div className="mb-4 bg-blue-50 p-4">
      <label className="block text-gray-700 font-bold mb-2">Location</label>
      {locationFields.map(({ id, placeholder, required }) => (
        <input
          key={id}
          type="text"
          id={id}
          name={`location.${id}`}
          className="border rounded w-full py-2 px-3 mb-2"
          placeholder={placeholder}
          required={required}
          defaultValue={value?.[id] || ""}
        />
      ))}
    </div>
  );
};
export { Location };

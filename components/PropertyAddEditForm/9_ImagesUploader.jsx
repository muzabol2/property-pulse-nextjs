const ImagesUploader = () => {
  return (
    <div className="mb-4">
      <label htmlFor="images" className="block text-gray-700 font-bold mb-2">
        Images (Select up to 4 images)
      </label>
      <input
        type="file"
        id="images"
        name="images"
        className="border rounded w-full py-2 px-3"
        accept="image/*"
        multiple
        required
      />
    </div>
  );
};

export { ImagesUploader };

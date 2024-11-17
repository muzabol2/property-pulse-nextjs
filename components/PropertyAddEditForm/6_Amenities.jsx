const amenities = [
  { id: "wifi", label: "Wifi" },
  { id: "kitchen", label: "Full kitchen" },
  { id: "washer_dryer", label: "Washer & Dryer" },
  { id: "free_parking", label: "Free Parking" },
  { id: "pool", label: "Swimming Pool" },
  { id: "internet", label: "High-Speed Internet" },
  { id: "hot_tub", label: "Hot Tub" },
  { id: "24_7_security", label: "24/7 Security" },
  { id: "wheelchair_accessible", label: "Wheelchair Accessible" },
  { id: "elevator_access", label: "Elevator Access" },
  { id: "dishwasher", label: "Dishwasher" },
  { id: "gym_fitness_center", label: "Gym/Fitness Center" },
  { id: "air_conditioning", label: "Air Conditioning" },
  { id: "balcony_patio", label: "Balcony/Patio" },
  { id: "smart_tv", label: "Smart TV" },
  { id: "coffee_maker", label: "Coffee Maker" },
  { id: "grill", label: "Outdoor Grill/BBQ" },
];

const Amenities = ({ value }) => (
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Amenities</label>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
      {amenities.map((amenity) => (
        <div key={amenity.id}>
          <input
            type="checkbox"
            id={`amenity_${amenity.id}`}
            name="amenities"
            value={amenity.label}
            defaultChecked={value?.includes(amenity.label) || false}
            className="mr-2"
          />
          <label htmlFor={`amenity_${amenity.id}`}>{amenity.label}</label>
        </div>
      ))}
    </div>
  </div>
);

export { Amenities };

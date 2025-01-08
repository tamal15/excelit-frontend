import { useState } from 'react';

const DetailedInfoPage = () => {
  const [formData, setFormData] = useState({
    condition: 'used',
    brand: '',
    model: '',
    edition: '',
    features: [],
    description: '',
    price: '',
    images: [],
    name: '',
    email: '',
    phone: '',
    termsAccepted: false,
  });

  const featuresOptions = [
    '4G',
    '5G',
    'Dual SIM',
    'Micro SIM',
    'Mini SIM',
    'USB Type-B Port',
    'USB Type-C Port',
    'Fast Charging',
    'Flash Charging',
    'Android',
    'Windows',
    'iOS',
    'Expandable Memory',
    '4GB RAM',
    '6GB RAM',
    '8GB RAM',
    '12GB RAM',
    'Dual Camera',
    'Triple Camera',
    'Dual LED Flash',
    'Quad LED Flash',
    'Bluetooth',
    'WiFi',
    'GPS',
    'Fingerprint Sensor',
    'Infrared Port',
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox' && name === 'features') {
      setFormData((prev) => ({
        ...prev,
        features: checked
          ? [...prev.features, value]
          : prev.features.filter((feature) => feature !== value),
      }));
    } else if (type === 'checkbox' && name === 'termsAccepted') {
      setFormData((prev) => ({ ...prev, termsAccepted: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...files],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert('Please accept the terms and conditions before submitting.');
      return;
    }
    console.log('Form submitted:', formData);
    alert('Ad posted successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">বিস্তারিত তথ্য দিন</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">কন্ডিশন</label>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="condition"
                value="used"
                checked={formData.condition === 'used'}
                onChange={handleInputChange}
              />
              ব্যবহৃত
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="condition"
                value="new"
                checked={formData.condition === 'new'}
                onChange={handleInputChange}
              />
              নতুন
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">ব্র্যান্ড</label>
            <input
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded-md"
              placeholder="ব্র্যান্ড লিখুন"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">মডেল</label>
            <input
              type="text"
              name="model"
              value={formData.model}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded-md"
              placeholder="মডেল লিখুন"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">বিবরণ</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full border border-gray-300 p-2 rounded-md"
            placeholder="পণ্যের বিবরণ দিন"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">মূল্য (৳)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className="w-full border border-gray-300 p-2 rounded-md"
            placeholder="পণ্যের মূল্য লিখুন"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">ফিচার</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {featuresOptions.map((feature) => (
              <label key={feature} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="features"
                  value={feature}
                  checked={formData.features.includes(feature)}
                  onChange={handleInputChange}
                />
                {feature}
              </label>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">ছবি যোগ করুন</label>
          <input
            type="file"
            multiple
            onChange={handleImageUpload}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">নাম</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded-md"
              placeholder="আপনার নাম লিখুন"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">ইমেইল</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded-md"
              placeholder="আপনার ইমেইল লিখুন"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">ফোন নাম্বার</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full border border-gray-300 p-2 rounded-md"
            placeholder="আপনার ফোন নাম্বার লিখুন"
          />
        </div>

        <div className="mb-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleInputChange}
            />
            আমি শর্তাবলী এবং নীতিমালা গুলো পড়েছি এবং গ্রহণ করছি
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          বিজ্ঞাপন পোস্ট করুন
        </button>
      </form>
    </div>
  );
};

export default DetailedInfoPage;

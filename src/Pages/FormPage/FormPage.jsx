import axios from 'axios';
import  { useState } from 'react';
const image_hosting_key = "9aa445fc9b5e81a67e633b362bec2003";
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const FormPage = () => {
    const [formData, setFormData] = useState({
        category: "",
        subCategory: "",
        division: "",
        district: "",
        localArea: "",
        details: "",
      });
    
      const [step, setStep] = useState(1);
    
      const [formDatas, setFormDatas] = useState({
        condition: "used",
        brand: "",
        model: "",
        edition: "",
        features: [],
        description: "",
        price: "",
        images: [],
        name: "",
        email: "",
        phone: "",
        termsAccepted: false,
      });
    
      const featuresOptions = [
        "4G",
        "5G",
        "Dual SIM",
        "Micro SIM",
        "Mini SIM",
        "USB Type-B Port",
        "USB Type-C Port",
        "Fast Charging",
        "Flash Charging",
        "Android",
        "Windows",
        "iOS",
        "Expandable Memory",
        "4GB RAM",
        "6GB RAM",
        "8GB RAM",
        "12GB RAM",
        "Dual Camera",
        "Triple Camera",
        "Dual LED Flash",
        "Quad LED Flash",
        "Bluetooth",
        "WiFi",
        "GPS",
        "Fingerprint Sensor",
        "Infrared Port",
      ];
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
    
      const handleInputChanges = (e) => {
        const { name, value, type, checked } = e.target;
    
        if (type === "checkbox" && name === "features") {
          setFormDatas((prev) => ({
            ...prev,
            features: checked
              ? [...prev.features, value]
              : prev.features.filter((feature) => feature !== value),
          }));
        } else if (type === "checkbox" && name === "termsAccepted") {
          setFormDatas((prev) => ({ ...prev, termsAccepted: checked }));
        } else {
          setFormDatas((prev) => ({ ...prev, [name]: value }));
        }
      };
    
      const handleImageUpload = async (e) => {
        const files = Array.from(e.target.files);
        const uploadedImages = [];
    
        for (const file of files) {
          const formData = new FormData();
          formData.append("image", file);
    
          try {
            const response = await axios.post(image_hosting_api, formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            });
            uploadedImages.push(response.data.data.url);
          } catch (error) {
            console.error("Error uploading image:", error);
          }
        }
    
        setFormDatas((prev) => ({
          ...prev,
          images: [...prev.images, ...uploadedImages],
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!formDatas.termsAccepted) {
          alert("Please accept the terms and conditions before submitting.");
          return;
        }
    
        const combinedData = { ...formData, ...formDatas };
    
        try {
          const response = await axios.post("https://excelit-backend.onrender.com/api/form-submit", combinedData);
    
          if (response.status === 200) {
            alert("ডেটা সফলভাবে জমা হয়েছে!");
            setFormData({
              category: "",
              subCategory: "",
              division: "",
              district: "",
              localArea: "",
              details: "",
            });
            setFormDatas({
              condition: "used",
              brand: "",
              model: "",
              edition: "",
              features: [],
              description: "",
              price: "",
              images: [],
              name: "",
              email: "",
              phone: "",
              termsAccepted: false,
            });
            setStep(1);
          } else {
            alert("ডেটা জমা দিতে ব্যর্থ হয়েছে। আবার চেষ্টা করুন।");
          }
        } catch (error) {
          console.error("ডেটা জমা দেওয়ার সময় ত্রুটি:", error);
        }
      };
    

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
        {/* Step 1: Select Category */}
        {step === 1 && (
          <div>
            <h2 className="text-lg font-bold mb-4">একটি শ্রেণী নির্বাচন করুন</h2>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
            >
              <option value="">শ্রেণী নির্বাচন করুন</option>
              <option value="mobile">মোবাইল</option>
              <option value="electronics">ইলেকট্রনিক্স</option>
              {/* Add more categories */}
            </select>
            <button
              type="button"
              onClick={() => setStep(2)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              পরবর্তী
            </button>
          </div>
        )}

        {/* Step 2: Select Sub-Category */}
        {step === 2 && (
          <div>
            <h2 className="text-lg font-bold mb-4">একটি উপ-শ্রেণী নির্বাচন করুন</h2>
            <select
              name="subCategory"
              value={formData.subCategory}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
            >
              <option value="">উপ-শ্রেণী নির্বাচন করুন</option>
              <option value="mobile_phone">মোবাইল ফোন</option>
              <option value="mobile_accessories">মোবাইল এক্সেসরিজ</option>
              {/* Add more sub-categories */}
            </select>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
            >
              পূর্ববর্তী
            </button>
            <button
              type="button"
              onClick={() => setStep(3)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              পরবর্তী
            </button>
          </div>
        )}

        {/* Step 3: Select Division */}
        {step === 3 && (
          <div>
            <h2 className="text-lg font-bold mb-4">শহর বা বিভাগ নির্বাচন করুন</h2>
            <select
              name="division"
              value={formData.division}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
            >
              <option value="">বিভাগ নির্বাচন করুন</option>
              <option value="dhaka">ঢাকা</option>
              <option value="chittagong">চট্টগ্রাম</option>
              {/* Add more divisions */}
            </select>
            <button
              type="button"
              onClick={() => setStep(2)}
              className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
            >
              পূর্ববর্তী
            </button>
            <button
              type="button"
              onClick={() => setStep(4)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              পরবর্তী
            </button>
          </div>
        )}

        {/* Step 4: Select District */}
        {step === 4 && (
          <div>
            <h2 className="text-lg font-bold mb-4">ঢাকা-এর মধ্যে একটি স্থানীয় এলাকা নির্বাচন করুন</h2>
            <select
              name="district"
              value={formData.district}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
            >
              <option value="">স্থানীয় এলাকা নির্বাচন করুন</option>
              <option value="uttara">উত্তরা</option>
              <option value="dhanmondi">ধানমন্ডি</option>
              {/* Add more districts */}
            </select>
            <button
              type="button"
              onClick={() => setStep(3)}
              className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
            >
              পূর্ববর্তী
            </button>
            <button
              type="button"
              onClick={() => setStep(5)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              পরবর্তী
            </button>
          </div>
        )}

        {/* Step 5: Enter Local Area */}
        {step === 5 && (
          <div>
            <h2 className="text-lg font-bold mb-4">স্থানীয় এলাকা নির্বাচন করুন</h2>
            <input
              type="text"
              name="localArea"
              value={formData.localArea}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              placeholder="স্থানীয় এলাকা লিখুন"
            />
            <button
              type="button"
              onClick={() => setStep(4)}
              className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
            >
              পূর্ববর্তী
            </button>
            <button
              type="button"
              onClick={() => setStep(6)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              পরবর্তী
            </button>
          </div>
        )}

        {/* Step 6: Enter Details */}
        {step === 6 && (
          <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
          <h1 className="text-2xl font-bold mb-4">বিস্তারিত তথ্য দিন</h1>
    
       
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">কন্ডিশন</label>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="condition"
                    value="used"
                    checked={formDatas.condition === 'used'}
                    onChange={handleInputChanges}
                  />
                  ব্যবহৃত
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="condition"
                    value="new"
                    checked={formDatas.condition === 'new'}
                    onChange={handleInputChanges}
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
                  value={formDatas.brand}
                  onChange={handleInputChanges}
                  className="w-full border border-gray-300 p-2 rounded-md"
                  placeholder="ব্র্যান্ড লিখুন"
                />
              </div>
    
              <div>
                <label className="block text-gray-700 font-medium mb-2">মডেল</label>
                <input
                  type="text"
                  name="model"
                  value={formDatas.model}
                  onChange={handleInputChanges}
                  className="w-full border border-gray-300 p-2 rounded-md"
                  placeholder="মডেল লিখুন"
                />
              </div>
            </div>
    
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">বিবরণ</label>
              <textarea
                name="description"
                value={formDatas.description}
                onChange={handleInputChanges}
                className="w-full border border-gray-300 p-2 rounded-md"
                placeholder="পণ্যের বিবরণ দিন"
              />
            </div>
    
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">মূল্য (৳)</label>
              <input
                type="number"
                name="price"
                value={formDatas.price}
                onChange={handleInputChanges}
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
                      checked={formDatas.features.includes(feature)}
                      onChange={handleInputChanges}
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
                  value={formDatas.name}
                  onChange={handleInputChanges}
                  className="w-full border border-gray-300 p-2 rounded-md"
                  placeholder="আপনার নাম লিখুন"
                />
              </div>
    
              <div>
                <label className="block text-gray-700 font-medium mb-2">ইমেইল</label>
                <input
                  type="email"
                  name="email"
                  value={formDatas.email}
                  onChange={handleInputChanges}
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
                value={formDatas.phone}
                onChange={handleInputChanges}
                className="w-full border border-gray-300 p-2 rounded-md"
                placeholder="আপনার ফোন নাম্বার লিখুন"
              />
            </div>
    
            <div className="mb-4">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  checked={formDatas.termsAccepted}
                  onChange={handleInputChanges}
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
        
        </div>
        )}
      </form>
    </div>
  );
};

export default FormPage;

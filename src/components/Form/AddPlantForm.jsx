import { useForm } from "react-hook-form";
import { imageUpload } from "../../Utils";

const AddPlantForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, description, quantity, price, category, image } = data;
    const imgFile = image[0];
    const imgUrl = await imageUpload(imgFile);
    const plantData = {
      image: imgUrl,
      name,
      description,
      quantity,
      price,
      category,
    };

    console.table(plantData);
  };

  return (
    <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            {/* Name */}
            <div className="space-y-1 text-sm">
              <label htmlFor="name" className="block text-gray-600">
                Name
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                id="name"
                type="text"
                placeholder="Plant Name"
                {...register("name", {
                  required: "name lagbe",
                  maxLength: {
                    value: 20,
                    message: "must be 20 word",
                  },
                })}
              />
              {errors.name && (
                <p className="text-red-600 text-xs">{errors.name.message}</p>
              )}
            </div>
            {/* Category */}
            <div className="space-y-1 text-sm">
              <label htmlFor="category" className="block text-gray-600 ">
                Category
              </label>
              <select
                className="w-full px-4 py-3 border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                name="category"
                {...register("Category", {
                  required: "category lagbe",
                })}
              >
                <option value="Indoor">Indoor</option>
                <option value="Outdoor">Outdoor</option>
                <option value="Succulent">Succulent</option>
                <option value="Flowering">Flowering</option>
              </select>
              {errors.category && (
                <p className="text-red-600 text-xs">
                  {errors.category.message}
                </p>
              )}
            </div>
            {/* Description */}
            <div className="space-y-1 text-sm">
              <label htmlFor="description" className="block text-gray-600">
                Description
              </label>

              <textarea
                id="description"
                placeholder="Write plant description here..."
                className="block rounded-md focus:lime-300 w-full h-32 px-4 py-3 text-gray-800  border border-lime-300 bg-white focus:outline-lime-500 "
                {...register("description", {
                  required: "description lagbe",
                })}
              ></textarea>
            </div>
            {errors.description && (
              <p className="text-red-600 text-xs">
                {errors.description.message}
              </p>
            )}
          </div>
          <div className="space-y-6 flex flex-col">
            {/* Price & Quantity */}
            <div className="flex justify-between gap-2">
              {/* Price */}
              <div className="space-y-1 text-sm">
                <label htmlFor="price" className="block text-gray-600 ">
                  Price
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                  id="price"
                  type="number"
                  placeholder="Price per unit"
                  {...register("price", {
                    required: "price lagbe",
                    min: { value: 0, message: "price tik kore daw" },
                  })}
                />
                {errors.price && (
                  <p className="text-red-600 text-xs">
                    {errors.category.message}
                  </p>
                )}
              </div>

              {/* Quantity */}
              <div className="space-y-1 text-sm">
                <label htmlFor="quantity" className="block text-gray-600">
                  Quantity
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                  id="quantity"
                  type="number"
                  placeholder="Available quantity"
                  {...register("quantity", {
                    required: "quantity lagbe",
                    min: { value: 0, message: "price tik kore daw" },
                  })}
                />
                {errors.quantity && (
                  <p className="text-red-600 text-xs">
                    {errors.quantity.message}
                  </p>
                )}
              </div>
            </div>
            {/* Image */}
            <div className=" p-4  w-full  m-auto rounded-lg grow">
              <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
                <div className="flex flex-col w-max mx-auto text-center">
                  <label>
                    <input
                      className="text-sm cursor-pointer w-36 hidden"
                      type="file"
                      id="image"
                      accept="image/*"
                      hidden
                      {...register("image", {
                        required: "image lagbe",
                      })}
                    />
                    {errors.image && (
                      <p className="text-red-600 text-xs">
                        {errors.image.message}
                      </p>
                    )}
                    <div className="bg-lime-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-lime-500">
                      Upload
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full cursor-pointer p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-lime-500 "
            >
              Save & Continue
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddPlantForm;

import React from "react";
import toast from "react-hot-toast";

const AddService = () => {
  const Handleadd = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const img = form.photourl.value;
    const price = form.price.value;
    const description = form.review.value;
    console.log(name, img, price, description);
    const addService = {
      name,
      img,
      price,
      description,
    };
    fetch("http://localhost:5000/service", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          console.log(data);
          toast.success("Your Service is Added. Please Check Service Page");
          form.reset();
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <div>
        <h2 className="text-4xl font-mono font-bold text-center py-10">
          Please Update your Review !
        </h2>
        <form onSubmit={Handleadd} className="p-5 container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div>
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">
                  Photo Url (Your Photo must be (1000px X 1200px))
                </span>
              </label>
              <input
                type="text"
                name="photourl"
                placeholder="Photo Url"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                name="price"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <textarea
            name="review"
            className="textarea textarea-bordered mt-5 w-full h-32"
            placeholder="Description"
          ></textarea>
          <button className="btn btn-outline btn-sm">Update</button>
        </form>
      </div>
    </div>
  );
};

export default AddService;

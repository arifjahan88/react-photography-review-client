import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";

const ServiceReview = () => {
  const { user } = useContext(AuthContext);

  const HandleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photourl = form.photourl.value;
    const review = form.review.value;
    console.log(name, photourl, review);
    const servicereview = {
      name,
      photourl,
      review,
      urername: user.displayName,
      email: user.email,
      userphoto: user.photoURL,
    };
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("photoToken")}`,
      },
      body: JSON.stringify(servicereview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          console.log(data);
          alert("Your Review is Published");
          form.reset();
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h2 className="text-4xl font-mono font-bold text-center py-10">
        Please review our Service !
      </h2>
      <form onSubmit={HandleSubmit} className="p-5 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="photourl"
            placeholder="Photo Url"
            className="input input-bordered w-full"
          />
        </div>
        <textarea
          name="review"
          className="textarea textarea-bordered mt-5 w-full h-32"
          placeholder="Your Review"
        ></textarea>
        <button className="btn btn-outline btn-sm">Submit</button>
      </form>
    </div>
  );
};

export default ServiceReview;

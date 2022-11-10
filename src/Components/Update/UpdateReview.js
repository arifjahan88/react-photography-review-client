import { useLoaderData, useNavigate } from "react-router-dom";
import useTitle from "../Titlehooks/TitleHooks";

const UpdateReview = () => {
  const navigate = useNavigate();
  const storeduser = useLoaderData();
  useTitle("Update Review");

  const HandleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photourl = form.photourl.value;
    const review = form.review.value;

    const servicereview = {
      name,
      photourl,
      review,
    };
    fetch(
      `https://react-photography-review-server.vercel.app/updatereviews/${storeduser._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(servicereview),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          console.log(data);
          alert("Your review is Updated");
          navigate("/reviews");
        }
      });
  };
  return (
    <div>
      <div>
        <h2 className="text-4xl font-mono font-bold text-center py-10">
          Please Update your Review {storeduser.urername} !
        </h2>
        <form onSubmit={HandleUpdate} className="p-5 container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <input
              defaultValue={storeduser.name}
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
            <input
              defaultValue={storeduser.photourl}
              type="text"
              name="photourl"
              placeholder="Photo Url"
              className="input input-bordered w-full"
            />
          </div>
          <textarea
            defaultValue={storeduser.review}
            name="review"
            className="textarea textarea-bordered mt-5 w-full h-32"
            placeholder="Your Review"
          ></textarea>
          <button className="btn btn-outline btn-sm">Update</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateReview;

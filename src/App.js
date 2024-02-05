import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: "",
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();

    setSubmittedData({ ...formData });

    console.log("Finally printing the value of Form Data:");
    console.log(formData);

    // Clear the form after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      country: "India",
      streetAddress: "",
      city: "",
      state: "",
      postalCode: "",
      comments: false,
      candidates: false,
      offers: false,
      pushNotifications: "",
    });

    // Set the form submission state to true
    setIsFormSubmitted(true);
  }

  function editResponse() {
    // Set the form data to the previously submitted data for editing
    setFormData({ ...submittedData });

    // Set the form submission state to false to show the form
    setIsFormSubmitted(false);
  }

  return (
    <div className="flex flex-col items-center mt-8">
      <div className="max-w-md w-full bg-purple-600 p-4 rounded-lg">
        <h1 className="text-white text-2xl font-bold">Google Form</h1>
        <p className="text-white">Your responses are important to us.</p>
      </div>
      {isFormSubmitted ? (
        // Display edit response box
        <div>
          <div className="mt-8 p-4 border rounded-md bg-gray-100 shadow-md">
            <p className="text-lg font-semibold mb-4">Response Submitted!</p>
            <ul className="list-disc pl-6">
              {Object.entries(submittedData).map(([key, value]) => (
                <li key={key} className="mb-2">
                  <strong className="font-semibold">{key}:</strong>{" "}
                  {value.toString()}
                </li>
              ))}
            </ul>
            <div className="flex justify-end mt-4">
              <button
                className="bg-blue-500 text-white font-semibold rounded-md py-2 px-4 transition duration-300 ease-in-out hover:bg-blue-600 hover:shadow-2xl transform hover:scale-105"
                onClick={editResponse}
              >
                Edit Response
              </button>
            </div>
          </div>
        </div>
      ) : (
        // Display the form
        <form onSubmit={submitHandler} className=" mt-8 max-w-md w-full">
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-600"
            >
              First name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="first name"
              value={formData.firstName}
              onChange={changeHandler}
              className="mt-1 p-2 border rounded w-full"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-600"
            >
              Last name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="last name"
              value={formData.lastName}
              onChange={changeHandler}
              className="mt-1 p-2 border rounded w-full"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="shhrithik@gmail.com"
              value={formData.email}
              onChange={changeHandler}
              className="mt-1 p-2 border rounded w-full"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-600"
            >
              Country
            </label>

            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={changeHandler}
              className="mt-1 p-2 border rounded w-full"
            >
              <option value="India">India</option>
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="Mexico">Mexico</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="streetAddress"
              className="block text-sm font-medium text-gray-600"
            >
              Street Address
            </label>

            <input
              type="text"
              name="streetAddress"
              id="streetAddress"
              placeholder="B-25C"
              value={formData.streetAddress}
              onChange={changeHandler}
              className="mt-1 p-2 border rounded w-full"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-600"
            >
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="B-25C"
              value={formData.city}
              onChange={changeHandler}
              className="mt-1 p-2 border rounded w-full"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="state"
              className="block text-sm font-medium text-gray-600"
            >
              State / Province
            </label>

            <input
              type="text"
              name="state"
              id="state"
              placeholder="state name"
              value={formData.state}
              onChange={changeHandler}
              className="mt-1 p-2 border rounded w-full"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="postalCode"
              className="block text-sm font-medium text-gray-600"
            >
              Postal Code
            </label>

            <input
              type="text"
              name="postalCode"
              id="postalCode"
              placeholder="247667"
              value={formData.postalCode}
              onChange={changeHandler}
              className="mt-1 p-2 border rounded w-full"
            />
          </div>

          <div className="mb-4">
            <fieldset className="border p-4 rounded">
              <legend className="text-lg font-medium text-gray-700 mb-2">
                By Email
              </legend>

              <div className="flex items-center mb-2">
                <input
                  id="comments"
                  name="comments"
                  type="checkbox"
                  checked={formData.comments}
                  onChange={changeHandler}
                  className="mr-2"
                />
                <div>
                  <label htmlFor="comments" className="font-medium">
                    Comments
                  </label>
                  <p className="text-gray-600">
                    Get notified when someone posts a comment on a posting.
                  </p>
                </div>
              </div>

              <div className="flex items-center mb-2">
                <input
                  id="candidates"
                  name="candidates"
                  type="checkbox"
                  checked={formData.candidates}
                  onChange={changeHandler}
                  className="mr-2"
                />
                <div>
                  <label htmlFor="candidates" className="font-medium">
                    Candidates
                  </label>
                  <p className="text-gray-600">
                    Get notified when a candidate applies for a job.
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="offers"
                  name="offers"
                  type="checkbox"
                  checked={formData.offers}
                  onChange={changeHandler}
                  className="mr-2"
                />
                <div>
                  <label htmlFor="offers" className="font-medium">
                    Offers
                  </label>
                  <p className="text-gray-600">
                    Get notified when a candidate accepts or rejects an offer.
                  </p>
                </div>
              </div>
            </fieldset>
          </div>

          <div className="mb-4">
            <fieldset className="border p-4 rounded">
              <legend className="text-lg font-medium text-gray-700 mb-2">
                Push Notifications
              </legend>
              <p className="text-sm text-gray-500 mb-4">
                These are delivered via SMS to your mobile phone.
              </p>

              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  id="pushEverything"
                  name="pushNotifications"
                  value="Everything"
                  onChange={changeHandler}
                  className="mr-2"
                />
                <label htmlFor="pushEverything" className="font-medium">
                  Everything
                </label>
              </div>

              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  id="pushEmail"
                  name="pushNotifications"
                  value="Same as email"
                  onChange={changeHandler}
                  className="mr-2"
                />
                <label htmlFor="pushEmail" className="font-medium">
                  Same as email
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="radio"
                  id="pushNothing"
                  name="pushNotifications"
                  value="No Push Notifications"
                  onChange={changeHandler}
                  className="mr-2"
                />
                <label htmlFor="pushNothing" className="font-medium">
                  No Push Notifications
                </label>
              </div>
            </fieldset>
          </div>

          <div className="flex justify-end">
            <button className="bg-blue-500 text-white font-semibold rounded-md py-2 px-4 transition duration-300 ease-in-out hover:bg-blue-600 hover:shadow-2xl transform hover:scale-105">
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default App;

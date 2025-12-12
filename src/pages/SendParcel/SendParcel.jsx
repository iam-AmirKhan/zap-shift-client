import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth"
const SendParcel = () => {
  const {
    register,
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const serviceCenters = useLoaderData();
  const regionsDuplicate = serviceCenters.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];
  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });
  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  const handleSendParcel = (data) => {
    console.log(data);
    const isDocument = data.parcelType === "document";
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const ParcelWeight = parseFloat(data.ParcelWeight);
    let cost = 0;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (ParcelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = ParcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }
    console.log("cost", cost);
    data.cost = cost;
    Swal.fire({
      title: "Agree with the cost?",
      text: `You will be charged ${cost} taka!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, take it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //save the parcel info to the database
        axiosSecure.post("/parcels", data).then((res) => {
          console.log("after saving parcel", res.data);
        });

        // Swal.fire({
        //   title: "Parcel Confirmed!",
        //   text: "Your parcel request has been submitted successfully.",
        //   icon: "success",
        // });
      }
    });
  };

  return (
    <div>
      <h2 className="text-5xl font-bold">Send A Parcel</h2>
      <form onSubmit={handleSubmit(handleSendParcel)} className="mt-12 p-4">
        {/* parcel type */}
        <div>
          <label className="label mr-5">
            <input
              type="radio"
              {...register("parcelType")}
              value="document"
              className="radio"
              defaultChecked
            />
            Document
          </label>
          <label className="label">
            <input
              type="radio"
              {...register("parcelType")}
              value="non-document"
              className="radio"
            />
            Non-Document
          </label>
        </div>
        {/* parcel info name weight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-4 text-black  my-10">
          <fieldset className="fieldset">
            <label className="label">Parcel Name</label>
            <input
              type="name"
              {...register("ParcelName")}
              className="input w-full"
              placeholder="parcel name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Parcel Weight (KG)</label>
            <input
              type="number"
              {...register("ParcelWeight")}
              className="input w-full"
              placeholder="parcel weight (KG)"
            />
          </fieldset>
        </div>
        {/* two column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* sender info */}

          <fieldset className="fieldset">
            <h4 className="text-2xl font-semibold">Sender Details</h4>
            {/* sender name */}
            <label className="label">Sender Name</label>
            <input
              type="text"
              {...register("SenderName")}
              defaultValue={user?.displayName}
              className="input w-full"
              placeholder="Sender name"
            />
            {/* sender email */}
            <label className="label">Sender Email</label>
            <input
              type="text"
              {...register("SenderEmail")}
              defaultValue={user?.email}
              className="input w-full"
              placeholder="Sender Email"
            />
            {/* sender region */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Sender Regions</legend>
              <select
                {...register("senderRegion")}
                defaultValue="Pick a Region"
                className="select"
              >
                <option disabled={true}>Pick a Region</option>
                {regions.map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* sender districts */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Sender Districts</legend>
              <select
                {...register("senderDistrict")}
                defaultValue="Pick a district"
                className="select"
              >
                <option disabled={true}>Pick a district</option>
                {districtsByRegion(senderRegion).map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>
            {/* sender address */}
            <label className="label mt-4">Sender Address</label>
            <input
              type="text"
              {...register("SenderAddress")}
              className="input w-full"
              placeholder="Sender Address"
            />
            {/* sender phone no */}
            <label className="label mt-4">Sender Phone No </label>
            <input
              type="text"
              {...register("SenderPhoneNo")}
              className="input w-full"
              placeholder="sender Phone No "
            />

            {/* Pickup Instruction  */}
            <label className="label mt-4">Pickup Instruction</label>
            <input
              type="text"
              {...register("SenderInstruction")}
              className="input w-full"
              placeholder="Pickup Instruction"
            />
          </fieldset>

          {/* receiver info */}
          <fieldset className="fieldset">
            <h4 className="text-2xl font-semibold">Sender Details</h4>

            {/* Receiver name */}
            <label className="label">Receiver Name</label>
            <input
              type="text"
              {...register("receiverName")}
              className="input w-full"
              placeholder="receiver name"
            />

            {/* Receiver email */}
            <label className="label">Receiver Email</label>
            <input
              type="text"
              {...register("ReceiverEmail")}
              className="input w-full"
              placeholder="Receiver Email"
            />

            {/* Receiver region */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Receiver Regions</legend>
              <select
                {...register("receiverRegion")}
                defaultValue="Pick a Region"
                className="select"
              >
                <option disabled={true}>Pick a Region</option>
                {regions.map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>
            {/* Receiver district */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Receiver Districts</legend>
              <select
                {...register("receiverDistrict")}
                defaultValue=""
                className="select"
              >
                <option disabled value="">
                  Pick a district
                </option>
                {districtsByRegion(receiverRegion).map((d, i) => (
                  <option key={i} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* Receiver address */}
            <label className="label mt-4">Receiver Address</label>
            <input
              type="text"
              {...register("receiverAddress")}
              className="input w-full"
              placeholder="receiver Address"
            />
            {/* Receiver phone no */}
            <label className="label mt-4">Receiver Phone No </label>
            <input
              type="text"
              {...register("receiverPhoneNo")}
              className="input w-full"
              placeholder="sender Phone No "
            />
            {/* Delivery Instruction  */}
            <label className="label mt-4">Delivery Instruction</label>
            <input
              type="text"
              {...register("receiverInstruction")}
              className="input w-full"
              placeholder="Delivery Instruction"
            />
          </fieldset>
        </div>
        <input
          type="submit"
          className="btn btn-primary text-black"
          value="send-parcel"
        />
      </form>
    </div>
  );
};

export default SendParcel;

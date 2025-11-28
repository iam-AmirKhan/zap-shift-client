import { useForm } from "react-hook-form";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSendParcel = (data) => {
    console.log(data);
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
                className="input w-full"
                placeholder="Sender name"
              />
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
              {/* sender District */}
              <label className="label mt-4">Your District</label>
              <input
                type="text"
                {...register("SenderDistrict")}
                className="input w-full"
                placeholder="Select your District"
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

            {/* sender name */}
            <label className="label">Receiver Name</label>
            <input
              type="text"
              {...register("receiverName")}
              className="input w-full"
              placeholder="receiver name"
            />
            {/* sender address */}
            <label className="label mt-4">Receiver Address</label>
            <input
              type="text"
              {...register("receiverAddress")}
              className="input w-full"
              placeholder="receiver Address"
            />
            {/* sender phone no */}
            <label className="label mt-4">Receiver Phone No </label>
            <input
              type="text"
              {...register("receiverPhoneNo")}
              className="input w-full"
              placeholder="sender Phone No "
            />
            {/* sender District */}
            <label className="label mt-4">Your District</label>
            <input
              type="text"
              {...register("receiverDistrict")}
              className="input w-full"
              placeholder="Select your District"
            />
            {/* Pickup Instruction  */}
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

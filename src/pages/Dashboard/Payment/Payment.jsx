import React, { useState } from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Payment = () => {
  const { parcelId } = useParams();
  const axiosSecure = useAxiosSecure();
  const [payLoading, setPayLoading] = useState(false);

  const { isLoading, data: parcel } = useQuery({
    queryKey: ["parcels", parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      return res.data;
    },
  });

  // show loader while fetching parcel
  if (isLoading) {
    return (
      <div>
        <span className="loading loading-infinity loading-xl"></span>
      </div>
    );
  }

  // safety: if parcel still not found
  if (!parcel) {
    return <div>Parcel not found.</div>;
  }

  const handlePayment = async () => {
    try {
      setPayLoading(true);

      // normalize field names so it works with current DB documents
      const normalized = {
        cost: parcel.cost ?? parcel?.Cost ?? 0,
        parcelId: parcel._id ?? parcel.id,
        senderEmail: parcel.SenderEmail ?? parcel.senderEmail ?? "",
        parcelName: parcel.parcelName ?? parcel.ParcelName ?? "Parcel Payment",
      };

      // create-checkout-session route should return { url: "https://checkout.stripe..." }
      const res = await axiosSecure.post(
        "/create-checkout-session",
        normalized
      );

      const checkoutUrl = res?.data?.url || res?.data?.sessionUrl || null;
      window.location.href = res.data.url;
      if (checkoutUrl) {
        // redirect user to Stripe Checkout
        window.location.href = checkoutUrl;
      } else {
        console.error("No checkout url returned:", res.data);
        alert("Failed to create checkout session. Check server logs.");
      }
    } catch (err) {
      console.error("Payment error:", err);
      alert("An error occurred while creating the checkout session.");
    } finally {
      setPayLoading(false);
    }
  };

  return (
    <div>
      <h2>
        Please Pay ${parcel.cost ?? "0"} for:{" "}
        {parcel.parcelName ?? parcel.ParcelName}
      </h2>

      <button
        onClick={handlePayment}
        className="btn btn-primary text-black"
        disabled={payLoading}
      >
        {payLoading ? "Processing..." : "Pay"}
      </button>
    </div>
  );
};

export default Payment;

import { usePaystackPayment } from "react-paystack";

export default function PaystackButton({ amount }: { amount: number }) {
  const config = {
    reference: new Date().getTime().toString(),
    email: "user@example.com",
    amount: amount * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_test_b1750d76ee54ffde88fc17794c1367d45f8dd0d3",
  };

  // you can call this function anything
  const onSuccess = (reference?: object) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
    console.log("payment successful");
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };
  const initializePayment = usePaystackPayment(config);
  return (
    <div className="flex justify-center mt-7">
      <button
        className="rounded-md bg-blue-700 text-white px-8 py-3"
        onClick={() => {
          initializePayment(onSuccess, onClose);
        }}
      >
        Pay to book now{" "}
      </button>
    </div>
  );
}

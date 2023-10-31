import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { toast } from "react-toastify";

export default function FlwPayment({
  email,
  phoneNumber,
  Amount,
}: {
  email: string;
  phoneNumber: string;
  Amount: number;
}) {
  const config = {
    public_key: "FLWPUBK_TEST-4e43205694a70c38fcd90dfb41934a43-X",
    tx_ref: Date.now().toString(),
    amount: Amount,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: email,
      phone_number: phoneNumber,
      name: "john doe",
      subAccounts: [
        {
          id: "RS_A8EB7D4D9C66C0B1C75014EE67D4D663",
          // If you want the subaccount to get 4200 naira only
          // Subaccount gets: 4200
          // You get: 6000 - 4200 - 60 = 1740
          transaction_charge_type: "flat_subaccount",
          transaction_charge: 4200,
        },
      ],
    },
    customizations: {
      title: "my Payment Title",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };
  const handleFlutterPayment = useFlutterwave(config);
  return (
    <>
      <button
        className="px-10 rounded-md text-white hover:bg-blue-800 bg-blue-600 py-4"
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
              console.log(response);
              closePaymentModal(); // this will close the modal programmatically
              toast.success(
                "booking payment succesful pls check your email and text messages for receipt "
              );
            },
            onClose: () => {
              console.log("Closed payment modal");
              toast.error("opps something went wrong , payment not completed");
            },
          });
        }}
      >
        Pay Now
      </button>
    </>
  );
}

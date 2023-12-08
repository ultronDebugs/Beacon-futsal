import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { toast } from "react-toastify";
import axios from "axios";
import { backendApi } from "../configs/Api";
import moment from "moment";

export default function FlwPayment({
  name,
  email,
  phoneNumber,
  amount,
  setTimes,
  times,
  pitchInfo,
  setPitchAvailability,
  setPhoneNumber,
  date,
  setEmail,
  setDate,
}: {
  name: string;
  email: string;
  phoneNumber: string;
  amount: number;
  times: string[];
  pitchInfo: any;
  date: string;
  setTimes: React.Dispatch<React.SetStateAction<Array<string>>>;
  setPitchAvailability: any;
  setEmail: any;
  setDate: any;
  setPhoneNumber: any;
}) {
  const config = {
    public_key: "FLWPUBK_TEST-4e43205694a70c38fcd90dfb41934a43-X",
    tx_ref: Date.now().toString(),
    amount: amount,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: email,
      phone_number: phoneNumber,
      name: name,
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
      title: "Pitch payment page ",
      description: "Payment for pitch play time",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };
  const today = moment().format("YYYY-MM-DD");

  const resetAll = () => {
    setTimes([]);
    setPitchAvailability([]);
    setEmail("");
    setDate(today);
    setPhoneNumber("");
  };
  const bookingInfo = {
    amountPaid: times.length * amount,
    bookingTimes: times,
    customerEmail: email,
    customerName: name,
    customerPhoneNumber: phoneNumber,
    dateString: date,
    pitchOwnerId: pitchInfo.ownerId,
    pitchName: pitchInfo.name,
    pitchId: pitchInfo.pitchId,
  };

  const handleBookingSubmit = async () => {
    try {
      const response = await axios.post(`${backendApi}/booking/`, bookingInfo);
      if (response.status >= 200 && response.status < 300) {
        toast.success("booking updated successfully");
      }
      console.log(response.data); // Handle the response as needed
      console.log(bookingInfo);
      if (response.status >= 400) {
        toast.error("booking error");
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
      // toast.error("booking req failed");
    }
  };
  const handleFlutterPayment = useFlutterwave(config);
  return (
    <>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={(e) => {
          e.preventDefault();
          if (email === "" || phoneNumber === "" || times.length === 0) {
            alert(
              "Please enter full details or check your make sure you select a time"
            );
            return;
          }
          handleFlutterPayment({
            callback: (response) => {
              console.log(response);
              closePaymentModal(); // this will close the modal programmatically
              resetAll(); // this will reset all fields from the pitch page

              toast.success(
                "booking payment successFull pls check your email and text messages for receipt "
              );
              handleBookingSubmit();
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

export default function TimeBoard({
  availability,
  setTimes,
}: {
  availability: { date: string; hour: string; available: boolean }[];
  setTimes: React.Dispatch<React.SetStateAction<Array<string>>>;
}) {
  // console.log(times)
  return (
    <div className="overflow-x-auto rounded-sm shadow-lg">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="sticky inset-y-0 start-0 bg-white px-4 py-2"></th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Time
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Availability
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {/* loop availability to to display disabled and enabled times*/}
          {availability.map((time, index) => {
            if (time.available) {
              return (
                <EnabledTime setTimes={setTimes} hour={time.hour} key={index} />
              );
            }
            if (!time.available) {
              return <DisabledTime hour={time.hour} key={index} />;
            }
          })}
        </tbody>
      </table>
    </div>
  );
}

const DisabledTime = ({ hour }: { hour: string }) => {
  return (
    <tr>
      <td className="sticky inset-y-0 start-0 bg-white px-4 py-2">
        <label className="sr-only" htmlFor="Row2">
          Row 2
        </label>
        <input
          className="h-5 w-5 rounded border-gray-300"
          type="checkbox"
          disabled
          id="Row2"
        />
      </td>
      <td className="line-through whitespace-nowrap px-4 py-2 text-gray-700">
        {hour}:00 PM
      </td>
      <td className="line-through whitespace-nowrap px-4 py-2 text-gray-700">
        Not Available
      </td>
    </tr>
  );
};

const EnabledTime = ({
  hour,
  setTimes,
}: {
  hour: string;
  setTimes: React.Dispatch<React.SetStateAction<Array<string>>>;
}) => {
  return (
    <tr>
      <td className="sticky inset-y-0 start-0 bg-white px-4 py-2">
        <label className="sr-only" htmlFor="Row1">
          Row 1
        </label>
        <input
          className="h-5 w-5 rounded border-gray-300"
          type="checkbox"
          onChange={(e) => {
            if (e.target.checked) {
              setTimes((prev) => {
                return prev.concat(hour);
              });
            }
            if (!e.target.checked) {
              setTimes((prev) => {
                return prev.splice(prev.indexOf(hour));
              });
            }
          }}
          id="Row1"
        />
      </td>
      <td className=" whitespace-nowrap px-4 py-2 text-gray-700">{hour}:00</td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">Available</td>
    </tr>
  );
};

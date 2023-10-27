export default function TimeBoard() {
  return (
    <div>
      {/*
      Heads up! 👋
    
      This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
    */}

      <div className="overflow-x-auto ">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className=" ">
                <label htmlFor="SelectAll" className="sr-only">
                  Select All
                </label>
              </th>
              <th className="whitespace-nowrap pr-2 py-2 font-medium text-gray-900">
                Name
              </th>
              <th className="whitespace-nowrap pr-2 py-2 font-medium text-gray-900">
                Time of the day
              </th>
              <th className="whitespace-nowrap pr-2 py-2 font-medium text-gray-900">
                Availability
              </th>
              <th className="whitespace-nowrap pr-2 py-2 font-medium text-gray-900">
                Price per hour
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-2">
                <label className="sr-only" htmlFor="Row1">
                  Row 1
                </label>

                <input
                  className="h-5 w-5 rounded border-gray-300"
                  type="checkbox"
                  id="Row1"
                />
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                John Doe
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                24/05/1995
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                Web Developer
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                $120,000
              </td>
            </tr>

            <tr>
              <td className="px-4 py-2">
                <label className="sr-only" htmlFor="Row2">
                  Row 2
                </label>

                <input
                  className="h-5 w-5 rounded border-gray-300"
                  type="checkbox"
                  id="Row2"
                />
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Jane Doe
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                04/11/1980
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                Web Designer
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                $100,000
              </td>
            </tr>

            <tr>
              <td className="px-4 py-2">
                <label className="sr-only" htmlFor="Row3">
                  Row 3
                </label>

                <input
                  className="h-5 w-5 rounded border-gray-300"
                  type="checkbox"
                  id="Row3"
                />
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Gary Barlow
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                24/05/1995
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                Singer
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                $20,000
              </td>
            </tr>

            <TableData
              name="Tariq Bature"
              Dob="10/03/1997"
              role="Available"
              rowNumber={4}
              salary={2000000}
              key={1}
            />
            <DisabledTableData
              Dob="19/02/1999"
              name="james"
              role="unavailable"
              salary={30000}
              rowNumber={1}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}

const TableData = ({
  name,
  Dob,
  salary,
  role,
  rowNumber,
}: {
  name: string;
  Dob: string;
  salary: number;
  role: string;
  rowNumber: number;
}) => {
  return (
    <tr>
      <td className="px-4 py-2">
        <label className="sr-only" htmlFor="Row1">
          {`Row ${rowNumber}`}
        </label>

        <input
          className="h-5 w-5 rounded border-gray-300"
          type="checkbox"
          id="Row1"
        />
      </td>
      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        {name}
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">{Dob}</td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">{role}</td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">${salary}</td>
    </tr>
  );
};

const DisabledTableData = ({
  name,
  Dob,
  salary,
  role,
  rowNumber,
}: {
  name: string;
  Dob: string;
  salary: number;
  role: string;
  rowNumber: number;
}) => {
  return (
    <tr>
      <td className="px-4 py-2">
        <label className="sr-only" htmlFor="Row1">
          {`Row ${rowNumber}`}
        </label>

        <input
          disabled
          className="h-5 w-5 rounded border-gray-300"
          type="checkbox"
          id="Row1"
        />
      </td>
      <td className="whitespace-nowrap px-4 py-2 line-through font-medium text-gray-900">
        {name}
      </td>
      <td className="whitespace-nowrap line-through px-4 py-2 text-gray-700">
        {Dob}
      </td>
      <td className="whitespace-nowrap line-through px-4 py-2 text-gray-700">
        {role}
      </td>
      <td className="whitespace-nowrap line-through px-4 py-2 text-gray-700">
        ${salary}
      </td>
    </tr>
  );
};

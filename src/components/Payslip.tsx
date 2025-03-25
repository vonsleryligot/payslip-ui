import React from "react";

const Payslip: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 bg-white border-gray-700">
      <div className=" text-sm leading-relaxed">
        <p><strong>Hi Vonsleryl,</strong></p>
        <p className="py-2">
          Please review your Pay Summary for the upcoming <strong>16-Mar-25</strong> Payroll covering the period <strong>01-Mar-25 to 15-Mar-25</strong>.
        </p>
        <p className="py-2">
          If there are missing timesheets, pending requests, or additional adjustments, please inform your Payroll Manager immediately so they can make the necessary changes and verification prior to running payroll.
        </p>
        <p className="py-2">
          This is an automatically generated email. Please do not reply to this message.
        </p>
      </div>
      <h3><strong>PAY SUMMARY DRAFT</strong></h3>
        <div className="grid grid-cols-2 gap-1 mt-2 p-2 border-t border-gray-900">
          {/* First Column */}
          <div className="grid grid-cols-2 p-6 items-center">
            <div className="flex justify-start">
              <img src="/images/logo.png" alt="Payroll Icon" className="border-r border-gray-700 pr-2 w-auto h-auto max-w-[80px] max-h-[80px] md:max-w-[100px] md:max-h-[100px]" />
              </div>
                <div className="pl-2 md:text-left text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed">
                  <p>Crunch Box OPC</p>
                  <p>Unit 1403 Saekyung 956,</p>
                  <p>Lapu-Lapu City, PH 6015</p>
                  <p>00000</p>
                </div>
              </div>
            {/* Second Column */}
            <div className="grid grid-cols-2 pl-2">
          </div>
        </div>
        {/* Employee Details */}
        <div className="mb-4 border text-xs border-gray-700">
          <div className="grid grid-cols-2 gap-2 p-3">
            <p>Name</p><p className="text-middle"><strong>: Vonsleryl Igot</strong></p>
            <p>Employee ID</p><p className="text-middle"><strong>: CB-036</strong></p>
            <p>Job Position</p><p className="text-middle"><strong>: Junior IT Support</strong></p>
            <p>Department</p><p className="text-middle"><strong>: IT</strong></p>
          </div>
          <div className="grid grid-cols-3 gap-1 mt-2 p-2 bg-gray-100 border-t border-gray-900">
            <p className="border-r border-gray-700 pr-2">Payroll Date: <strong>16-Mar-25</strong></p>
            <p className="border-r border-gray-700 pr-2">Payroll Period: From <strong>01-Mar-25 to 15-Mar-25</strong></p>
            <p>Basic Pay: <strong>1,800.00</strong></p>
          </div>
        </div>
      <div className="grid grid-cols-2 gap-3 text-xs border-gray-700">
        {/* Earnings Column */}
        <div>
          <table className="w-full border-collapse border border-gray-700">
            <tbody>
              <tr className="border-b border-gray-900"><td className="px-3">Earnings</td><td className="text-right px-3">Amount</td></tr>
              <tr className="border-b"><td className="px-3">Regular Hours (67.00)</td><td className="text-right px-3">1,800.00</td></tr>
              <tr className="border-b"><td className="px-6">Absences (0.00)</td><td className="text-right px-3">0.00</td></tr>
              <tr className="border-b"><td className="px-6">Tardiness (0.00)</td><td className="text-right px-3">0.00</td></tr>
              <tr className="border-b"><td className="px-6">Undertime (0.00)</td><td className="text-right px-3">0.00</td></tr>
              <tr className="border-b"><td className="px-3">Nonattendance (0.00)</td><td className="text-right px-3">0.00</td></tr>
              <tr className="border-b"><td className="px-3">Paid Leave (0.00)</td><td className="text-right px-3">0.00</td></tr>
              <tr className="border-b"><td className="px-3">Overtime (0.00)</td><td className="text-right px-3">0.00</td></tr>
              <tr className="border-b"><td className="px-3">Rest Day/Holiday (0.00)</td><td className="text-right px-3">0.00</td></tr>
              <tr className="border-b"><td className="px-3">Night Differential (0.00)</td><td className="text-right px-3">0.00</td></tr>
              <tr className="border-b"><td className="px-3">Retroactive Pay (0.00)</td><td className="text-right px-3">0.00</td></tr>
              <tr className="border-b"><td className="px-3">Post Payroll Adjustments (0.00)</td><td className="text-right px-3">0.00</td></tr>
              <tr className="border-b"><td className="px-6">Workday (0.00)</td><td className="text-right px-3">0.00</td></tr>
              <tr className="border-b"><td className="px-6">Tardiness (0.00)</td><td className="text-right px-3">0.00</td></tr>
              <tr className="border-b"><td className="px-6">Undertime (0.00)</td><td className="text-right px-3">0.00</td></tr>
              <tr className="border-b"><td className="px-6">Leaves (0.00)</td><td className="text-right px-3">0.00</td></tr>
              <tr className="border-b"><td className="px-3">Adjustment</td><td className="text-right px-3">0.00</td></tr>
              <tr className="border-b"><td className="px-6">Workday</td><td className="text-right px-3">0.00</td></tr>
              <tr className="border-b"><td className="px-6">Overtime</td><td className="text-right px-3">0.00</td></tr>
              <tr className="border-b"><td className="px-6">Holiday Premium</td><td className="text-right px-3">0.00</td></tr>
              <tr className="border-b"><td className="px-6">Night Differential</td><td className="text-right px-3">0.00</td></tr>
              <tr className="border-b"><td className="px-6">Paid Leave</td><td className="text-right px-3">0.00</td></tr>
              <tr className="border-b"><td className="px-6">Allowances</td><td className="text-right px-3">0.00</td></tr>
              <tr className="border-b"><td className="px-6">Commission</td><td className="text-right px-3">0.00</td></tr>
              <tr className="border-b"><td className="px-6">Advance Payment</td><td className="text-right px-3">0.00</td></tr>
              <tr className="border-b"><td className="px-6">Service Charge</td><td className="text-right px-3">0.00</td></tr>
              <tr className="border-b"><td className="px-6">Hazard Pay</td><td className="text-right px-3">0.00</td></tr>
              <tr className="border-b"><td className="px-6">Other Earnings</td><td className="text-right px-3">0.00</td></tr>
              <tr className="border-b"><td className="px-3">Allowance</td><td className="text-right px-3">0.00</td></tr>
              <tr className="border-b"><td className="px-3">Commission</td><td className="text-right px-3">0.00</td></tr>
              <tr className="border-b"><td className="px-3">Other Earnings</td><td className="text-right px-3">0.00</td></tr>
              <tr className="border-b"><td className="px-3">Service Charge</td><td className="text-right px-3">0.00</td></tr>
              <tr className="border-b"><td className="px-3">Hazard Pay</td><td className="text-right px-3">0.00</td></tr>
              <tr><td className="px-3">Withholding Tax (Adjustments)</td><td className="text-right px-3">0.00</td></tr>
              <tr className="font-semibold border-t border-gray-900"><td className="px-3">Total Earnings</td><td className="text-right px-3">1,800.00</td></tr>
            </tbody>
          </table>
        </div>      
        {/* Deductions Column */}
        <div>
          <table className="w-full border-collapse border border-gray-700">
            <tbody>
              <tr className="border-b border-gray-900">
                <td className="px-3 font-semibold">Deductions</td>
                <td className="text-right px-3 font-semibold">Amount</td>
              </tr>
              <tr className="border-b"><td className="px-3">Withholding Tax</td><td className="text-right px-3">0.00</td></tr>
              <tr className="border-b"><td className="px-3">SSS</td><td className="text-right px-3">0.00</td></tr>
              <tr className="border-b"><td className="px-3">HDMF</td><td className="text-right px-3">0.00</td></tr>
              <tr className="border-b"><td className="px-3">PhilHealth</td><td className="text-right px-3">0.00</td></tr>
              <tr className="border-b"><td className="px-3">HDMF I</td><td className="text-right px-3">0.00</td></tr>
              <tr className="border-b"><td className="px-3">HDMF II</td><td className="text-right px-3">0.00</td></tr>
              <tr className="border-b"><td className="px-3">Insurance</td><td className="text-right px-3">0.00</td></tr>
              <tr className="border-b"><td className="px-3">Loans</td><td className="text-right px-3">0.00</td></tr>
              <tr className="border-b"><td className="px-3">Other Deductions</td><td className="text-right px-3">0.00</td></tr>
              <tr className="border-b"><td className="px-3">Other Adjustments</td><td className="text-right px-3">0.00</td></tr>
              <tr className="border-b"><td className="px-6">Absences</td><td className="text-right px-3">0.00</td></tr>
              <tr className="border-b"><td className="px-6">Tardiness</td><td className="text-right px-3">0.00</td></tr>
              <tr className="border-b"><td className="px-6">Undertime</td><td className="text-right px-3">0.00</td></tr>
              <tr className="border-b"><td className="px-6">Third Party Loans</td><td className="text-right px-3">0.00</td></tr>
              <tr className="border-b"><td className="px-6">Government Loans</td><td className="text-right px-3">0.00</td></tr>
              <tr><td className="px-3">Boost</td><td className="text-right px-3">0.00</td></tr>
              <tr className="font-semibold border-t border-gray-900">
                <td className="px-3">Total Deductions</td>
                <td className="text-right px-3">0.00</td>
              </tr>
            </tbody>
          </table>

          {/* Net Pay Section - Separate Table */}
          <table className="w-full mt-4 border-collapse bg-gray-100 border border-gray-900">
            <tbody>
              <tr className="font-semibold text-base">
                <td className="px-3">Net Pay</td>
                <td className="text-right px-3">1,800.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Payslip;
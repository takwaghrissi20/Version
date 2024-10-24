import React from 'react';
import AddVisa from '../../../modules/VisaAndTravel/visa/AddVisa';
import AddVisaGetsEmployees from '../../../modules/HRGetsCompany/AddVisa';
import EditVisa from '../../../modules/HRGetsCompany/EditVisa';
import Visa from '../../../modules/VisaAndTravel/visa/Visa';
import ComposedChart from '../../../modules/VisaAndTravel/visa/Composed';
import Health from '../../../modules/VisaAndTravel/visa/HealthCorona/Health';
import Covid from '../../../modules/VisaAndTravel/visa/HealthCorona/Covid';
import AddHealth from '../../../modules/VisaAndTravel/visa/HealthCorona/AddHealth';
import AddCorona from '../../../modules/VisaAndTravel/visa/HealthCorona/AddCorona';
import ViewHealth from '../../../modules/VisaAndTravel/visa/HealthCorona/Health/ViewHealth';
import ViewCovid from '../../../modules/VisaAndTravel/visa/HealthCorona/Covid/ViewCovid';
import EditHealth from '../../../modules/VisaAndTravel/visa/HealthCorona/Health/EditHealth';
import EditCovid from '../../../modules/VisaAndTravel/visa/HealthCorona/Covid/EditCovid';
import LocationTripTrack from '../../../modules/VisaAndTravel/visa/LocationTripTrack';
import HeadOfficeEmployees from '../../../modules/HeadEmployeesSite';
import ProjectLocation from '../../../modules/ProjectLocation';
import ManpowerAllocationPerProject from '../../../modules/VisaAndTravel/visa/ManpowerAllocationPerProject';
import PersonOnBoard from '../../../modules/PersonOnBoard';
import Mission from '../../../modules/VisaAndTravel/visa/Mission';
import Travel from '../../../modules/VisaAndTravel/visa/AllTravel';
import InternalMission from '../../../modules/VisaAndTravel/visa/InternalMission';
import AllMission from '../../../modules/VisaAndTravel/visa/AllMission';
import AllMissionExtention from '../../../modules/VisaAndTravel/visa/AllMissionExtention';
import ViewMission from '../../../modules/VisaAndTravel/visa/ViewMission';
import ViewMissionExtention from '../../../modules/VisaAndTravel/visa/ViewMissionExtention';
import UpdateMission from '../../../modules/VisaAndTravel/visa/EditMission';
import UpdateMissionExtention from '../../../modules/VisaAndTravel/visa/EditMissionExtention';
import AddTravel from '../../../modules/VisaAndTravel/visa/Travel';
import AddDemobization from '../../../modules/TripTrackRecord/AddDemobilization';
import UpdateDemobization from '../../../modules/TripTrackRecord/Demobilization';
import DemoPermissionSite from '../../../modules/TripTrackRecord/DemobPermissionSite';
import AddMissionExtensoin from '../../../modules/TripTrackRecord/AddExtensionMission';
import DemobTripTrackRecorde from '../../../modules/TripTrackRecord/DeMOBTRIPTRACKRECORD';
import SammaryDemobTrips from '../../../modules/TripTrackRecord/SAMMARYDEMOBTRIPS';
import SammaryMobTrips from '../../../modules/TripTrackRecord/SAMMARYMOBTRIPS';
import DemobilizationDirect  from '../../../modules/DemobilizationDirect';
import IdJosDesertPass  from '../../../modules/IDJOSDesetPass';
import ReachedToSite from '../../../modules/DateReachSite';
import AddTimeSheetsite from '../../../modules/TimeSheet/AddTimeSheetsite'
import ViewTravel from '../../../modules/VisaAndTravel/visa/Viewtravel';
import EditTravel from '../../../modules/VisaAndTravel/visa/Edittravel';
//Payroll
import SalariesTracker from '../../../modules/Payroll/Salaries Tracker';
import PaymentRequest from '../../../modules/Payroll/PaymentRequest';
import CalculateSalary from '../../../modules/Payroll/CalculateSalary';
import CalculateSalaryOffice from '../../../modules/Payroll/CalculateSalaryOffice';
import PAYMENTORDERREQUESTS from '../../../modules/Payroll/PaymentOrderRequest';
import PAYMENTORDERREQUESTSSite from '../../../modules/Payroll/PaymentOrderRequest';
import PaymentOrderRequestOffice from '../../../modules/Payroll/PaymentOrderRequestOffice';
import PaymentOrderRequestSetement from '../../../modules/Payroll/PaymentOrderRequestSetement';
import PAYMENTfORRequest from '../../../modules/PaymentForRequest';
import CashAdvance from '../../../modules/Payroll/CashAdvance';
import EmployeeTransferPermission from '../../../modules/VisaAndTravel/visa/EmployeeTransferPermission';
import TransferPermissionEmp from '../../../modules/VisaAndTravel/visa/TransferPermissionEmp';
import ViewTransfer from '../../../modules/VisaAndTravel/visa/ViewTransfer';
import UpdateTransfer from '../../../modules/VisaAndTravel/visa/UpdateTransferPermissionEmp';
import PAYMENTOrDERFIANACIAL  from '../../../modules/Payroll/PAYMENTORDERBYFIANACIALCOORDINATOR';
import UpdateRequestPayment  from '../../../modules/Payroll/UpdateRequestPayment';
import AllRequestPayment  from '../../../modules/Payroll/AllRequestPayment';
import CalculateSetelment from '../../../modules/Payroll/CalculateSetlement';
import FINANCESITTLEMETOFFICE from '../../../modules/Payroll/FINANCESITTLEMETOFFICE';
import RequestFORPayment from '../../../modules/PaymentForRequestSalary';

export const recharts2Configs = [
  {
    path: '/Hr/Visa/Mission',
    element: <Mission/>,
  },
  {
    path: '/ManpowerLocation/Employee_Transfer_Permission',
    element: <EmployeeTransferPermission />,
  },
  {
    path: '/ManpowerLocation/List_Employee_Transfer_Permission',
    element: <TransferPermissionEmp  />,
  },
  {
    path: '/Hr/ManpowerLocation/Employee_Transfer_Permission/ViewTransferEmployee/:id',
    element: <ViewTransfer/>,
  },
  {
    path: '/Hr/ManpowerLocation/Employee_Transfer_Permission/UpdateTransferEmployee/:id',
    element: <UpdateTransfer />,
  },

  {
    path: '/Hr/Visa/AllTravel',
    element: <Travel/>,
  },
  {
    path: '/Hr/Visa/ViewTravel/:id',
    element: <ViewTravel/>,
  },
  {
    path: '/Hr/Visa/UpdateTravel/:id',
    element: <EditTravel/>,
  },
  ///Hr/Visa/InternalMission
  {
    path: '/Hr/Visa/InternalMission',
    element: <InternalMission/>,
  },
  ///Hr/Visa/InternalMission
  {
    path: '/Hr/Visa/MissionOrder',
    element: <AllMission/>,
  },
  {
    path: '/Hr/Visa/MissionOrderExtention',
    element: <AllMissionExtention/>,
  },
 
  {
    path: '/Hr/Visa/ViewMissionOrder/:id',
    element: <ViewMission/>,
  },
  {
    path: '/Hr/Visa/ViewMissionOrderExtention/:id',
    element: < ViewMissionExtention/>,
  },
 
  {
    path: '/Hr/Visa/UpdateMissionOrder/:id',
    element: <UpdateMission/>,
  },
  {
    path: '/Hr/Visa/UpdateMissionOrderExtention/:id',
    element: < UpdateMissionExtention/>,
  },
 
  {
    path: '/Hr/Visa/Travel',
    element: <AddTravel  />,
  },
  {
    path: '/Hr/VisaHealth/AddVisa',
    element: <AddVisa />,
  },
  {
    path: '/Hr/VisaHealth/AddVisa/GetsEmployee',
    element: <AddVisaGetsEmployees />,
  },

  {
    path: '/Hr/VisaHealth/Visa',
    element: <Visa />,
  },
  {
    path: '/ManpowerLocation/AddMissionExtensionRequest',
    element: <AddMissionExtensoin />,
  },

  {
    path: '/ManpowerLocation/AddDemobilization',
    element: <AddDemobization />,
  },
  {
    path: '/ManpowerLocation/Update_Demobilization/:id',
    element: < UpdateDemobization />,
  },
  {
    path: '/ManpowerLocation/DemobPermissionSite',
    element: <DemoPermissionSite />,
  },
  {
    path: '/ManpowerLocation/DemobTripTrackRecorde',
    element: <DemobTripTrackRecorde/>,
  },
  {
    path: '/ManpowerLocation/SummaryDemobTrip',
    element: <SammaryDemobTrips/>,
  },
  {
    path: '/ManpowerLocation/SummaryMobTrip',
    element: < SammaryMobTrips/>,
  },
  

  {
    path: '/Hr/VisaHealth/UpdateVisa',
    element: <EditVisa/>,
  },
  {
    path: '/Hr/VisaHealth/AddHealthCertification',
    element: <AddHealth/>,
  },
  {
    path: '/Hr/VisaHealth/AddCoronaVacine',
    element: <AddCorona/>,
  },

  {
    path: '/Hr/VisaHealth/ViewHealthCertification/:id',
    element: <  ViewHealth/>,
  },
  {
    path: '/Hr/VisaHealth/ViewCovid/:id',
    element: <ViewCovid/>,
  },
  {
    path: '/Hr/VisaHealth/EditHealthCertification/:id',
    element: <EditHealth/>,
  },
  {
    path: '/Hr/VisaHealth/EditCovid/:id',
    element: <EditCovid/>,
  },

  
  {
    path: '/Hr/VisaHealth/HealthCertification',
    element: <Health />,
  },
  {
    path: '/Hr/VisaHealth/CovidVaccine',
    element: <Covid />,
  },

  {
    path: '/Hr/VisaHealth/CoronaTest',
    element: <ComposedChart />,
  },
  {
    path: '/ManpowerLocation/ManpowerLocationTrackRecord',
    element: <LocationTripTrack />,
  },
  {
    path: '/ManpowerLocation/PersononBoard',
    element: <PersonOnBoard />,
  },
  {
    path: '/ManpowerLocation/HeadOfficeEmployees',
    element: <HeadOfficeEmployees />,
  },
  {
    path: '/ManpowerLocation/PROJECTSLOCATIONTRACKRECORD',
    element: <ProjectLocation />,
  },
 
 
  {
    path: '/ManpowerLocation/ManpowerAllocationPerProject',
    element: <ManpowerAllocationPerProject />,
  },
  {
    path: '/ManpowerLocation/DemobilizationDirectEmployeesSite',
    element: <DemobilizationDirect/>,
  },
  //
  {
    path: '/SiteCleark/IdJosAndDesertPass',
    element: <IdJosDesertPass/>,
  },
  {
    path: '/SiteCleark/Reached_ToSite_And_DemobFromSite',
    element: <ReachedToSite/>,
  },
  {
    path: '/SiteCleark/Reached_ToSite_And_DemobFromSite',
    element: <ReachedToSite/>,
  },
  {
    path: '/SiteCleark/Add-Employees-Pointages',
    element: <AddTimeSheetsite/>,
  },
  /*Payrolll*/
  {
    path: '/Payroll/SalariesTracker',
    element: <SalariesTracker/>,
  },
  {
    path: '/Payroll/PaymentRequest',
    element: <PaymentRequest />,
  },
  {
    path: '/Payroll/CalculateSiteSalary',
    element: <CalculateSalary />,
  },
  {
    path: '/Payroll/CalculateSalaryOffice',
    element: < CalculateSalaryOffice />,
  },
  {
    path: '/Payroll/Salary_Request_For_Payment',
    element: <RequestFORPayment />,
  },
  {
    path: '/Payroll/PAYMENT_ORDER_REQUESTS',
    element: <PAYMENTORDERREQUESTS />,
  },
  {
    path: '/Payroll/PAYMENT_ORDER_REQUESTS_Site',
    element: <PAYMENTORDERREQUESTSSite/>,
  },
  {
    path: '/Payroll/PAYMENT_For_REQUEST',
    element: <PAYMENTfORRequest/>,
  },
  {
    path: '/Payroll/PAYMENT_ORDER_REQUESTS_Setelment',
    element: <PaymentOrderRequestSetement/>,
  },
  {
    path: '/Payroll/PAYMENT-OrDER-FIANACIAL-COORDINATOR',
    element: <PAYMENTOrDERFIANACIAL />,
  },
  {
  path: '/Payroll/All-Request-Payment',
  element: <AllRequestPayment />,
},
{
  path: '/Payroll/Calculate-Setelment',
  element: <CalculateSetelment />,
},
{
  path: '/Payroll/FINANCE_SITTLEMET_OFFICE',
  element: <FINANCESITTLEMETOFFICE />,
},

  {
    path: '/Payroll/office/PAYMENT_ORDER_REQUESTS',
    element: <PaymentOrderRequestOffice  />,
  },
  {
    path: '/Payroll/Cash_Advance',
    element: <CashAdvance />,
  },
  {
    path: '/Payroll/Save/Request_Paymet/:id',
    element: <UpdateRequestPayment/>,
  },



  /*End Payroll*/
  
  
];

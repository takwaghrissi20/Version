import React from 'react';
import { RoutePermittedRole } from '@crema/constants/AppEnums';
import { Navigate } from "react-router-dom";
const RecruitementInterview  = React.lazy(() =>
  import('../../../modules/HRGetsCompany/RecruitementInterview'),
);
const InterviewStatistics = React.lazy(() =>
  import('../../../modules/HRGetsCompany/InterviewStatistics'),
);
const Customers = React.lazy(() =>
  import('../../../modules/HRGetsCompany/Customers'),
);

const Planification = React.lazy(() => import('../../../modules/HRGetsCompany/Planification'));
const Intergration = React.lazy(() => import('../../../modules/HRGetsCompany/Integration'));
const IntegrationStatistics = React.lazy(() =>import('../../../modules/HRGetsCompany/IntegrationStatistics'),);

const AddEmployeesConstructionStaff = React.lazy(() =>
  import('../../../modules/HRGetsCompany/AddEmployeesConstructionStaff'),
);
const AddEmployeesManagementStaff = React.lazy(() =>
  import('../../../modules/HRGetsCompany/AddEmployeesManagementStaff'),

);
const ContartTypeB1 = React.lazy(() =>
  import('../../../modules/ContratPrint'),
);
const ContartTypeB2 = React.lazy(() =>
  import('../../../modules/ContratConstructionTeam/ContratB2'),
);
const ContartTypeB3 = React.lazy(() =>
  import('../../../modules/ContratConstructionTeam/ContratB3'),
);

const ContratStatus = React.lazy(() =>
  import('../../../modules/HRGetsCompany/ContratStatus'),   
);

const Sammuary = React.lazy(() =>
  import('../../../modules/SammaryEmployee'),
);

const AddEmployees = React.lazy(() =>
  import('../../../modules/HRGetsCompany/AddEmployees/ScrumBoard'),
);
const ContartTypeC = React.lazy(() =>
  import('../../../modules/ContratConstructionTeam/ContratC'),
);
const ContartTypeD= React.lazy(() =>
  import('../../../modules/ContratConstructionTeam/ContratD'),
);
const ContartTypeA1= React.lazy(() =>
  import('../../../modules/ContratStaffManagement/ContratA1'),
);
const ContartTypeA2= React.lazy(() =>
  import('../../../modules/ContratStaffManagement/ContartA2'),
);
const ContartTypeA3= React.lazy(() =>
  import('../../../modules/ContratStaffManagement/ContartA3'),
);
const ContartTypeE1= React.lazy(() =>
  import('../../../modules/ContratStaffManagement/ContratE1'),
);
const ContartTypeE2= React.lazy(() =>
  import('../../../modules/ContratStaffManagement/ContratE2'),
);
const ContartTypeE3= React.lazy(() =>
  import('../../../modules/ContratStaffManagement/ContratE3'),
);
const ContratE3S2= React.lazy(() =>
  import('../../../modules/ContratStaffManagement/ContratE3S2'),
);
const ContratB2= React.lazy(() =>
  import('../../../modules/ContratConstructionTeam/ContratB2'),
);

export const ecommerceConfig = [
  {
    permittedRole: RoutePermittedRole.User,
    path: '/Hr/Recruitement&Interview',
    element: <RecruitementInterview  />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: [
      '/Hr/InterviewStatistics/'
   
    ],
    element: <InterviewStatistics />,
  },
  
  {
    permittedRole: RoutePermittedRole.User,
    path: '/Hr/Planification',
    element: <Planification />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/Hr/Integration',
    element: <IntegrationStatistics />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/Hr/IntegrationStatistics',
    element: <Intergration />,
  },
 
  {
    permittedRole: RoutePermittedRole.User,
    path: '/HRGetsCompany/AddEmployees/ConstructionStaff',
    element: <AddEmployeesConstructionStaff />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/HRGetsCompany/AddEmployees/AddEmployeesManagementStaff',
    element: <AddEmployeesManagementStaff />,
  },
 
  {
    permittedRole: RoutePermittedRole.User,
    path: '/HRGetsCompany/ContartTypeB1',
    element: <ContartTypeB1 />,
  },
  //Contact B2
 
  {
    permittedRole: RoutePermittedRole.User,
    path: '/HRGetsCompany/ContartTypeB2',
    element: <ContartTypeB2 />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/HRGetsCompany/ContartTypeB3',
    element: <ContartTypeB3 />,
  },
  //Contrat B3

//C
{
  permittedRole: RoutePermittedRole.User,
  path: '/HRGetsCompany/ContartTypeC',
  element: <ContartTypeC />,
},
//D
{
  permittedRole: RoutePermittedRole.User,
  path: '/HRGetsCompany/ContartTypeD',
  element: <ContartTypeD />,
},

  //End Contact
//Contrat Statt Management
{
  permittedRole: RoutePermittedRole.User,
  path: '/HRGetsCompany/StaffManagement/ContartTypeA1',
  element: <ContartTypeA1 />,
},
{
  permittedRole: RoutePermittedRole.User,
  path: '/HRGetsCompany/StaffManagement/ContartA2',
  element: <ContartTypeA2 />,
},
{
  permittedRole: RoutePermittedRole.User,
  path: '/HRGetsCompany/StaffManagement/ContartA3',
  element: <ContartTypeA3 />,
},
{
  permittedRole: RoutePermittedRole.User,
  path: '/HRGetsCompany/StaffManagement/ContartE1',
  element: <ContartTypeE1 />,
},
{
  permittedRole: RoutePermittedRole.User,
  path: '/HRGetsCompany/StaffManagement/ContartE2',
  element: <ContartTypeE2 />,
},
{
  permittedRole: RoutePermittedRole.User,
  path: '/HRGetsCompany/StaffManagement/SERVICE 1-E3',
  element: <ContartTypeE3 />,
},
{
  permittedRole: RoutePermittedRole.User,
  path: '/HRGetsCompany/StaffManagement/SERVICE2-E3',
  element: <ContratE3S2/>,
},
//Construction Team Contract 
{
  permittedRole: RoutePermittedRole.User,
  path: '/HRGetsCompany/ConstructionStaff/ContartB2',
  element: <ContratB2/>,
},



//End Construction Team Contract




  {
    permittedRole: RoutePermittedRole.User,
    path: '/HrDataBase/Sammuary',
    element: <Sammuary/>,
  },

  {
    permittedRole: RoutePermittedRole.User,
    path: '/apps/HRGetsCompany/invoice-2',
    element: <ContratStatus />,
  },

  {
    permittedRole: RoutePermittedRole.User,
    path: ['/apps/scrum-board/:id', '/apps/scrum-board/ConstructionTeam','/Hr/AddEmployees'],
    element: <AddEmployees />,
  },

  {
    permittedRole: RoutePermittedRole.User,
    path: '/Hr/contractList',
    element:<ContratStatus />,
  },

  {
    permittedRole: RoutePermittedRole.User,
    path: '/Hr/EmployeesOffice',
    element: <Customers />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/Hr/EmployeesSite',
    element:<Customers />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/apps/ecommerce-admin/edit-products/:id',
    element:<Customers />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/Hr/EmployeesSiteOffice',
    element: <Customers />,
  },
];

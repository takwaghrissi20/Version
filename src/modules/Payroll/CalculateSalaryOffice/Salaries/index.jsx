
import React, { useState, useEffect } from 'react';
import { Input, Row, Col, Select, DatePicker, Button, Spin, Form } from 'antd';
import { StyledOrderHeader, StyledOrderHeaderInputView, StyledOrderHeaderRight } from './index.styled';
import { useGetDataApi } from '../../../../@crema/hooks/APIHooks';
import { useIntl } from "react-intl";
import dayjs from 'dayjs';
import Salarypayment from './salarypayment';
import { StyledBuyCellCard, StyledTabs } from '../../../../styles/index.styled';
import moment from 'moment';

const Table = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [lastNumberTransferNumber, setLastNumberTransferNumber] = useState(0);
  const [allemployee, setAllemployee] = useState([]);
  const [projName, setProjName] = useState([]);
  const [costCenters, setCostCenters] = useState([]);
  const [costCenter, setCostCenter] = useState([]);
  const [deductionMonth, setDeductionMonth] = useState(dayjs());
  const [selectType, setSelectType] = useState("");
  const [selectedProject, setSelectedProject] = useState('');
  const [selectedTypePament, setSelectedTpePayment] = useState('');
  const [chequeName, setChequeName] = useState('');
  const [transfer, setTransfer] = useState('');
  const [transferRef, setTransferRef] = useState('');
  const [bancAccount, setBancAccount] = useState('');
  const [ibanNumber, setIbanNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [typecompany, setTypecompany] = useState('');
  const [listCosCenterAndProjName, setListCosCenterAndProjName] = useState([]);
  const [projectOptions, setProjectOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [listprojName, setListprojName] = useState([]);
  const [listCosCenter, setListCosCenter] = useState([]);
  const token = localStorage.getItem("token");
  const now = new Date();
  const currentYear = now.getFullYear();
  console.log("currentYear", currentYear)
  const [form] = Form.useForm();
  const TypePaymrnt = [
    { type: 'CASH' },
    { type: 'CHEQUE' },
    { type: 'Transfer Remittance' },

  ];
  const listbancAccount = [
    { type: 'BIAT-E-TND', iban: "08704000451002103249" },
    { type: 'ZITOUNA -E-TND', iban: "" },
    { type: 'ATTIJARI -E-TND', iban: "" },
    // { type: 'ATTIJARI-E-USD' },
    // { type: 'ATTIJARI-E-EURO' },
    { type: 'ATTIJARI -T-TND', iban: "" },
    // { type: 'ATTIJARI-T-USD' },
    // { type: 'ATTIJARI -T-EURO' },
    // { type: 'ATTIJARI -T-EURO' },
    // { type: 'ATTIJARI -T-NEGOCE-USD ' },
    // { type: 'BIAT-T-NEGOCE-USD  ' },
    { type: 'zitouna VAIC TND', iban: "" },
    { type: 'BIAT VAIC TND', iban: "" },
    // { type: 'BIAT VAIC USD' },
    { type: 'alBaraka -E-TND', iban: "32034788116194074110" },


  ];

  const Subject = [
    // { type: 'FINANCE SETTLEMENT' },
    // { type: 'FLIGHT TICHET MANPOWER' },
    // { type: 'TRANSPORTATION BY ROAD MANPOWER' },
    // { type: 'INTERNAL TRANSPORTATION MANPOWER' },
    // { type: 'MANPOWER HOTEL PAYMENT' }
    // { type: 'SALARY PAYMENT OFFICE' },
    { type: 'SALARY PAYMENT Office' },
   
    // { type: 'STANDBY WELDERS IN TUNISIA' },
    // { type: 'VISA REQUEST IN THE EMBASSY' },
    // { type: 'MISSION TO TUNISIA' },
    // { type: 'ADVANCE PAYMENT SITE' },
    // { type: 'ADVANCE PAYMENT OFFICE' },


  ];
  const Company = [
    { type: 'GETS E&C' },
    { type: 'TRADE' },
    { type: 'VAIC' },

  ];
  useEffect(() => {
  
    fetchCosCenter()
    fetchAllListRequestPayment()
    // fetchAllListEmployee();
    fetchAllListEmployee()
  }, [currentPage, pageSize]);
  const lastNumberTransferNumberIncrement = lastNumberTransferNumber + 1
  const fetchCosCenter = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/proj/list?token=${token}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch employees');
      }

      const data = await response.json();

      // Filter the projects by cosCenter
      const dataCosCenter = data.filter(p => p.cosCenter);

      // Map to get only cosCenter and projName
      const listCosCenterAndProjName = dataCosCenter.map(p => ({
        projName: p.projName,
        cosCenter: p.cosCenter
      }));

      console.log("List of cosCenter and projName:", listCosCenterAndProjName);
      setListCosCenterAndProjName(listCosCenterAndProjName)
      // Extract projName and cosCenter, then update the state
      const projNames = dataCosCenter.map(p => p.projName);
      const cosCenters = dataCosCenter.map(p => p.cosCenter);

      setListprojName(projNames)
      setListCosCenter(cosCenters)

      console.log("ProjNames:", projNames);
      console.log("CosCenters:", cosCenters);

    } catch (error) {
      console.error('Erreur lors de la récupération des données Project List:', error);
    }
  };
  useEffect(() => {
    let refPrefix = '';
    if (selectedTypePament === 'Transfer Remittance') {
      if (bancAccount.includes('-E-')) {
        refPrefix = 'E';
      } else if (bancAccount.includes('-T-')) {
        refPrefix = 'T';
      } else if (bancAccount.includes('VAIC')) {
        refPrefix = 'VIAC';
      }
    }
    setTransferRef(`T-${refPrefix}-${lastNumberTransferNumber}-${currentYear}`);
  }, [selectedTypePament, bancAccount, lastNumberTransferNumber, currentYear]);

  const fetchAllListEmployee = async () => {
    try {
      setLoading(true); // Start loading indicator
      const type = encodeURIComponent('office & site');
  
      // URLs for both API calls
      const url = `https://dev-gateway.gets-company.com/api/v1/emp/getEmByTypeWithoutPage?type=office&token=${token}`;
      const urlSiteAndOffice = `https://dev-gateway.gets-company.com/api/v1/emp/getEmByTypeWithoutPage?type=${type}&token=${token}`;
  
      // Parallel API calls
      const [response, responseSiteAndOffice] = await Promise.all([
        fetch(url, { method: 'GET', headers: { 'Content-Type': 'application/json' } }),
        fetch(urlSiteAndOffice, { method: 'GET', headers: { 'Content-Type': 'application/json' } })
      ]);
  
      // Handle response errors
      if (!response.ok || !responseSiteAndOffice.ok) {
        throw new Error('Failed to fetch employees');
      }
  
      // Convert responses to JSON
      const data = await response.json();
      const dataSiteOffice = await responseSiteAndOffice.json();
      
      // Filter active employees from both datasets
      const activeEmployees = [
        ...data.filter(emp => emp.actStatus === "Active"),
        ...dataSiteOffice.filter(emp => emp.actStatus === "Active")
      ];
  
      setAllemployee(activeEmployees);
  
      // Collect project names and cost centers
      const projectInfoSet = new Set();
      const costCenterSet = new Set();
  
      activeEmployees.forEach(employee => {
        if (employee?.projects && employee?.projects.length > 0) {
          employee.projects.forEach(project => {
            const projName = project.projName?.trim() || '';
            const cosCenter = project.cosCenter?.trim() || '';
  
            if (projName) {
              projectInfoSet.add(JSON.stringify({ projName, cosCenter }));
            }
            if (cosCenter) {
              costCenterSet.add(cosCenter);
            }
          });
        }
      });
  
      // Update state with project and cost center info
      setProjName(Array.from(projectInfoSet).map(item => JSON.parse(item)));
      setCostCenters(Array.from(costCenterSet));
  
      setLoading(false); 
    } catch (error) {
      console.error('Error fetching employee data:', error);
      setLoading(false); // Stop loading indicator in case of error
    }
  };
  
  const fetchAllListEmployeetest = async () => {
 
    try {
      setLoading(true); 

      const endPoint = process.env.NODE_ENV === 'development'
        ? 'https://dev-gateway.gets-company.com'
        : '';
      const type = encodeURIComponent('office & site');

      // URLs pour les deux appels API
      const url = `https://dev-gateway.gets-company.com/api/v1/emp/getEmByTypeWithoutPage?type=site&token=${token}`;
      const urlSiteAndOffice = `https://dev-gateway.gets-company.com/api/v1/emp/getEmByTypeWithoutPage?type=${type}&token=${token}`;

      // Appels API parallèles
      const [response, responseSiteAndOffice] = await Promise.all([
        fetch(url, { method: 'GET', headers: { 'Content-Type': 'application/json' } }),
        fetch(urlSiteAndOffice, { method: 'GET', headers: { 'Content-Type': 'application/json' } })
      ]);

      // Vérification des réponses
      if (!response.ok || !responseSiteAndOffice.ok) {
        throw new Error('Échec de la récupération des employés');
      }

      // Extraction des données JSON
      const data = await response.json();
      const dataSiteOffice = await responseSiteAndOffice.json();
      console.log("Employés dataSiteOffice:", dataSiteOffice);
      console.log("Employés dataSite:", data);
      // Filtrage des employés actifs
      const activeEmployees = [
        ...data.filter(emp => emp.actStatus === "Active"),
        ...dataSiteOffice.filter(emp => emp.actStatus === "Active")
      ];

      // Mise à jour de l'état avec les employés actifs
      setAllemployee(activeEmployees);
      console.log("Employés actifs:", activeEmployees);

      // Création des sets pour les projets et les centres de coûts
      const projectInfoSet = new Set();
      const costCenterSet = new Set();

      activeEmployees.forEach(employee => {
        if (employee?.projects && employee?.projects.length > 0) {
          employee.projects.forEach(project => {
            const projName = project.projName ? project.projName.trim() : '';
            const cosCenter = project.cosCenter ? project.cosCenter.trim() : '';

            if (projName) {
              projectInfoSet.add(JSON.stringify({ projName, cosCenter }));
            }

            if (cosCenter) {
              costCenterSet.add(cosCenter);
            }
          });
        }
      });

      // Mise à jour des états avec les informations de projets et centres de coûts
      setProjName(Array.from(projectInfoSet).map(item => JSON.parse(item)));
      setCostCenters(Array.from(costCenterSet));
      console.log("Centres de coûts:", Array.from(costCenterSet));

      setLoading(false); // Arrête le chargement

    } catch (error) {
      console.error('Erreur lors de la récupération des données getEmByTypeWithoutPage:', error);
      setLoading(false); // Arrête le chargement en cas d'erreur
    }
  };

  const fetchAllListRequestPayment = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/RequestPayment/list?token=${token}`, {
        headers: {

          'Content-Type': 'application/json',

        }
      });


      if (!response.ok) {
        throw new Error('Failed to fetch employees');
      }
      const data = await response.json();

      const FiltertransferRef = data.filter(p => p.paymentType === "Transfer Remittance")
      console.log("datta TRANSFER NUMBER", FiltertransferRef)
      const transferNumbers = FiltertransferRef
        .map(p => p.transferNumber
        )
        .filter(num => num !== undefined);

      if (transferNumbers.length > 0) {
        const maxTransferNumber = Math.max(...transferNumbers);
        console.log("Le plus grand transferNumber:", maxTransferNumber);
        setLastNumberTransferNumber(maxTransferNumber)
      } else {
        console.log("Aucun transferNumber trouvé.");
      }
      console.log("Le plus grand transferNumber:", maxTransferNumber);


    }
    catch (error) {
      console.error('Erreur lors de la récupération des données Filter Request Payment:', error);

    }
  };

  const handleCostCenterChange = (value) => {
    setCostCenter(value);
  
    // Find the matching project based on the selected cost center
    const matchedProject = listCosCenterAndProjName.find(proj => proj.cosCenter === value);
    if (matchedProject) {
      setSelectedProject(matchedProject.projName);
    } else {
      setSelectedProject('');
    }
  };

  const handlePayment = (value) => {
    setSelectedTpePayment(value);
    if (value === 'default') {
      window.location.reload();
    }
    if (value.includes('-E-')) {
      setTransferRef(`E${lastNumberTransferNumberIncrement}`);
    } else if (value.includes('-T-')) {
      setTransferRef(`T${lastNumberTransferNumberIncrement}`);
    }


  };
  const handleBanc = (value) => {
    setBancAccount(value);

    const selectedBank = listbancAccount.find(bank => bank.type === value);
    if (selectedBank) {
      setIbanNumber(selectedBank.iban || "");
    }

    if (value.includes('-E-')) {
      setTypecompany('GETS E&C');
    } else if (value.includes('-T-')) {
      setTypecompany('TRADE');
    } else if (value.includes('VAIC')) {
      setTypecompany('VAIC');
    }

    if (value === 'default') {
      window.location.reload();
    }
  };
  const handleSubject = (value) => {
    setSubject(value);
    if (value === 'default') {
      window.location.reload();
    }
  };
  const handleCompany = (value) => {
    setTypecompany(value);
    if (value === 'default') {
      window.location.reload();
    }
  };

  const handleFilterApply = () => {
    let filteredEmployees = allemployee;
    // Filtrage par projet sélectionné
    if (selectedProject) {
      filteredEmployees = filteredEmployees.filter(employee => {
        return employee.projects.some(project => project.projName === selectedProject);
      });
      console.log("Filtered Employees by Project", filteredEmployees);
    }
  
    // Filtrage par type de société (companyType)
    if (typecompany) {
      filteredEmployees = filteredEmployees.filter(employee => employee.companyType === typecompany);
      console.log("Filtered Employees by Company Type", filteredEmployees);
    }
  
    // // Filtrage par mois de pointage
    const selectedMonth = deductionMonth.format('MMMM').toUpperCase();
    filteredEmployees = filteredEmployees.filter(emp => {
      return emp.officepointages.some(pointage => pointage.month === selectedMonth && pointage.pointage !== null);
    });
    //Filter les employees How has rib as Transfer Remittence
    if (selectedTypePament === 'Transfer Remittance') {
      filteredEmployees = filteredEmployees.filter(employee => {
          return !(employee.rib === "CHEQUE" || employee.rib === "CASH");
      });
      console.log("No Rib filteredEmployees", filteredEmployees);
  }
   



  
    // Setting the filtered employees to state
    setAllemployee(filteredEmployees);
  
    // Ensuring the console log reflects the most recent filtered data
    console.log("Filtered Employees after all filters", filteredEmployees);
  };
  

  console.log("Filtered Employees after all filters 1111", allemployee);
  const items = [
    {
      label: 'Calculate Employee Office salaries',
      key: '1',
      children:
        <div style={{ margin: "1rem" }}>
          <Row style={{ marginBottom: "2rem" }} gutter={16}>
            <Col span={10}>
              <span className='TitleInput'>Cost Center</span>
              <Select
                style={{ width: "100%", marginTop: "0.5rem" }}
                placeholder="Cost Center"
                allowClear
                onChange={handleCostCenterChange}
                value={costCenter}
              >
                <Select.Option key="default" value="default">Default</Select.Option>
                {listCosCenter?.map(center => (
                  <Select.Option key={center} value={center}>{center}</Select.Option>
                ))}
              </Select>
            </Col>
            <Col span={10}>
              <span>Project Name</span>
              <Input
                style={{ width: "100%", marginTop: "0.5rem" }}
                value={selectedProject}
                readOnly
              />
            </Col>
          </Row>

          {/* Select Transfer Remittance Or Cheque */}
          <Row style={{ marginBottom: "2rem" }} gutter={16}>
            <Col span={10}>
              <span>Month of</span>
              <DatePicker
                style={{ width: "100%", height: "30px", marginTop: "0.5rem" }}
                picker="month"
                placeholder="For Month"
                onChange={(value) => setDeductionMonth(value)}
                value={deductionMonth}
                format={(value) => value.format("MMMM").toUpperCase()}
              />
            </Col>
            <Col span={10}>
              <span>Type Payment</span>
              <Select
                style={{ width: "100%", marginTop: "0.5rem" }}
                placeholder="Type ¨Payment"
                allowClear
                onChange={handlePayment}
                value={selectedTypePament}

              >
                <Select.Option key="default" value="default">
                  Default
                </Select.Option>
                {TypePaymrnt.map(p => (
                  <Select.Option key={p.type} value={p.type}>
                    {p?.type}
                  </Select.Option>
                ))}
              </Select>
            </Col>
          </Row>
          {/*Bank Account && Iban */}
          {selectedTypePament === "Transfer Remittance" || selectedTypePament === "CHEQUE" ?
            <Row style={{ marginBottom: "2rem" }} gutter={16}>
              <Col span={10}>
                <span style={{ marginBottom: "0.5rem" }}>FROM BANK ACCOUNT</span>
                <div style={{ height: "0.25rem" }}></div>
                <Select
                  style={{ width: "100%", marginTop: "0.5rem" }}
                  placeholder="FROM BANK ACCOUNT"
                  allowClear
                  onChange={handleBanc}
                  value={bancAccount}

                >
                  <Select.Option key="default" value="default">
                    Default
                  </Select.Option>
                  {listbancAccount.map(p => (
                    <Select.Option key={p.type} value={p.type}>
                      {p?.type}
                    </Select.Option>
                  ))}
                </Select>

              </Col>
              <Col span={10}>
                <span style={{ marginBottom: "0.5rem" }}>IBAN NUMBER</span>
                <div style={{ height: "0.75rem" }}></div>
                <Input
                  type='number'
                  placeholder="IBAN NUMBER"
                  value={ibanNumber}
                  readOnly
                ></Input>
              </Col>

              {/* <Col span={10}>
                <span style={{ marginBottom: "0.5rem" }}>IBAN NUMBER</span>
                <div style={{ height: "0.75rem" }}></div>
                <Input
                  type='number'
                  placeholder="IBAN NUMBER"
                  value={ibanNumber}
                  onChange={() => setIbanNumber()}

                ></Input>

              </Col> */}
              <Col span={10}>


              </Col>

            </Row>
            : null}
          {/*End Banc Account*/ }
          {/*Select Cheque */}
          {selectedTypePament === "CHEQUE" ?
            <Row style={{ marginBottom: "2rem" }} gutter={16}>
              <Col span={10}>
                <span style={{ marginBottom: "0.5rem" }}>CHEQUE  RECEIVER NAME</span>
                <div style={{ height: "0.25rem" }}></div>
                <Input
                  placeholder="CHEQUE  RECEIVER NAME"
                  value={chequeName}
                  onChange={() => setChequeName()}

                ></Input>

              </Col>
              <Col span={10}>


              </Col>
            </Row>
            : null}
          {/*End Select Cheque*/}
          {/* Select Transfer Remittance*/}
          {selectedTypePament === "Transfer Remittance" ?
            <Row style={{ marginBottom: "2rem" }} gutter={16}>
              <Col span={10}>
                <span style={{ marginBottom: "0.5rem" }}>TRANSFER NUMBER</span>
                <div style={{ height: "0.25rem" }}></div>
                <Input
                  placeholder={lastNumberTransferNumber}
                  readOnly
                // value={transfer}
                // onChange={() => setTransfer()}

                ></Input>

              </Col>
      
              <Col span={10}>
                <span style={{ marginBottom: "0.5rem" }}>TRANSFER REFERENCE</span>
                <div style={{ height: "0.25rem" }}></div>
                <Input
                  placeholder="TRANSFER REFERENCE"
                  value={transferRef}
                  readOnly
                // onChange={() => setTransferRef()}
                ></Input>

              </Col>
              <Col span={10}>
               

              </Col>

            </Row>
            : null}

          {/* End Select Transfer Remittance*/}
          <Row style={{ marginBottom: "2rem" }} gutter={16}>
            <Col span={10}>
              <span>REQUEST SUBJECT</span>
              <Select
                style={{ width: "100%", marginTop: "0.5rem" }}
                placeholder="Request Subject"
                allowClear
                onChange={handleSubject}
                value={subject}

              >
                <Select.Option key="default" value="default">
                  Default
                </Select.Option>
                {Subject.map(p => (
                  <Select.Option key={p.type} value={p.type}>
                    {p?.type}
                  </Select.Option>
                ))}
              </Select>
            </Col>
            <Col span={10}>
              <span>GETS COMPANY/TRADE</span>
              <Select
                style={{ width: "100%", marginTop: "0.5rem" }}
                placeholder={typecompany}
                allowClear
                onChange={handleCompany}
                value={typecompany}

              >
                <Select.Option key="default" value="default">
                  Default
                </Select.Option>
                {Company.map(p => (
                  <Select.Option key={p.type} value={p.type}>
                    {p?.type}
                  </Select.Option>
                ))}
              </Select>
            </Col>
          </Row>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button type="primary" onClick={handleFilterApply}>Apply Filter</Button>
          </div>

          {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
              <Spin size="large" />
            </div>
          ) : (
            <Salarypayment
              costCenter={costCenter}
              selectedProject={selectedProject}
              allemployee={allemployee}
              deductionMonth={deductionMonth}
              selectedTypePament={selectedTypePament}
              subject={subject}
              typecompany={typecompany}
              chequeName={chequeName}
              bancAccount={bancAccount}
              ibanNumber={ibanNumber}
              transfer={transfer}
              transferRef={transferRef}
              listprojName={listprojName}
              lastNumberTransferNumberIncrement={lastNumberTransferNumberIncrement}
              lastNumberTransferNumber={lastNumberTransferNumber}
              currentYear={currentYear}
             

            />
          )}
        </div>
    },
  ];


  return (
    <div>
      <h2 className="Title">Salary Employees Office</h2>
      <div style={{ marginBottom: "20px" }}>
        <StyledBuyCellCard style={{ paddingLeft: "10px" }} title="Salary Employees Office">
          <StyledTabs defaultActiveKey="1">
            {items.map(item => (
              <StyledTabs.TabPane key={item.key} tab={item.label}>
                {item.children}
              </StyledTabs.TabPane>
            ))}
          </StyledTabs>
        </StyledBuyCellCard>
      </div>
    </div>
  );
};

export default Table;

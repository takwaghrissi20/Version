import React, { useState, useEffect } from 'react';
import AppRowContainer from '../../../../@crema/components/AppRowContainer';
import { Button, Col, Divider, Form, Input, Space, Typography, Select, Alert, List, Row } from 'antd';
import {
  StyledSecondaryText,
  StyledShadowWrapper,
  StyledScrumBoardDatePicker,

} from './index.styled';
import { MdEdit } from 'react-icons/md';
import { useInfoViewActionsContext } from "../../../../@crema/context/AppContextProvider/InfoViewContextProvider";
import { useNavigate } from "react-router-dom";
import { useIntl } from 'react-intl';
import { FaSearch } from "react-icons/fa";
import ValidateEmployees from "../../../Model/ModalValidateInfoEmployee"
import moment from 'moment';
const { Option } = Select;
const AddEmployeeTemporelleConstructionStaff = ({ listInterview }) => {
  const token = localStorage.getItem("token")
  const navigate = useNavigate();
  const { messages } = useIntl();
  const [intCode, setIntCode] = useState("Code Interview Sheet");
  const [findIdInterview, setFindIdInterview] = useState(0);
  const [selectedContractCategorie, setSelectedContractCategorie] = useState('');
  const [selectedEmpTypeType, setSelectedEmpTypeType] = useState('');
  const [selectedStatusTypeCompany, setSelectedStatusTypeCompany] = useState('');
  const [selectedContratType, setSelectedContratType] = useState('')
  const [selectedRelationType, setSelectedRelationType] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isTargetproductivityVisible, setIsTargetproductivityVisible] = useState(false);
  const [contratType, setContratType] = useState("CDD");
  const [employeeType, setEmployeeType] = useState("Site");
  const [category, setCategory] = useState("Construction Staff")
  console.log("setContratType", contratType)
  const handleValidateEmployeeClose = () => {
    setIsModalVisible(false);
  };
  const handleValidateEmployeOpen = () => {
    setIsModalVisible(true);
  };


  const infoViewActionsContext = useInfoViewActionsContext();


  const [showAlert, setShowAlert] = useState(false);
  const [showAlertError, setShowAlertError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [positionfieledarabe, setPositionfieledarabe] = useState("");
  const [selectedGenderType, setSelectedGenderType] = useState('');
  const [form] = Form.useForm();


  const ListContrat = [

    {
      type: "CAT-B2",

    },
    {
      type: "CAT-B3",

    },
    {
      type: "CAT-C",

    },
    {
      type: "CAT-D",

    },



  ]
  const ListGender = [
    {
      gender: "Male",

    },
    {
      gender: "Female",

    },




  ]
  const EmpType = [
    {
      type: "Office",

    },
    {
      type: "Site",

    },
    {
      type: "Office & Site",

    },



  ]

  const TypeContrat = [
    {
      type: "CVP",

    },
    {
      type: "CDD",

    },
    {
      type: "CDI",

    },

  ]
  const TypeCompany = [
    {
      type: "GLOBAL ENGINEERING FOR TECHNICAL SERVICES",

    },
    {
      type: "Gets Trade",

    },



  ]
  const RelationShip = [
    {
      type: "Father",

    },
    {
      type: "Mother",

    },
    {
      type: "Husband",

    },
    {
      type: "Other",

    },



  ]


  ///////////////////////////////////////////////////////
  const [selectedInterviews, setSelectedInterviews] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleItemClick = (interview) => {
    const isSelected = selectedInterviews.some(item => item.interviewCode === interview.interviewCode);

    if (!isSelected) {
      setSelectedInterviews([...selectedInterviews, interview]);
      setIsDropdownOpen(false);
    }
    setIsDropdownOpen(false);
  };



  const filteredInterviews = searchValue.trim() === '' ? listInterview : listInterview.filter(interview => {
    return interview.interviewCode.toString().startsWith(searchValue);
  });

  const handleSearch = value => {
    setSearchValue(value);
    setIsDropdownOpen(value.trim() !== '');
  };

  ////////////////////////////////////////////
  const fetchDataId = async (searchValue) => {
    try {
      const endPoint =
        process.env.NODE_ENV === "development"
          ? "https://dev-gateway.gets-company.com"
          : "";
      const CodeInterview = parseInt(searchValue) + 1; // Increment intCode by 1
      console.log("CodeInterview=", searchValue);
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/intc/findId?code=${searchValue}&token=${token}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (!response.ok) {
        throw new Error('La requête a échoué avec le code ' + response.status);
      }
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new TypeError("La réponse n'est pas au format JSON");
      }

      const data = await response.json();
      setFindIdInterview(data)
      fetchPositionTranslate()




    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
    }
  };

  //Api Position Fieled Arabe
  useEffect(() => {
    fetchPositionTranslate();
  }, [findIdInterview?.positionToBeFilled]);

  const fetchPositionTranslate = async () => {
    try {
      const endPoint =
        process.env.NODE_ENV === "development"
          ? "https://dev-gateway.gets-company.com"
          : "";

      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/trans/get?description=${findIdInterview?.positionToBeFilled}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (!response.ok) {
        throw new Error('La requête a échoué avec le code ' + response.status);
      }

      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json(); // Utilisez response.json() pour récupérer les données JSON
        console.log("Données JSON:", data);
      } else {
        const data = await response.text(); // Utilisez response.text() pour récupérer les données textuelles
        console.log("Données textuelles:", data);
        setPositionfieledarabe(data)
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
    }
  };



  const formData = form.getFieldsValue();

  //Calcul Duration Period





  // if (FinishDate) {
  //   // Convertir la date en format "YYYY-MM-DD"
  //   const formattedDate = FinishDate.format("YYYY-MM-DD");
  //   console.log("FinishDatdddd", formattedDate);
  // } else {
  //   console.log("FinishDatdddd is undefined");
  // }
  //   console.log("expected JoinDate", findIdInterview?.expectedJoinDate)
  //   const ExpectedJoinDate=findIdInterview?.expectedJoinDate
  //   const finish=formData?.finishDate


  // // Calcule la différence entre les deux dates en millisecondes
  // const differenceInMilliseconds = Math.abs(ExpectedJoinDate- FinishDate);

  // // Convertit la différence en jours
  // const differenceInDays = differenceInMilliseconds / (1000 * 3600 * 24);

  // console.log("Différence en jours :", differenceInDays);


  // const handleOpenAfter = () => {
  //   const formDataIsEmpty = Object.values(formData).every(value => !value);

  //   if (formDataIsEmpty) {
  //     setIsModalVisible(true);

  //   } else {
  //     setIsModalVisible(true);
  //     console.log(" setIsModalVisible Forma",formDataIsEmpty)
  //   }
  // };

  // const handleOpenAfter = () => {
  //   if (formData.arName) {
  //     setIsModalVisible(true);
  //   } else {
  //     setIsModalVisible(false);
  //   }

  // };
  // const handleOpenAfter = () => {
  //   const formDataIsEmpty = Object.values(formData).some(value => !value);

  //   if (formDataIsEmpty) {
  //     alert("Please replace all the champs");
  //   } else {
  //     setIsModalVisible(true);
  //   }
  // };
  //selectedGenderType
  const handleSubmit = (e) => {
    e.preventDefault();
  };


  const cancelInfo = () => {
    form.setFieldsValue({
      arName: '', CIN: '', nationality: '', phoneNumber: '', selectedGenderType: '',
      residenceAdress: '', arResidenceAdress: '', passportnumber: '', passportSubmitdate: '', passport_finish_date: '',
      email: '', finishDate: '', selectedStatusTypeCompany: '', traveldate: '', endTravelDate: '',
      destination: '', arDestination: '', duration: '', emergencyName: '', selectedRelationType: '',
      phoneEmergency: '', selectedContractCategorie: '', primeProductivity: ''


    });

  };
  const handleOpenAfter = () => {
    form.validateFields(['CIN', 'cinDate', 'arName', 'nationality', 'gender', 'phoneNumber', 'residenceAdress',
      'arResidenceAdress', 'passportnumber', 'passportSubmitdate', 'passport_finish_date', 'type_Emp', 'email',
      'companyType', 'traveldate', 'endTravelDate', 'destination', 'arDestination', 'duration', 'emergencyName',
      'emergencyRelation', 'phoneEmergency'

    ]).then(values => {
      setIsModalVisible(true);
   


    }).catch(errorInfo => {
      alert("Please complete all fields.");
      setIsModalVisible(false);

    });
  };

  useEffect(() => {

    if (selectedContractCategorie === "CAT-B2") {
      console.log("proddd")
      setIsTargetproductivityVisible(true)
    }
  }, []);




  return (
    <>
      <Form
        form={form}
        initialValues={{ name: findIdInterview?.fullName }}
        layout='vertical'
        onSubmit={e => { e.preventDefault() }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
          }
        }}>
        <Row style={{ justifyContent: "flex-end" }}>
          <Col xs={24} lg={6} style={{
            paddingTop: "15px", paddingBottom: "15px", paddingLeft: "5px",
            display: "Flex",

            position: "relative",
            minHeight: "44px",
            background: "#fff",
            border: "1px solid transparent",
            boxShadow: "0 2px 5px 1px rgba(64, 60, 67, .16)",
            borderRadius: "8px",



          }}>
            {/* <FaSearch></FaSearch> */}
            <span style={{marginTop:"0.5rem"}}>CIS- </span>
            <Input
              style={{
                borderRight: '1px solid grey',
                border: '1px solid #c9d5f2', // Bordure transparente par défaut
                outline: 'none', // Supprime la bordure de focus par défaut
                '&:focus': {
                  border: '1px solid transparent', // Rend la bordure transparente lorsqu'en focus
                }
              }}

              placeholder="Interview Code"
              onChange={(e) => handleSearch(e.target.value)}
              //value={searchValue ? searchValue : 'CIS'}
              value={searchValue}
              suffix={<FaSearch onClick={() => fetchDataId(searchValue)} style={{ cursor: 'pointer' }} />}
            >
              
            </Input>
            {/* <input
              style={{
                borderRight: '1px solid grey',
                border: '1px solid transparent', 
                outline: 'none', 
                '&:focus': {
                  border: '1px solid transparent', 
                }
              }}

              placeholder="Interview Code"
              onChange={(e) => handleSearch(e.target.value)}
             
              value={searchValue}
            ></input> */}
            {isDropdownOpen && (
              <div style={{
                borderRadius: "6px", maxHeight: '200px', overflowY: 'auto', paddingLeft: "10px",
                background: "white", position: "absolute", top: "3.5rem", width: "100%", boxShadow: "5px 5px 5px 5px rgba(64, 60, 67, .16)"
              }}>
                <List
                  dataSource={filteredInterviews}
                  renderItem={item => (
                    <List.Item onClick={() => { handleItemClick(item); fetchDataId(searchValue); }}>
                      CIS-{item.interviewCode}</List.Item>
                  )}
                />
              </div>
            )}
            {/* <FaSearch onClick={() => fetchDataId(searchValue)}></FaSearch> */}
            <div>
              <Row>
                {/* {selectedInterviews.map(interview => (
                <div key={interview.interviewCode}>
              
                  <button onClick={() => handleItemRemove(interview)}>Remove</button>
                </div>
              ))} */}
                {/* <FaSearch onClick={() => fetchDataId(searchValue)}
                  style={{ marginLeft: "1rem", marginTop: "4px", cursor: 'pointer', }}


                ></FaSearch> */}
              </Row>
            </div>



          </Col>
          {/* <IoMdClose style={{ borderRight: '1px solid grey', fontSize: "20px" }} />
            <FaSearch style={{ fontSize: "25px", paddingLeft: "10px" }}></FaSearch> */}
        </Row>



        {/* <Input
          iconPosition='right'
          id='user-name'
          placeholder="CIS-"
          onChange={(e) => handleSearch(e.target.value)}
          //value={searchValue ? searchValue : 'CIS'}
          value={searchValue}
        />
        {isDropdownOpen && (
          <div style={{ maxHeight: '200px', overflowY: 'auto',background:"red" }}>
            <List
              dataSource={filteredInterviews}
              renderItem={item => (
                <List.Item onClick={() => handleItemClick(item)}>CIS-{item.interviewCode}</List.Item>
              )}
            />
          </div>
        )}
        <div>
          <h3>Selected Interviews:</h3>
          {selectedInterviews.map(interview => (
            <div key={interview.interviewCode}>
              <span>CIS-{interview.interviewCode}</span>
              <button onClick={() => handleItemRemove(interview)}>Remove</button>
            </div>
          ))}
          <button onClick={() => fetchDataId(searchValue)}>Filters</button>

        </div> */}

        {/* <Row justify="end">
        <Col xs={24} md={6}>
          <Input.Search
            iconPosition='right'
            id='user-name'
            placeholder="CIS- "
            
            onSearch={handleSearch}
            onChange={(e) => handleSearch(e.target.value)} 
          />
      
          {isDropdownOpen && (
            <List
            style={{background:"red",
            position: "absolute",
            width:"100%",
            zindex: "1", 
            backgroundcolor: "white",
            border: "1px solid #ccc",
            maxheight: "200px",
            overflowy:"auto"
            
            }}
              dataSource={filteredInterviews}
              renderItem={item => (
                <List.Item onClick={() => handleItemClick(item)}>CIS-{item.interviewCode}</List.Item>
              )}
            />
          )}
        </Col>
      </Row> */}

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>

          <div>
            <Typography.Title level={4}>EMPLOYEE INFORMATION FORM</Typography.Title>
            <StyledSecondaryText>
              <p>{category}</p>
            </StyledSecondaryText>
          </div>
          {/* <div>
            {!isEdit && (
              <MdEdit
                size={25}
                style={{ cursor: 'pointer' }}
                onClick={() => setIsEdit(true)}
              />
            )}
          </div> */}
        </div>
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />

        <AppRowContainer>
          <Col xs={24} md={6}>
            <Typography.Title level={5}>Personal Employee <br></br> Information</Typography.Title>

          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>

                <Col xs={24} md={12}>
                  <Form.Item label='Full Name' name='name' >
                    {/* <Form.Item label='Full Name' name='fullName'> */}
                    <Input placeholder={findIdInterview?.fullName} readOnly={true} />
                  </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                  <Form.Item label='Arabic Full name' name='arName' rules={[{ required: true, message: 'Please enter full name' }]}>
                    <Input placeholder="الاسم كامل بالعربي" dir="rtl"
                      disabled={searchValue == ''}

                    />
                  </Form.Item>

                </Col>

                <Col xs={24} md={12}>
                  <Form.Item
                    label='ID Card Number'
                    name='CIN'
                    rules={[
                      {
                        required: true,
                        message: 'Please enter ID Card Number',
                      },
                      {
                        min: 8,
                        message: 'Phone number must be at least 8 digits',
                      },
                      {
                        pattern: /^[0-9]*$/,
                        message: 'Please enter a valid numeric ID Card Number',
                      },
                    ]}
                  >
                    <Input placeholder='ID Card Number' disabled={searchValue == ''} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Date ID Card Number' name='cinDate'
                    rules={[
                      {
                        required: true,
                        message: 'Please enter Date ID Card Number',
                      },

                    ]}


                  >
                    <StyledScrumBoardDatePicker disabled={searchValue == ''} />
                    {/* <Input placeholder='Date of issue' readOnly={!isEdit} /> */}
                  </Form.Item>
                </Col>






                <Col xs={24} md={12}>
                  <Form.Item label='Nationality' name='nationality' rules={[{ required: true, message: 'Please enter Nationality' }]}>
                    <Input placeholder='Nationality ' disabled={searchValue == ''} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Date of Birth' name='birthDate'>
                    <Input placeholder={findIdInterview?.birthayDate} readOnly={true} />
                    {/* <StyledScrumBoardDatePicker /> */}
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Gender' name='gender' rules={[{ required: true, message: 'Please enter gender' }]} disabled={searchValue == ''}>
                    <Select
                      defaultValue="Gender"
                      placeholder="Gender"
                      onChange={(value) => setSelectedGenderType(value)} >


                      {ListGender.map((p) => {
                        return (
                          <Option value={p.gender} key={p.gender}>
                            <div className='ant-row ant-row-middle'>

                              <span>{p.gender}</span>
                            </div>
                          </Option>
                        );
                      })}
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Telephone'
                    name='phoneNumber'
                    rules={[
                      {
                        required: true,
                        message: 'Please enter phone number',
                      },
                      {
                        pattern: /^[0-9]+$/,
                        message: 'Please enter a valid phone number',
                      },
                      {
                        min: 8,
                        message: 'Phone number must be at least 8 digits',
                      },
                    ]}
                  >
                    <Input
                      placeholder="Telephone"
                      disabled={searchValue == ''}
                    />
                  </Form.Item>
                </Col>


                <Col xs={24} md={12}>
                  <Form.Item label='Marital Status' name='familyStatus'>
                    <Input placeholder={findIdInterview?.familySituation} readOnly={true}
                      disabled={searchValue == ''}

                    />
                    {/* <Select
                      defaultValue="Marital Status"
                      placeholder="Marital Status"
                      onChange={(value) => setSelectedStatusType(value)}

                    >
                      {MaritalStatus.map((p) => {
                        return (
                          <Option value={p.Status} key={p.Status}>
                            <div className='ant-row ant-row-middle'>

                              <span>{p.Status}</span>
                            </div>
                          </Option>
                        );
                      })}
                    </Select> */}
                  </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                  <Form.Item label='Residence Address' name='residenceAdress' rules={[{ required: true, message: 'Please enter Residence Address' }]}>
                    <Input placeholder='Residence Address'
                      disabled={searchValue == ''}

                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Arabic Residence Address' name='arResidenceAdress' rules={[{ required: true, message: 'Please enter Residence Address Arabe' }]}>
                    <Input placeholder='عنوان السكني بالعربي' dir="rtl"
                      disabled={searchValue == ''}

                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Passport Number' name='passportnumber'
                    rules={[
                      {
                        required: true,
                        message: 'Please enter Passport Number',
                      },

                    ]}




                  >
                    <Input placeholder='Passport Number'
                      disabled={searchValue == ''}

                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Date of issue' name='passportSubmitdate'
                    rules={[
                      {
                        required: true,
                        message: 'Please enter Date of issue',
                      },

                    ]}



                  >
                    <StyledScrumBoardDatePicker disabled={searchValue == ''} />
                    {/* <Input placeholder='Date of issue' readOnly={!isEdit} /> */}
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Date of expiry' name='passport_finish_date'
                    rules={[
                      {
                        required: true,
                        message: 'Please enter Date of expiry',
                      },

                    ]}



                  >
                    <StyledScrumBoardDatePicker disabled={searchValue == ''} />
                    {/* <Input placeholder='Date of expiry' readOnly={!isEdit} /> */}
                  </Form.Item>
                </Col>
              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        <AppRowContainer>
          <Col xs={24} md={6}>
            <Typography.Title level={5}>Job Information</Typography.Title>

          </Col>

          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={12}>
                  <Form.Item label='Position To be filled' name='position'>
                    <Input placeholder={findIdInterview?.positionToBeFilled}
                      readOnly={true} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Arabic Position To be filled' name='arPosition' >
                    <Input placeholder={positionfieledarabe} dir="rtl"
                      readOnly={true}


                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Departement' name='departement'>
                    <Input placeholder={findIdInterview?.department}
                      readOnly={true}

                    />
                  </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                  <Form.Item label='Employee Type' name='type_Emp'
                    rules={[
                      {
                        required: true,
                        message: 'Please enter Employee Type',
                      },


                    ]}

                  >
                    <Select
                      defaultValue="Type Employees "
                      placeholder="Type Employee"
                      onChange={(value) => setSelectedEmpTypeType(value)} >

                      {EmpType.map((p) => {
                        return (
                          <Option value={p.type} key={p.type}>
                            <div className='ant-row ant-row-middle'>

                              <span>{p.type}</span>
                            </div>
                          </Option>
                        );
                      })}
                    </Select>

                  </Form.Item>
                </Col>


                {/* <Col xs={24} md={12}>
                  <Form.Item label='Employee Type' name='type_Emp'
                    rules={[
                      {
                        required: true,
                        message: 'Please Select Employee Type',
                      },
                      
                    ]}>
                    <Select
                      defaultValue="Employee Type"
                      placeholder="Employee Type"
                      onChange={(value) => setSelectedEmployeeType(value)}
                      disabled={searchValue == ''}

                      readOnly={!isEdit}>
                      {EmployeeType.map((p) => {
                        return (
                          <Option value={p.type} key={p.type}>
                            <div className='ant-row ant-row-middle'>

                              <span>{p.type}</span>
                            </div>
                          </Option>
                        );
                      })}
                    </Select>

                 
                  </Form.Item>
                </Col> */}
                {/* <Col xs={24} md={12}>
  <Form.Item label='Employee Type' name='type_Emp'
   
  >
    <Input 
      defaultValue={employeeType}
      readOnly
      placeholder='Site/Site&&Office /Offic'
    />
  </Form.Item>
</Col> */}



                {/* 
                <Col xs={24} md={12}>
                  <Form.Item label='Employee Type' name='type_Emp'
                    rules={[
                      {
                        required: true,
                        message: 'Please enter Employee Type',
                      },


                    ]}



                  >
                    <Input placeholder="Site/Site&&Office /Office"
                      disabled={searchValue == ''}


                    />
                  </Form.Item>
                </Col> */}

                <Col xs={24} md={12}>
                  <Form.Item label='Project Name' name='projName' >
                    {/* <Form.Item label='Full Name' name='fullName'> */}
                    <Input placeholder={findIdInterview?.projname} readOnly={true} />
                  </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                  <Form.Item label='E-mail Address' name='email'
                    rules={[
                      {
                        type: 'email',
                        message: 'Please enter a valid email address',
                      },
                      {
                        required: true,
                        message: 'Please enter your email address',
                      },
                    ]}



                  >
                    <Input placeholder='E-mail Address'
                      disabled={searchValue == ''}

                    />
                  </Form.Item>
                </Col>
                {/* <Col xs={24} md={12}>
                  <Form.Item label='Contract start date' name='joinDate'
                  >
                    <Input placeholder={findIdInterview?.expectedJoinDate}
                      readOnly={true} />
                  </Form.Item>
                </Col> */}
                {/* <Col xs={24} md={12}>
                  <Form.Item label='Contract End date' name='finishDate'
                    rules={[
                      {
                        required: true,
                        message: 'Please enter Contract End date',
                      },

                    ]}




                  >
                    <StyledScrumBoardDatePicker disabled={searchValue == ''} />
                  
                  </Form.Item>
                </Col> */}
                <Col xs={24} md={12}>
                  <Form.Item label='Company Type' name='companyType'
                    rules={[
                      {
                        required: true,
                        message: 'Please enter Type Company',
                      },

                    ]}


                  >
                    <Select
                      disabled={searchValue == ''}
                      defaultValue="Company Type"
                      placeholder="Company Type"
                      onChange={(value) => setSelectedStatusTypeCompany(value)}

                    >
                      {TypeCompany.map((p) => {
                        return (
                          <Option value={p.type} key={p.type}>
                            <div className='ant-row ant-row-middle'>
                              <span>{p.type}</span>
                            </div>
                          </Option>
                        );
                      })}
                    </Select>
                  </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                  <Form.Item label='Travel Date ' name='traveldate'
                    rules={[
                      {
                        required: true,
                        message: 'Please enter Date Travel',
                      },

                    ]}


                  >
                    <StyledScrumBoardDatePicker disabled={searchValue == ''} />
                    {/* <Input placeholder="Date Travel"
                      readOnly={true} /> */}
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Travel End Date' name='endTravelDate'
                    rules={[
                      {
                        required: true,
                        message: 'Please enter End Travel Date',
                      },

                    ]}




                  >
                    <StyledScrumBoardDatePicker disabled={searchValue == ''} />
                    {/* <Input placeholder="End Travel Date"
                      readOnly={true} /> */}
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Location' name='destination'

                    rules={[
                      {
                        required: true,
                        message: 'Please enter Location',
                      },

                    ]}


                  >
                    <Input placeholder="Location"
                      disabled={searchValue == ''}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Arabic Location' name='arDestination'
                    rules={[
                      {
                        required: true,
                        message: 'Please enter Location Arabe',
                      },

                    ]}


                  >
                    <Input placeholder=" موقع العمل"
                      disabled={searchValue == ''}
                    />
                  </Form.Item>
                </Col>

                {/* <Col xs={24} md={12}>
                  <Form.Item label='Approved Office Salary ' name='salary'>
                    <Input.Password placeholder={findIdInterview?.propsedsalary} readOnly={true}

                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Daily Rate' name='DailyRate'>
                    <Input placeholder={findIdInterview?.dailyRate} readOnly={true} />
                  </Form.Item>
                </Col> */}
                {/* <Col xs={24} md={12}>
                  <Form.Item label='Contrat Type' name='contractType'
                  
                 
                  
                  >
                    <Input 
                      defaultValue={contratType}
                      readOnly
                     placeholder='Contrat Type'
                  />
                  </Form.Item>
                </Col> */}

                {/* <Col xs={24} md={12}>
                  <Form.Item label='Contrat Type' name='contractType'
                    rules={[
                      {
                        required: true,
                        message: 'Please enter Contrat Type',
                      },

                    ]}


                  >
                    <Select
                      defaultValue="Contrat Type"
                      placeholder="type"
                      disabled={searchValue == ''}
                      onChange={(value) => setSelectedContratType(value)}

                    >
                      {TypeContrat.map((p) => {
                        return (
                          <Option value={p.type} key={p.type}>
                            <div className='ant-row ant-row-middle'>

                              <span>{p.type}</span>
                            </div>
                          </Option>
                        );
                      })}
                    </Select>
                  </Form.Item>
                </Col> */}
                <Col xs={24} md={12}>
                  <Form.Item label='Duration' name='duration'
                    rules={[
                      {
                        required: true,
                        message: 'Please enter Duration',
                      },

                    ]}




                  >
                    <Input placeholder='Duration' />
                  </Form.Item>
                </Col>
              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        <AppRowContainer>
          <Col xs={24} md={6}>
            <Typography.Title level={5}>EMERGENCY Contact <br></br>Information </Typography.Title>

          </Col>

          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={12}>
                  <Form.Item label='Emergency Full Name' name='emergencyName'
                    rules={[
                      {
                        required: true,
                        message: 'Please enter Full Name',
                      },

                    ]}


                  >
                    <Input placeholder='Full Name' disabled={searchValue == ''} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Relationship' name='emergencyRelation'
                    rules={[
                      {
                        required: true,
                        message: 'Please Select Relationship',
                      },

                    ]}>
                    <Select
                      defaultValue="Relationship"
                      placeholder="type"
                      onChange={(value) => setSelectedRelationType(value)}
                      disabled={searchValue == ''}

                    >
                      {RelationShip.map((p) => {
                        return (
                          <Option value={p.type} key={p.type}>
                            <div className='ant-row ant-row-middle'>

                              <span>{p.type}</span>
                            </div>
                          </Option>
                        );
                      })}
                    </Select>

                    {/* <Input placeholder='Relation Ship' readOnly={!isEdit} /> */}
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Emergency Telephone' name='phoneEmergency'

                    rules={[
                      {
                        required: true,
                        message: 'Please enter phone number',
                      },
                      {
                        pattern: /^[0-9]+$/,
                        message: 'Please enter a valid phone number',
                      },
                      {
                        min: 8,
                        message: 'Phone number must be at least 8 digits',
                      },
                    ]}

                  >
                    <Input placeholder='Telephone' disabled={searchValue == ''} />
                  </Form.Item>
                </Col>

              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        {/* <AppRowContainer>
          <Col xs={24} md={6}>
            <Typography.Title level={5}>Contract Categorie </Typography.Title>
            <StyledSecondaryText1> Download  Contrat <br></br> Type of Employees.</StyledSecondaryText1>
          </Col>

          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={12}>
                  <Form.Item label='Contract Category' name='contractCategory'
                    rules={[
                      {
                        required: true,
                        message: 'Please Select contract Category',
                      },

                    ]}

                  >
                    <Select
                      disabled={searchValue == ''}
      
                      placeholder="type"
                      onChange={(value) => setSelectedContractCategorie(value)}
                      style={{ minWidth: 150 }}
                    >
                      <Option value=""> Select Contract Type </Option>
                      {ListContrat.map((staff) => {
                        return (
                          <Option value={staff.type} key={staff.type}>
                            <div className='ant-row ant-row-middle'>

                              <span>{staff.type}</span>
                            </div>
                          </Option>
                        );
                      })}
                    </Select>
                  </Form.Item>
                </Col>
                {selectedContractCategorie === 'CAT-B2' && (
                  < Col xs={24} md={12}>
                    <Form.Item label='Target productivity' name='primeProductivity'
                      rules={[
                        {
                          required: true,
                          message: 'Please enter Target productivity',
                        },

                      ]}


                    >
                      <Input placeholder='Target productivity' />
                    </Form.Item>
                  </Col>

                )}




              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer> */}


        <Space
          size={15}
          style={{ display: 'flex', marginTop: 12, justifyContent: 'flex-end' }}
        >
          <Button onClick={cancelInfo} >Cancel</Button>
          {/* <Button onClick={SaveEmployees} type='primary' htmlType='submit'
             disabled={searchValue == ''}
                     
            >
              Save
            </Button> */}

          {/* Your form fields */}

          <Button
            onClick={handleOpenAfter} type='primary' htmlType='submit' disabled={searchValue === '' || !selectedInterviews}>
            Save
          </Button>

          {/* <Button onClick={handleOpenAfter } type='primary' htmlType='submit'
             disabled={searchValue === '' || !selectedInterviews}>Save</Button> */}

        </Space>

      </Form >
      <ValidateEmployees
        isViewInfo={isModalVisible}
        handleAddContactClose={handleValidateEmployeeClose}
        name={findIdInterview?.fullName}
        arName={formData?.arName}
        CIN={formData?.CIN}
        nationality={formData?.nationality}
        birthDate={findIdInterview?.birthayDate}
        gender={selectedGenderType}
        phoneNumber={formData?.phoneNumber}
        familyStatus={findIdInterview?.familySituation}
        residenceAdress={formData?.residenceAdress}
        arResidenceAdress={formData?.arResidenceAdress}
        passportnumber={formData?.passportnumber}
        passportSubmitdate={formData?.passportSubmitdate?.format('YYYY-MM-DD')}
        passport_finish_date={formData?.passport_finish_date?.format('YYYY-MM-DD')}
        position={findIdInterview?.positionToBeFilled}
        arPosition={positionfieledarabe}
        departement={findIdInterview?.department}
        //type_Emp={formData?.type_Emp}
        type_Emp={selectedEmpTypeType}
        projname={findIdInterview?.projname}
        email={formData?.email}
        joinDate={findIdInterview?.expectedJoinDate}
        finishDate={formData?.finishDate?.format('YYYY-MM-DD')}
        companyType={formData?.companyType}
        traveldate={formData?.traveldate?.format('YYYY-MM-DD')}
        endTravelDate={formData?.endTravelDate?.format('YYYY-MM-DD')}
        destination={formData?.destination}
        arDestination={formData?.arDestination}
        salary={findIdInterview?.propsedsalary}
        dailyRate={findIdInterview?.dailyRate}
        //contractType={formData.contractType}
        contractType={contratType}
        emergencyName={formData?.emergencyName}
        emergencyRelation={formData.emergencyRelation}
        phoneEmergency={formData?.phoneEmergency}
        contractCategory={formData?.contractCategory}
        projName={findIdInterview?.projname}
        duration={formData?.duration}
        primeProductivity={formData?.primeProductivity}
        category={category}


      />






      {/* <button onClick={ContratB1}>Contrat B1</button> */}
      {/*alert*/}
      {
        showAlert && (
          <Alert
            message="Success"
            description="Employee data saved successfully"
            type="success"
            showIcon
            closable
            onClose={() => setShowAlert(false)}
            style={{ marginBottom: 16, marginTop: 20, height: 100 }}
          />
        )
      }
      {
        showAlertError && (
          <Alert
            message="Failed"
            description="Employee data saved Failed"
            type="error"
            showIcon
            closable
            onClose={() => setShowAlertError(false)}
            style={{ marginBottom: 16, marginTop: 20, height: 100 }}
          />
        )
      }

      {/*//Modal de confirmation de save */}



    </>
  );
};

export default AddEmployeeTemporelleConstructionStaff;

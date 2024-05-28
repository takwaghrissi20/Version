import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { useIntl } from 'react-intl';
import IntlMessages from '@crema/helpers/IntlMessages';
import { Form, Input, Select, Row, Col,Alert} from 'antd';

import {
  StyledContactForm,
  StyledContactFormBtn,
  StyledContactFormContent,
  StyledContactFormContentField,
  StyledContactFormContentItem,
  StyledContactFormFooter,
  StyledContactFormHeader,
  StyledContactFormHeaderTitle,
  StyledContactFormItemTitle,
  StyledContactModalScrollbar,
  StyledContactGenerationFormBtn,
  StyledValidateContactFormBtn

} from './index.styled';
import FloatLabel from "./FloatLabel";
import { useNavigate } from "react-router-dom";



const ContratCategory = (props) => {
  const {

    setUserImage,
    handleAddContactClose,
    isCategoryEmployee,
    getsId,
    category,
    contractType,
    contractCategory,
    primeProductivity,
    arName,
    passportnumber,
    passportSubmitdate,
    arDestination,
    companyType,
    traveldate,
    endTravelDate,
    arResidenceAdress,
    arPosition,
    salary,
    dailyRate,
    duration,
    finishDate,
    joinDate,
    cin,
    cinDate,
    id,
    name



  } = props;

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/jpeg': [],
      'image/png': [],
      '.pdf': [],
    },
    onDrop: (acceptedFiles) => {
      setUserImage(URL.createObjectURL(acceptedFiles[0]));
    },
  });

  const { messages } = useIntl();
  const [selectedContratType, setSelectedContratType] = useState(contractType);
  const [isReadOnly, setIsReadOnly] = useState(false);
  const [selectedContractCategorie, setSelectedContractCategorie] = useState(contractCategory);
  const [generateBtnEnabled, setGenerateBtnEnabled] = useState(false);
  const [grayBackground, setGrayBackground] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showAlertError, setShowAlertError] = useState(false);
  const[newprimeProductivity,setNewprimeProductivity]=useState(primeProductivity)
  const [data, setData] = useState("");
  useEffect(() => {
    if (showAlert) {
      setGenerateBtnEnabled(true);
    }
  }, [showAlert]);
  useEffect(() => {
    setGrayBackground(!generateBtnEnabled);
  }, [generateBtnEnabled]);
  const LastIdIncremente = id + 1


  const navigate = useNavigate();
  const ListContrat = [

    {
      type: "CAT-A1",

    },
    {
      type: "CAT-A2",

    },
    {
      type: "CAT-A3",

    },
    {
      type: "CAT-B1",

    },
    {
      type: "CAT-E1",

    },
    {
      type: "CAT-E2",

    },
    {
      type: "SERVICE1-E3",

    },
    {
      type: "SERVICE2-E3",

    },





  ]
  const ListContratConstruction = [
   
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
 
  useEffect(() => {
    if (selectedContractCategorie === "CAT-B1") {
      console.log(" contractCategory", selectedContractCategorie)
      setSelectedContratType('CDD');
      setIsReadOnly(true);
    } else if (selectedContractCategorie === "CAT-A1") {
      console.log("contractCategory A1")
      setSelectedContratType('CDD');
      setIsReadOnly(true);

    } else if (selectedContractCategorie === "CAT-A2") {
      console.log(" contractCategory A2")
      setSelectedContratType('CDI');
      setIsReadOnly(true);

    }
    else if (selectedContractCategorie === "CAT-A3") {
      console.log(" contractCategory  CAT- A3 ")
      setSelectedContratType('CDD');
      setIsReadOnly(true);

    }

    else if (selectedContractCategorie === "CAT-E1") {
      console.log(" contractCategory  CAT -E1")
      setSelectedContratType('CDD');
      setIsReadOnly(true);

    }
    else if (selectedContractCategorie === "CAT-E2") {
      console.log(" contractCategory  CAT -E2")
      setSelectedContratType('CDI');
      setIsReadOnly(true);


    }
    else if (selectedContractCategorie === "SERVICE1-E3") {
      console.log(" contractCategory  SERVICE 1-E3")
      setSelectedContratType('Patent');
      setIsReadOnly(true);



    }
    else if (selectedContractCategorie === "SERVICE2-E3") {
      console.log(" contractCategory  SERVICE2-E3")
      setSelectedContratType('Patent');
      setIsReadOnly(true);
    }
    else if (selectedContractCategorie === "CAT-B2") {
      console.log(" contractCategory  CAT-B2")
      setSelectedContratType('CDD');
      setIsReadOnly(true);

    }
    else if (selectedContractCategorie === "CAT-B3") {
      console.log(" contractCategory  CAT-B3")
      setSelectedContratType('CDD');
      setIsReadOnly(true);

    }
    else if (selectedContractCategorie === "CAT-C") {
      console.log(" contractCategory  CAT-C")
      setSelectedContratType('CDD');
      setIsReadOnly(true);

    }
    else if (selectedContractCategorie === "CAT-D") {
      console.log(" contractCategory  CAT-D")
      setSelectedContratType('CDD');
      setIsReadOnly(true);

    };


  }, [selectedContractCategorie, selectedContratType]);
  console.log("selectedContratType", selectedContratType)
  const handleCategoryChange = (value) => {
    console.log("valueee",value)
    setSelectedContractCategorie(value);
  };
  console.log("valueee2222",selectedContractCategorie)
  const ContratB1 = () => {

    navigate('/HRGetsCompany/ContartTypeB1', {
      state: {
        fullName: arName,
        passportNumber: passportnumber,
        passportSubmitdate: passportSubmitdate,
        arResidenceAdress: arResidenceAdress,
        companyType: companyType,
        traveldate: traveldate,
        endTravelDate:endTravelDate,
        arDestination: arDestination,
        arPosition:  arPosition,
        lastId: LastIdIncremente,
        salary: salary,
        dailyRate: dailyRate,

      }

    });
  };
  const ContratA1 = () => {

    navigate('/HRGetsCompany/StaffManagement/ContartTypeA1', {
      state: {
        fullName: arName,
        passportNumber: passportnumber,
        passportSubmitdate: passportSubmitdate,
        arResidenceAdress: arResidenceAdress,
        companyType: companyType,
        traveldate: traveldate,
        endTravelDate:endTravelDate,
        arDestination: arDestination,
        arPosition: arPosition,
        lastId: LastIdIncremente,
        salary: salary,
        joinDate: joinDate,
        finishDate: finishDate,
        dailyRate: dailyRate,
        duration: duration

      }


    });
  };
  const ContratA2 = () => {
    navigate('/HRGetsCompany/StaffManagement/ContartA2', {
      state: {
        fullName: arName,
        passportNumber: passportnumber,
        passportSubmitdate: passportSubmitdate,
        arResidenceAdress: arResidenceAdress,
        companyType:companyType,
        traveldate: traveldate,
        endTravelDate:endTravelDate,
        arDestination: arDestination,
        arPosition: arPosition,
        lastId: LastIdIncremente,
        dailyRate: dailyRate,
        duration: duration,
        joinDate: joinDate,
        salary: salary,


      }


    });
  };
  const ContratA3 = () => {
    navigate('/HRGetsCompany/StaffManagement/ContartA3', {
      state: {
        fullName: arName,
        passportNumber: passportnumber,
        passportSubmitdate: passportSubmitdate,
        arResidenceAdress: arResidenceAdress,
        companyType:companyType,
        traveldate: traveldate,
        endTravelDate:endTravelDate,
        arDestination: arDestination,
        arPosition: arPosition,
        lastId: LastIdIncremente,
        dailyRate: dailyRate,
        duration: duration,
        joinDate: joinDate,
        salary: salary,



      }


    });
  };
  const ContratE1 = () => {
    navigate('/HRGetsCompany/StaffManagement/ContartE1', {
      state: {
        fullName: arName,
        passportNumber: passportnumber,
        passportSubmitdate: passportSubmitdate,
        arResidenceAdress: arResidenceAdress,
        companyType:companyType,
        traveldate: traveldate,
        endTravelDate:endTravelDate,
        arDestination: arDestination,
        arPosition: arPosition,
        lastId: LastIdIncremente,
        dailyRate: dailyRate,
        duration: duration,
        arPosition: arPosition,
        joinDate: joinDate,
        finishDate: finishDate,




      }


    });
  };
  const ContratE2 = () => {
    navigate('/HRGetsCompany/StaffManagement/ContartE2', {
      state: {
        fullName: arName,
        passportNumber: passportnumber,
        passportSubmitdate: passportSubmitdate,
        arResidenceAdress: arResidenceAdress,
        companyType:companyType,
        traveldate:traveldate,
        endTravelDate:endTravelDate,
        arDestination: arDestination,
        arPosition: arPosition,
        lastId: LastIdIncremente ,
        dailyRate : dailyRate,
        duration: duration,
        joinDate: joinDate

      }


    });
  };
  const ContratS2E3 = () => {
    navigate('/HRGetsCompany/StaffManagement/SERVICE2-E3', {
      state: {
        fullName: arName,
        passportNumber: passportnumber,
        passportSubmitdate: passportSubmitdate,
        arResidenceAdress: arResidenceAdress,
        companyType:companyType,
        traveldate:traveldate,
        endTravelDate:endTravelDate,
        arDestination: arDestination,
        arPosition: arPosition,
        lastId: LastIdIncremente,
        dailyRate: dailyRate,
        duration: duration,
        CIN: cin,
        cinDate: cinDate,
        duration: duration,
        salary: salary,
        joinDate: joinDate,
        finishDate: finishDate

      }


    });
  };
  const ContratB2 = () => {
    navigate('/HRGetsCompany/ContartTypeB2', {
      state: {
        fullName: arName,
        passportNumber: passportnumber,
        passportSubmitdate: passportSubmitdate,
        arResidenceAdress: arResidenceAdress,
        companyType:companyType,
        traveldate:traveldate,
        endTravelDate:endTravelDate,
        arDestination: arDestination,
        arPosition: arPosition,
        lastId: LastIdIncremente,
        salary: salary,
        primeProductivity:primeProductivity

      }


    });
  };
  // const ContratB3 = () => {
  //   navigate('/HRGetsCompany/ContartTypeB3', {
  //     state: {
  //       fullName: arName,
  //       passportNumber: passportnumber,
  //       passportSubmitdate: passportSubmitdate,
  //       arResidenceAdress: arResidenceAdress,
  //       companyType: companyTypepdf,
  //       traveldate: traveldatepdf,
  //       endTravelDate: endtraveldatepdf,
  //       arDestination: arDestination,
  //       arPosition: arPositionpdf,
  //       lastId: LastIdIncremente,
  //       salary: salary,
  //       primeProductivity:primeProductivity

  //     }


  //   });
  // };
  // const ContratC = () => {
  //   navigate('/HRGetsCompany/ContartTypeC', {
  //     state: {
  //       fullName: arName,
  //       passportNumber: passportnumber,
  //       passportSubmitdate: passpordDate,
  //       arResidenceAdress: arResidenceAdress,
  //       companyType: companyTypepdf,
  //       traveldate: traveldatepdf,
  //       endTravelDate: endtraveldatepdf,
  //       arDestination: arDestination,
  //       arPosition: arPositionpdf,
  //       lastId: LastIdIncremente,
  //       salary: salary,
  //       primeProductivity:primeProductivity,
  //       dailyRate:dailyRate

  //     }


  //   });
  // };
  // const ContratD = () => {
  //   navigate('/HRGetsCompany/ContartTypeD', {
  //     state: {
  //       fullName: arName,
  //       passportNumber: passportnumber,
  //       passportSubmitdate: passpordDate,
  //       arResidenceAdress: arResidenceAdress,
  //       companyType: companyTypepdf,
  //       traveldate: traveldatepdf,
  //       endTravelDate: endtraveldatepdf,
  //       arDestination: arDestination,
  //       arPosition: arPositionpdf,
  //       lastId: LastIdIncremente,
  //       salary: salary,
  //       primeProductivity:primeProductivity

  //     }


  //   });
  // };

  const SelectionnnerContrat = () => {

    console.log("contractCategorysssssss", selectedContractCategorie)
    if (selectedContractCategorie === "CAT-B1") {
      console.log(" contractCategory", selectedContractCategorie)
      ContratB1();
    } else if (selectedContractCategorie === "CAT-A1") {
      console.log(" contractCategory A1")
      //ContratA1()
      ContratA1()
    } else if (selectedContractCategorie === "CAT-A2") {
      console.log(" contractCategory A2")
      ContratA2()

    }
    else if (selectedContractCategorie === "CAT-A3") {
      console.log(" contractCategory  CAT- A3 ")
      ContratA3()

    }

    else if (selectedContractCategorie === "CAT-E1") {
      console.log(" contractCategory  CAT -E1")
      ContratE1()

    }
    else if (selectedContractCategorie=== "CAT-E2") {
      console.log(" contractCategory  CAT -E2")
      ContratE2()

    }
    else if (selectedContractCategorie=== "SERVICE1-E3") {
      console.log(" contractCategory  SERVICE 1-E3")
      ContratE3()

    }
    else if (selectedContractCategorie === "SERVICE2-E3") {
      console.log(" contractCategory  SERVICE2-E3")
      ContratS2E3()

    }
    else if (contractCategory === "CAT-B2") {
      console.log(" contractCategory")
      ContratB2()
    }
    else if (contractCategory === "CAT-B2") {
      console.log(" contractCategory")
      ContratB2()
    }
    else if (contractCategory === "CAT-B3") {
      console.log(" contractCategory")
      ContratB2()
    }
    else if (contractCategory === "CAT-C") {
      console.log(" contractCategory")
      Contrat2()
    }
    else if (contractCategory === "CAT-D") {
      console.log(" contractCategory")
      Contrat2()
    }


  };
  ///UpdateEmployees
  const UpdateEmployees = async () => {
    
    try {
   
      const endPoint =
        process.env.NODE_ENV === "development"
          ? "https://dev-gateway.gets-company.com"
          : "";

      const requestBody = {
        contractType:selectedContratType,
        contractCategory:selectedContractCategorie,
        primeProductivity:newprimeProductivity

     
      };

      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/empT/update?id=${getsId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      // Gérer la réponse du serveur
      if (!response.ok) {
    
       setShowAlertError(true)
        throw new Error('La requête a échoué avec le code ' + response.status);

      }

      // const contentType = response.headers.get('content-type');
      // if (!contentType || !contentType.includes('application/json')) {
      //   throw new TypeError("La réponse n'est pas au format JSON");
      // }
      const data = await response.text();
      setData(data)
     setShowAlert(true)
      // handleAddContactClose()
      // Traiter la réponse de l'API si nécessaire
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
    }
  };

  return (
    <StyledContactForm>
      <StyledContactFormHeader>
        <Form.Item >
          <input {...getInputProps()} />
          <label htmlFor='icon-button-file'>
            < StyledContactFormHeaderTitle  >
              {/* <IntlMessages id='Recruitement.Request' /> */}
              <p className='TitleModal'>Generate Contract Categorie</p>

            </StyledContactFormHeaderTitle>
          </label>
        </Form.Item>

        <StyledContactFormHeaderTitle>

        </StyledContactFormHeaderTitle>

      </StyledContactFormHeader>

      <StyledContactModalScrollbar>
        <StyledContactFormContent>
          <StyledContactFormContentItem>
            <StyledContactFormItemTitle>
              <p className='SousTitle'>Contract Categorie For :<span style={{ fontWeight: "bold", fontFamily: "cursive" }}>{category}</span></p>
              {/* <IntlMessages id='Recruitement.RequestorandRequired Profile' /> */}
            </StyledContactFormItemTitle>
            <StyledContactFormContentField>

              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="name">
                      <span className='modallabel'> Name :</span>
                      <Input
                        className='Input'
                        placeholder="name"
                        value={name}
                        readOnly={true}
                      />
                    </FloatLabel>
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="Type Contract">
                      <span className='modallabel'> Type Contract :</span>
                      <Input
                        className='Input'
                        placeholder="Type Contract"
                        value={selectedContratType}
                        classNames="ViewInput"
                        readOnly={true}
                      />
                    </FloatLabel>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
              {category === "Management Staff" ?
                <Col xs={24} md={12}>
                  <Form.Item label='Contract Category' name='contractCategory'
                  >
                    <Select
                      placeholder="Select Contract Type"
                      onChange={handleCategoryChange}
                      style={{ minWidth: 150 }}
                    >
                      <Option value="">Select Contract Type</Option>
                      {ListContrat.map((staff) => (
                        <Option value={staff.type} key={staff.type}>
                          {staff.type}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>


                :  <Col span={12} >
                <Form.Item  name='contractCategory'
                >
                   <span className='modallabel'> Contract Category :</span>
                  <Select
                    placeholder="Select Contract Type"
                    onChange={handleCategoryChange}
                    style={{ minWidth: 150 }}
                  >
                    <Option value="">Select Contract Type</Option>
                    {ListContratConstruction.map((staff) => (
                      <Option value={staff.type} key={staff.type}>
                        {staff.type}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>}
              {selectedContractCategorie==="CAT-B2" ?
                <Col span={12}>
                <Form.Item className='form-field'>
                  <FloatLabel name="PrimeProductivity">
                    <span className='modallabel'> Prime Productivity :</span>
                    <Input
                      className='Input'
                      placeholder="Prime Productivity"
                      value={newprimeProductivity}
                      onChange={(e) => setNewprimeProductivity(e.target.value)}
                    />
                  </FloatLabel>
                </Form.Item>
              </Col>




                 :null }
              
              </Row>



            </StyledContactFormContentField>
          </StyledContactFormContentItem>


          <StyledContactFormFooter>
            <h2 style={{ textAlign: "center", fontWeight: "bold", paddingBottom: "25px", color: "#317AC1" }}>Are you sure to make this employee contract? </h2>
            <StyledContactFormBtn
              type='primary'
              ghost
              onClick={handleAddContactClose}
            >
              <IntlMessages id='common.cancel' />
            </StyledContactFormBtn>
            <StyledValidateContactFormBtn
            type='button'
            ghost
           onClick={UpdateEmployees}
          >
            <IntlMessages id='common.Validate' />
          </StyledValidateContactFormBtn>
            < StyledContactGenerationFormBtn
              type='button'
              ghost
             disabled={!generateBtnEnabled}
              onClick={SelectionnnerContrat}
            >
              Generate
            </ StyledContactGenerationFormBtn>

          </StyledContactFormFooter>



        </StyledContactFormContent>
        {showAlert && (
        <Alert
          message="Success"
          description="Employee Contract  saved successfully"
          type="success"
          showIcon
          closable
          onClose={() => setShowAlert(false)}
          // style={{ marginBottom: 16, marginTop: 20, height: 100 }}
        />
      )}
      {showAlertError && (
        <Alert
          message="Failed"
          description="Employee Contract data saved Failed"
          type="error"
          showIcon
          closable
          onClose={() => setShowAlertError(false)}
         
        />
      )}


      </StyledContactModalScrollbar>
      
    </StyledContactForm>
  );
};

export default ContratCategory;


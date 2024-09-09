import React, { useState, useEffect } from 'react';
import AppRowContainer from '../../../../../@crema/components/AppRowContainer';
import { Button, Col, Divider, Form, Input, Space, Typography, Select, Alert, Checkbox, DatePicker,notification } from 'antd';
import { MdEdit } from 'react-icons/md';
import {
  StyledShadowWrapper,
} from './index.styled';
import FloatLabel from "./FloatLabel";
import { useIntl } from 'react-intl';
const { Option } = Select;
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from '../../../../../@crema/components/AppConfirmationModal';
import AppPageMeta from '../../../../../@crema/components/AppPageMeta';
const AddCovid = () => {
  const navigate = useNavigate();
  const [lastIdVacin, setLastIdVacin] = useState(0);
  const [getsId, setGetsId] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [lastVacin, setLastVacin] = useState("");
  const [country, setCountry] = useState("");
  const [projects, setProjects] = useState([]);
  const [projectsCountry, setProjectsCountry] = useState([]);
  const [selectedProject, setSelectedProject] = useState("");
  const [selectedVaccin, setSelectedVaccin] = useState("");
  const [confirmationVaccin, setConfirmationVaccin] = useState(false);
  const [isCancel, onCancel] = useState(false);
  const [covidfirstdosedate, setCovidfirstdosedate] = useState("");
  const [covidfirstdosetype, setCovidfirstdosetype] = useState("");
  const [covidseconddosedate, setCovidseconddosedate] = useState("");
  const [covidseconddosetype, setCovidseconddosetype] = useState("");
  const [dateInput, setDateInput] = useState(new Date());            
  const formattedDate = dayjs(dateInput).format('YYYY-MM-DD');   
  const [form] = Form.useForm();
  const { messages } = useIntl();
  const token = localStorage.getItem("token");

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };

  const handleInputGetsIdChange = (event) => {
    setGetsId(event.target.value);
  };
  const handlecovidfirstdosetypeChange = (event) => {
    setCovidfirstdosetype(event.target.value);
  };
  const handlecovidseconddosetypeChange = (event) => {

    setCovidseconddosetype(event.target.value)
  };

 //Last Id of Recruitement 
 const LastIndexVaccin = async () => {
  try {
    const endPoint =
      process.env.NODE_ENV === "development"
        ? "https://dev-gateway.gets-company.com"
        : "";

    const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/vacin/last?token=${token}`, {
      method: 'GET',
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
    console.log("data vaccin",data)
    setLastVacin(data?.idv)


  } catch (error) {
    console.error('Erreur lors de la récupération Last Recruitement', error);
  }
};


  const findId = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/getById?id=${getsId}&token=${token}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      setName(responseData?.name);
      setPosition(responseData?.position);
      setCountry(responseData?.destination);

      const projectsData = responseData?.projects?.map(project => ({
        projName: project.projName,
        projId: project.projId
      }));

      const projectscountry = responseData?.projects?.flatMap(project => project.country);
      setProjectsCountry(projectscountry);
      setProjects(projectsData);


    } catch (error) {
      console.error("Erreur lors de la récupération du jobcode:", error);
    }
  };
  const Vaccin = [
    { type: 'COVID VACCINE' },




  ];
  const openNotification = () => {
    notification.open({
      message: 'Success',
      description: 'Success Add Vaccin',
      style: {
        backgroundColor: '#28a745',
        border: '1px solid #28a745',
        color: '#FFFFFF !important',
        borderRadius: '3px',
        boxShadow: '1px 3px 4px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        display: 'flex',
        height: "102px",
        width: "500px",
        borderLeft: '8px solid #1f8838',
        fontsize: '30px',
        lineheight: '150%',
        marginbottom: 0,
        margintop: 0,
        maxwidth: 'calc(100% - 15px)',
        position: 'relative',
      },
      placement: 'topRight',
      color: '#FFFFFF !important',
    });
  };
  const openNotificationWarning = () => {
    notification.open({
      message: 'Warning',
      description: 'All Fields Not Complete',
      style: {
        backgroundColor: '#eab000',
        border: '1px solid #eab000',
        color: '#FFFFFF !important',
        borderRadius: '3px',
        boxShadow: '1px 3px 4px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        display: 'flex',
        height: "102px",
        width: "500px",
        borderLeft: '8px solid #ce9c09',
        fontsize: '30px',
        lineheight: '150%',
        marginbottom: 0,
        margintop: 0,
        maxwidth: 'calc(100% - 15px)',
        position: 'relative',
      },
      placement: 'topRight',
      color: '#FFFFFF !important',
    });
  };
  const openNotificationError = () => {
    notification.open({
      message: 'Error',
      description: 'Error Add Vaccin Corona',
      style: {
        backgroundColor: 'red',
        border: '1px solid #dc3545',
        color: '#FFFFFF !important',
        borderRadius: '3px',
        boxShadow: '1px 3px 4px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        display: 'flex',
        height: "102px",
        width: "500px",
        borderLeft: '8px solid #bd1120',
        fontsize: '30px',
        lineheight: '150%',
        marginbottom: 0,
        margintop: 0,
        maxwidth: 'calc(100% - 15px)',
        position: 'relative',
      },
      placement: 'topRight',
      color: '#FFFFFF !important',
    });
  };
  const handleAddVacin = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/vacin/add?id=${getsId}&token=${token}`, {

        method: 'POST',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
        body: JSON.stringify({

          projName: selectedProject,
          typeVccin: selectedVaccin,
          corona1Date: covidfirstdosedate,
          typeCorona: covidfirstdosetype,
          corona2Date: covidseconddosedate,
          corona2Result: covidseconddosetype,
          inputDate:formattedDate

        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
        openNotificationError('bottomRight')
      }
      if (response.ok) {

        const responseData = await response.json();
        openNotification('bottomRight')
        setTimeout(() => {
          form.resetFields();
          window.location.reload();
        }, 1000);


      }

    } catch (error) {
      console.error("Erreur lors de la récupération du Covid Success:", error);
    }
  };

  useEffect(() => {
    LastIndexVaccin()
    if (getsId) {
      findId();

    }

  }, [getsId]);


  const handleProjectChange = (value, option) => {

    setSelectedProject(value);

  };
  const handleVaccinChange = (value, option) => {

    setSelectedVaccin(value);

  };



  const goBack = () => {
    navigate(-1)
  }
  const BeforeSaveVaccin = () => {
    form.validateFields(['type'])
      .then(values => {
        handleAddVacin()
     
      })
      .catch(errorInfo => {
        openNotificationWarning('bottomRight')


      });
  };

  const handleConfirmationAddVaccin = () => {
    setConfirmationVaccin(true)
  }
  const handleCancelVaccin = () => {
    onCancel(true);
  }
  const LastIndexVaccinIncrement = lastVacin + 1
  return (
    <>
      <AppPageMeta title='Add Heath' />
      <Form
        form={form}
        layout='vertical'
        style={{ backgroundColor: "white", marginBottom: "20px", padding: "10px", borderRadius: "20px" }}
        onSubmit={e => { e.preventDefault() }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
          }
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <Typography.Title level={4}>Covid Vaccine</Typography.Title>
          </div>
        </div>
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        <AppRowContainer>
          <Col xs={24} md={6}>
            <Typography.Title level={5}>Assigned Person Details</Typography.Title>
          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={12}>
                  <Form.Item label='Reference' name='interviewCode'>
                    <Input placeholder={"Vaccin-" + LastIndexVaccinIncrement } readOnly={true} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Date' name='Date :'
                  >
                    <Input

                      placeholder={formattedDate}
                      readOnly

                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Gets Id' name='Gets Id '>
                    <Input
                      className='Input'
                      placeholder="Gets Id"
                      value={getsId}
                      onChange={handleInputGetsIdChange} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Person Name' name='Person Name'>
                    <Input
                      className='Input'
                      placeholder={name}
                      readOnly />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Function' name='Function'>
                    <Input
                      readOnly={true}
                      className='Input'
                      placeholder={position} />
                  </Form.Item>
                </Col>



              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        <AppRowContainer>
          <Col xs={24} md={6}>
            <Typography.Title level={5}>Covid Details</Typography.Title>
          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>

                <Col xs={24} md={12}>
                  <Form.Item className='form-field'
                    name='projectName'

                  >
                    <FloatLabel >
                      <span className='modallabel'>Project Name:</span>
                      <Select
                        style={{ marginTop: "10px" }}
                        placeholder="Select Your Project Name"

                        onChange={handleProjectChange}
                        value={selectedProject}
                      >
                        {projects.map(project => (
                          <Option key={project.projId} value={project.projName}>
                            {project.projName}
                          </Option>
                        ))}
                      </Select>
                    </FloatLabel>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item className='form-field'
                    name='type'

                  >
                    <FloatLabel >
                      <span className='modallabel'>Type Vaccin:</span>
                      <Select
                        style={{ marginTop: "10px" }}
                        placeholder="Select Your Type Vaccin"

                        onChange={handleVaccinChange}
                        value={selectedVaccin}
                      >
                        {Vaccin.map(p => (
                          <Option key={p.type} value={p.type}>
                            {p.type}
                          </Option>
                        ))}
                      </Select>
                    </FloatLabel>
                  </Form.Item>
                </Col>

                {selectedVaccin === 'COVID VACCINE' && (
                  <>
                    <Col xs={24} md={12}>
                      <Form.Item label='Date Of Covid Vaccin First Dose Date ' name='Datefirst:'
                      >
                        <DatePicker
                          style={{ width: "100%", height: "30px" }}
                          placeholder="YYYY-MM-DD"
                          onChange={(value) => setCovidfirstdosedate(dayjs(value).format('YYYY-MM-DD'))}

                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item name='Result'>

                        <FloatLabel >
                          <Form.Item
                            label='Covid Vaccine First Dose Type :' name='covidFirst'>
                            <Input

                              placeholder="Covid Vaccine First Dose Type"
                              value={covidfirstdosetype}
                              onChange={handlecovidfirstdosetypeChange}

                            />
                          </Form.Item>
                        </FloatLabel>
                      </Form.Item>

                    </Col>

                    <Col xs={24} md={12}>
                      <Form.Item label='Date Of Covid Vaccin Second Dose ' name='DateSecond :' >
                        <DatePicker

                          style={{ width: "100%", height: "30px" }}
                          placeholder="YYYY-MM-DD"
                          onChange={(value) => setCovidseconddosedate(dayjs(value).format('YYYY-MM-DD'))}

                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item name='Result'>

                        <FloatLabel >
                          <Form.Item
                            label='Covid Vaccine Second Dose Type :' name='covidSecond'>
                            <Input

                              placeholder="Covid Vaccine Second Dose Type"
                              value={covidseconddosetype}
                              onChange={handlecovidseconddosetypeChange}

                            />
                          </Form.Item>
                        </FloatLabel>
                      </Form.Item>

                    </Col>


                  </>

                )}
              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>

        <Space
          size={15}
          style={{ display: 'flex', marginTop: 12, justifyContent: 'flex-end' }}
        >
          <Button onClick={handleCancelVaccin}>Cancel</Button>
          <Button
            onClick={BeforeSaveVaccin}
            // onClick={handleAddVacin }
            type='primary'
            disabled={!selectedProject}
            htmlType='submit'>
            Save
          </Button>
        </Space>
      </Form>
      {confirmationVaccin ? (
        <ConfirmationModal
          open={confirmationVaccin}
          paragraph={'Are you sure you Add Vaccin Covid For Employee'}
          onDeny={setConfirmationVaccin}
          onConfirm={handleAddVacin}
          modalTitle="Add Vaccin"
          handleConfirmationAddVaccin={handleConfirmationAddVaccin}
        />
      ) : null}
      {isCancel ? (
        <ConfirmationModal
          open={isCancel}
          paragraph={'Are you sure you canceled All data is lost?'}
          onDeny={onCancel}
          onConfirm={goBack}
          modalTitle="Cancel Vaccin"
          handleVaccin={handleCancelVaccin}
        />
      ) : null}

    </>
  );
};

export default AddCovid;

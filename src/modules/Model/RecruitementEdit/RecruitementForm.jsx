import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';


import { Form, Input, Select } from 'antd';
import moment from 'moment';
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
  StyledScrumBoardDatePicker,
} from './index.styled';
import FloatLabel from "./FloatLabel";


const RecruitementEditForm = (props) => {
  const {

    setUserImage,
    handleAddContactClose,
    JobCode,
    idemp,
    dep,
    requestName,
    position,
    DesiredDate,
    projectName,
    projRef,
    type,
    affectedTo,
    requestedDicipline,
    Level,
    exDep,
    Numbervacancies,
    certif,
    nbExperience
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

  const [newdesiredDate, setNewDesiredDate] = useState(DesiredDate);
  const [newdep, setNewdep] = useState(dep);
  const [newidemp, setNewidemp] = useState(idemp);
  const [newrequestName, setNewrequestName] = useState(requestName);
  const [newposition, setNewposition] = useState(position);
  const [newprojectName, setNewprojectName] = useState(projectName);
  const [newprojRef, setNewprojRef] = useState(projRef);
  const [newaffectedTo, setNewAffectedTo] = useState(affectedTo);
  const [newrequestedDicipline, setNewrequestedDicipline] = useState(requestedDicipline);
  const [newLevel, setNewLevel] = useState(Level);
  const [newnbExperience, setNewnbExperience] = useState(nbExperience);
  const [newNumbervacancies, setNewNumbervacancies] = useState(Numbervacancies);
  const [newcertif, setNewcertif] = useState(certif);
  const { messages } = useIntl();
  

  //const [newdesiredDate, setNewDesiredDate] = useState(DesiredDate);
  const [dataEdit, setDataEdit] = useState(props.name)


  const Update = async (newdesiredDate,newdep,newidemp,newrequestName,newposition,newprojectName,


    newprojRef,newaffectedTo,newLevel,newrequestedDicipline,newnbExperience,newNumbervacancies,newcertif

  ) => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/re/update`, {

        method: 'PUT',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
        body: JSON.stringify({
          jobCode: JobCode,
          desiredDate: newdesiredDate,
          dep: newdep,
          idemp:newidemp,
          position:newposition,
          requestName:newrequestName,
          requestedDicipline: newrequestedDicipline,
          // recruttrequestDate: "2024-02-01",
          approuvedRecrutRequestNumber: 1,
          projectName:newprojectName,
          totalNumber: newNumbervacancies,
          // status: "re2",
          experience: newLevel,
          nbExperience: newnbExperience,
          type: null,
          affectedTo:newaffectedTo,
          certif:newcertif,
          bod: null,
          oDep: null,
          exDep: null,
          signatureHod: null,
          signatureBod: null,       
          projRef: newprojRef,

         
          ////
        
          // JobCode:JobCode,
          // idemp: idemp,
          // dep:dep,
          // requestName:requestName,
          // position:position,
          // desiredDate: newdesiredDate,
          // projectName:projectName,
          // projRef:projRef,
          // type:type,
          // affectedTo:affectedTo,
          // requestedDicipline:requestedDicipline,
          // experience:Level,
          // nbExperience:exDep,
          // totalNumber: Numbervacancies,      
          // certif:certif,

        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      if (response.ok) {

        const responseData = await response.json();

        setDataEdit(responseData)
    
         handleAddContactClose(true)
      }

      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur lors de la récupération du Id :", error);
    }
  };
  
  return (
    <StyledContactForm>
      <StyledContactFormHeader>
        <Form.Item >
          <input {...getInputProps()} />
          <label htmlFor='icon-button-file'>
            < StyledContactFormHeaderTitle  >
        
              <p className='TitleModal'>Recruitement.Request</p>

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
              {/* <IntlMessages id='Recruitement.RequestorandRequired Profile' /> */}
              <p className='SousTitle'>Recruitement.Edit .Requestor  Required Profile</p>
            </StyledContactFormItemTitle>

            <StyledContactFormContentField>
            <Form.Item className='form-field'>
                <FloatLabel name="Gets Id">
                  <span className='modallabel'> Gets Id :</span>
                  <Input
                    className='Input'
                    placeholder="Gets Id"
                    classNames="ViewInput"
                    value={newidemp}
                    onChange={(e) =>setNewidemp(e.target.value)}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel name="Departement">
                  <span className='modallabel'> Departement :</span>
                  <Input
                    className='Input'
                    placeholder="Departement"
                    value={newdep}
                    classNames="ViewInput"
                    onChange={(e) => setNewdep(e.target.value)}
                  />
                </FloatLabel>
              </Form.Item>

              <Form.Item className='form-field'>
                <FloatLabel name="Requestor Name">
                  <span className='modallabel'>Requestor Name :</span>
                  <Input
                    className='Input'
                    placeholder="Requestor Name"
                    value={newrequestName}
                    classNames="ViewInput"
                    onChange={(e) => setNewrequestName(e.target.value)}
                  />
                </FloatLabel>
              </Form.Item>
           
              <Form.Item className='form-field'>
                <FloatLabel name="Requested Discipline">
                  <span className='modallabel'>Position :</span>
                  <Input
                    className='Input'
                    placeholder="Position"
                    value={newposition}
                    classNames="ViewInput"
                    onChange={(e) => setNewposition(e.target.value)}
                  />
                </FloatLabel>
              </Form.Item>
              {/* <StyledScrumBoardDatePicker     
                  className='Input'
                    placeholder=" Desired Date"
                    classNames="ViewInput"
                    value={newdesiredDate}
               /> */}
               <span className='modallabel'> Desired Date :</span> 
             <Form.Item  name='Desired Date'>
              
      <StyledScrumBoardDatePicker
         value={newdesiredDate}
         onChange={() => setNewDesiredDate()} 
      />
    </Form.Item>
          
              {/* <Form.Item className='form-field'>
                <FloatLabel name=" Desired Date">
                  <span className='modallabel'> Desired Date :</span> */}
              
                  {/* <Input
                    className='Input'
                    placeholder=" Desired Date"
                    classNames="ViewInput"
                    value={newdesiredDate}
                    onChange={() => setNewDesiredDate()} 
                  /> */}
                {/* </FloatLabel>
              </Form.Item> */}

              <Form.Item className='form-field'>
                <FloatLabel name="Project Name">
                  <span className='modallabel'> Project Name :</span>
                  <Input
                    className='Input'
                    placeholder="Project Name"
                    value={newprojRef}
                    classNames="ViewInput"
                    onChange={(e) => setNewprojRef(e.target.value)}
                  />
                </FloatLabel>
              </Form.Item>

              <Form.Item className='form-field'>
                <FloatLabel name="Project Code/Office	 :">
                  <span className='modallabel'> Project Code/Office :</span>
                  <Input
                    className='Input'
                    placeholder="Project Code/Office:"
                    value={newprojectName}
                    classNames="ViewInput"
                    onChange={(e) => setNewprojectName(e.target.value)}
                  />
                </FloatLabel>
              </Form.Item>

            </StyledContactFormContentField>
          </StyledContactFormContentItem>



          <StyledContactFormContentItem>
            <StyledContactFormItemTitle>
              <p>{type}</p>
              {/* <IntlMessages id={type} /> */}
            </StyledContactFormItemTitle>

            <StyledContactFormContentField>
             
              <Form.Item className='form-field'>
                <FloatLabel name="Recruitment For">
                  <span className='modallabel'> Recruitment For :</span>
                  <Input
                    className='Input'
                    placeholder={messages['common.affectedTo']}
                    value={newaffectedTo}
                    classNames="ViewInput"
                    onChange={(e) => setNewAffectedTo(e.target.value)}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel name="Requested Discipline">
                  <span className='modallabel'> Requested Discipline :</span>
                  <Input
                    className='Input'
                    placeholder="Requested Discipline"
                    value={newrequestedDicipline}
                    classNames="ViewInput"
                    onChange={(e) => setNewrequestedDicipline(e.target.value)}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel name="Level">
                  <span className='modallabel'> Level :</span>
                  <Input
                    className='Input'
                    placeholder={messages['common.Level']}
                    value={newLevel}
                    classNames="ViewInput"
                    onChange={(e) => setNewLevel(e.target.value)}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel name="Level">
                  <span className='modallabel'> Desired years experiences: :</span>
                  <Input
                    className='Input'
                    placeholder={messages['common.Desiredyearsexperiences']}
                    value={newnbExperience}
                    classNames="ViewInput"
                    onChange={(e) =>setNewnbExperience(e.target.value)}  
                  />
                </FloatLabel>
              </Form.Item>
            
              <Form.Item className='form-field'>
                <FloatLabel name="# vacancies ">
                  <span className='modallabel'> # vacancies :</span>
                  <Input
                    className='Input'
                    placeholder={messages['common.Numbervacancies']}
                    classNames="ViewInput"
                    value={newNumbervacancies}
                    onChange={(e) =>setNewNumbervacancies(e.target.value)} 
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel name="certif">
                  <span className='modallabel'>certification: :</span>
                  <Input
                    className='Input'
                    placeholder={messages['common.certif']}
                    value={newcertif}
                    classNames="ViewInput"
                    onChange={(e) =>setNewcertif(e.target.value)}
                  />
                </FloatLabel>
              </Form.Item>
        

            </StyledContactFormContentField>
          </StyledContactFormContentItem>


        </StyledContactFormContent>

        <StyledContactFormFooter>
          <StyledContactFormBtn
            type='primary'
            ghost
            onClick={handleAddContactClose}
          >
            <p style={{ textAlign: "center", paddingTop: "9px" }}>Cancel Edit</p>
            {/* <IntlMessages id='common.cancel' /> */}
          </StyledContactFormBtn>
      
          <StyledContactFormBtn
            type='primary'
            ghost
            onClick={() => Update(newdesiredDate,newdep,newidemp,newrequestName,newposition,newprojectName,

              newprojRef,newaffectedTo,newLevel,newrequestedDicipline,newnbExperience,newNumbervacancies,newcertif)}>


            <p style={{ textAlign: "center", paddingTop: "9px" }}>Update</p>
            {/* <IntlMessages id='common.cancel' /> */}
          </StyledContactFormBtn>

        </StyledContactFormFooter>
      
      </StyledContactModalScrollbar>
    </StyledContactForm>
  );
};

export default RecruitementEditForm;


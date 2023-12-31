import plusIcon from './assets/icon-plus.svg'
import design2 from './assets/resume-design-2.svg'
import design4 from './assets/resume-design-4.svg'
import { useState } from 'react'
import { Navigation } from './components/Navigation'
import { Button } from './components/Button'
import { InputSet, InputForm, RadioImg, InputSelectSkill } from './components/Inputs'
import { Entries, List } from './components/Entries'
import { DropdownContainer } from './components/Dropdown'
import { Options } from './components/Options'
import {Traditional} from './components/Traditional'
import { Banner } from './components/Banner'
import { Warning } from './components/Warning'
import { Footer } from './components/Footer'



function determineFormProcess(form, formName) {
  let obj;
  const key = self.crypto.randomUUID();
  switch(formName) {
    case 'work':
      obj = {
        position: form.elements['position'].value,
        company: form.elements['company'].value,
        startDate: form.elements['start-date'].value,
        endDate: form.elements['end-date'].value,
        description: form.elements['job-description'].value,
        key: key,
        visibility: true,
        type: formName
      }
      break;
    case 'volunteer':
      obj = {
        position: form.elements['position'].value,
        organization: form.elements['organization'].value,
        startDate: form.elements['start-date'].value,
        endDate: form.elements['end-date'].value,
        description: form.elements['volunteer-description'].value,
        key: key,
        visibility: true,
        type: formName
      };
      break;
    case 'education':
      obj = {
        degree: form.elements['degree'].value,
        institution: form.elements['institution'].value,
        startDate: form.elements['start-date'].value,
        endDate: form.elements['end-date'].value,
        key: key,
        visibility: true,
        type: formName
      }
      break;
    case 'certification':
      obj = {
        certification: form.elements['certification'].value,
        institution: form.elements['institution'].value,
        startDate: form.elements['start-date'].value,
        endDate: form.elements['end-date'].value,
        key: key,
        visibility: true,
        type: formName
      }
      break;
    case 'skill-soft':
      obj = {
        skill: form.elements['skill'].value,
        key: key,
        visibility: true,
        type: formName
      }
      break;
    case 'skill-technical':
      obj = {
        skill: form.elements['skill'].value,
        key: key,
        visibility: true,
        type: formName
      }
      break;
    case 'award':
      obj = {
        award: form.elements['award'].value,
        organization: form.elements['organization'].value,
        date: form.elements['date'].value,
        key: key,
        visibility: true,
        type: formName
      }
      break;
    case 'reference':
      obj = {
        name: form.elements['name'].value,
        position: form.elements['position'].value,
        contact: form.elements['contact'].value,
        key: key,
        visibility: true,
        type: formName
      }
      break;
  }
  return obj;
}

function Main() {
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Smith');
  const [jobTitle, setJobTitle] = useState('UI/UX Designer');
  const [address, setAddress] = useState('1234 Main Street');
  const [state, setState] = useState('CA');
  const [city, setCity] = useState('Redondo Beach');
  const [zipCode, setZipCode] = useState('90277');
  const [email, setEmail] = useState('jsmith@gmail.com');
  const [phone, setPhone] = useState('310-123-4567');

  const [summary, setSummary] = useState('I am a UI/UX Designer who assists companies with improving their application interfaces. I take the time to understand both the client and end-user\'s needs in order to provide a solution that satisfies both parties.');

  const [workExperienceForm, setWorkExperienceForm] = useState(<></>);
  const [volunteerExperienceForm, setVolunteerExperienceForm] = useState(<></>);
  const [educationForm, setEducationForm] = useState(<></>);
  const [certificationForm, setCertificationForm] = useState(<></>);
  const [skillForm, setSkillForm] = useState(<></>);
  const [awardForm, setAwardForm] = useState(<></>);
  const [referenceForm, setReferenceForm] = useState(<></>);

  const [workArray, setWorkArray] = useState([{position: 'UI/UX Developer', company: 'Marketing', startDate: 'September 2016', endDate: 'January 2020', description: 'Developed interfaces for large-scale applications', key: self.crypto.randomUUID(), visibility: true, type: 'work'}, {position: 'Project Manager', company: 'Marketing', startDate: 'January 2020', endDate: 'present', description: 'Manage projects, project requirements, and dedalines; mentor developers and delegate tasks to team members', key: self.crypto.randomUUID(), visibility: true, type: 'work'}]);
  const [volunteerArray, setVolunteerArray] = useState([]);
  const [educationArray, setEducationArray] = useState([{degree: 'Computer Science, Bachelor of Science', institution: 'University of California, Irvine', startDate: '2012', endDate: '2016', key: self.crypto.randomUUID(), visibility: true, type: 'education'}]);
  const [certificationArray, setCertificationArray] = useState([]);
  const [skillSoftArray, setSkillSoftArray] = useState([{skill: 'Project Management', key: self.crypto.randomUUID(), visibility: true, type: 'skill-soft'}]);
  const [skillTechArray, setSkillTechArray] = useState([{skill: 'Figma', key: self.crypto.randomUUID(), visibility: true, type: 'skill-technical'}]);
  const [awardArray, setAwardArray] = useState([]);
  const [referenceArray, setReferenceArray] = useState([{name: 'Magnus Larsen', position: 'Manager', contact: 'mlarsen@marketing.com', visibility: true, key: self.crypto.randomUUID(), type: 'reference'}]);

  const [workEntries, setWorkEntries] = useState(<List list={workArray} formClass='work' callBack={updateEntry} warningCallBack={displayWarning} />);
  const [volunteerEntries, setVolunteerEntries] = useState(<></>);
  const [educationEntries, setEducationEntries] = useState(<List list={educationArray} formClass='education' callBack={updateEntry} warningCallBack={displayWarning} />);
  const [certificationEntries, setCertificationEntries] = useState(<></>);
  const [skillSoftEntries, setSkillSoftEntries] = useState(<List list={skillSoftArray} formClass='skill-soft' callBack={updateEntry} warningCallBack={displayWarning} />);
  const [skillTechEntries, setSkillTechEntries] = useState(<List list={skillTechArray} formClass='skill-technical' callBack={updateEntry} warningCallBack={displayWarning} />);
  const [awardEntries, setAwardEntries] = useState(<></>);
  const [referenceEntries, setReferenceEntries] = useState(<List list={referenceArray} formClass='reference' callBack={updateEntry} warningCallBack={displayWarning} />);

  const [skillType, setSkillType] = useState('default');

  const [design, setDesign] = useState('traditional');
  const [font, setFont] = useState('Inter Regular');
  const [layoutPrimaryColor, setLayoutPrimaryColor] = useState('#CCCCCC');
  const [bodyColor, setBodyColor] = useState('#000000');
  const [primaryColor, setPrimaryColor] = useState('#000000');
  const [secondaryColor, setSecondaryColor] = useState('#000000');
  const [tertiaryColor, setTertiaryColor] = useState('#000000');

  const [area, setArea] = useState('info');
  const [warning, setWarning] = useState(false);
  const [warningEntry, setWarningEntry] = useState('');
  const [deleteObj, setDeleteObj] = useState({});

  const [options, setOptions] = useState(
    <Options showInput={displayInput} showCustomize={displayCustomize}>
      <Button text='Clear Resume' classes='red' type='outline' handleClick={clearAllFields} />
    </Options>);

  function restoreDefaults() {
    setDesign('traditional');
    setFont('Inter Regular');
    setBodyColor('#000000');
    setPrimaryColor('#000000');
    setSecondaryColor('#000000');
    setTertiaryColor('#000000');
    setLayoutPrimaryColor('#CCCCCC');
  }

  function displayInput() {
    setArea('info');
    setOptions(
      <Options showInput={displayInput} showCustomize={displayCustomize}>
        <Button text='Clear Resume' classes='red' type='outline' handleClick={clearAllFields} />
      </Options>
    );
  }

  function displayCustomize() {
    setArea('customize');
    setOptions(
      <Options showInput={displayInput} showCustomize={displayCustomize}>
        <Button text='Restore Default Styles' classes='red' type='outline' handleClick={restoreDefaults} />
      </Options>
    );
  }

  function displayWarning(entry, obj, state) {
    if (state) {
      setWarning(true);
      setWarningEntry(entry);
      setDeleteObj(obj);
    } else {
      setWarning(false);
    }
  }

  function clearAllFields() {
    setFirstName('');
    setLastName('');
    setJobTitle('');
    setAddress('');
    setState('default');
    setCity('');
    setZipCode('');
    setEmail('');
    setPhone('');
    setSummary('');

    setWorkEntries(<></>);
    setWorkArray([]);
    setWorkExperienceForm(<></>);

    setVolunteerEntries(<></>);
    setVolunteerArray([]);
    setVolunteerExperienceForm(<></>);

    setEducationEntries(<></>);
    setEducationArray([]);
    setEducationForm(<></>);

    setCertificationEntries(<></>);
    setCertificationArray([]);
    setCertificationForm(<></>);

    setSkillSoftEntries(<></>);
    setSkillTechEntries(<></>);
    setSkillSoftArray([]);
    setSkillTechArray([]);

    setAwardEntries(<></>);
    setAwardArray([]);
    setAwardForm(<></>);

    setReferenceEntries(<></>);
    setReferenceArray([]);
    setReferenceForm(<></>);
  }

  function replaceObj(array, newObj) {
    for (let i = 0; i < array.length; i += 1) {
      if (array[i].key === newObj.key) {
        array[i] = newObj;
        break;
      }
    }

    return array;
  }

  function updateEntry(newObj, arrayType) {
    let temp;
    let updatedArray;
    switch(arrayType) {
      case 'work':
        temp = workArray;
        updatedArray = replaceObj(temp, newObj);
        setWorkArray(updatedArray);
        setWorkEntries(<List list={updatedArray} formClass={'work'} callBack={updateEntry} warningCallBack={displayWarning} />);
        break;
      case 'volunteer':
        temp = volunteerArray;
        updatedArray = replaceObj(temp, newObj);
        setVolunteerArray(updatedArray);
        setVolunteerEntries(<List list={updatedArray} formClass={'volunteer'} callBack={updateEntry} warningCallBack={displayWarning} />);
        break;
      case 'education':
        temp = educationArray;
        updatedArray = replaceObj(temp, newObj);
        setEducationArray(updatedArray);
        setEducationEntries(<List list={updatedArray} formClass={'education'} callBack={updateEntry} warningCallBack={displayWarning} />);
        break;
      case 'certification':
        temp = certificationArray;
        updatedArray = replaceObj(temp, newObj);
        setCertificationArray(updatedArray);
        setCertificationEntries(<List list={updatedArray} formClass={'certification'} callBack={updateEntry} warningCallBack={displayWarning} />);
        break;
      case 'skill-soft':
        temp = skillSoftArray;
        updatedArray = replaceObj(temp, newObj);
        setSkillSoftArray(updatedArray);
        setSkillSoftEntries(<List list={updatedArray} formClass={'skill-soft'} callBack={updateEntry} warningCallBack={displayWarning} />);
        break;
      case 'skill-technical':
        temp = skillTechArray;
        updatedArray = replaceObj(temp, newObj);
        setSkillTechArray(updatedArray);
        setSkillTechEntries(<List list={updatedArray} formClass={'skill-technical'} callBack={updateEntry} warningCallBack={displayWarning} />);
        break;
      case 'award':
        temp = awardArray;
        updatedArray = replaceObj(temp, newObj);
        setAwardArray(updatedArray);
        setAwardEntries(<List list={updatedArray} formClass={'award'} callBack={updateEntry} warningCallBack={displayWarning} />);
        break;
      case 'reference':
        temp = referenceArray;
        updatedArray = replaceObj(temp, newObj);
        setReferenceArray(updatedArray);
        setReferenceEntries(<List list={updatedArray} formClass={'reference'} callBack={updateEntry} warningCallBack={displayWarning} />);
        break;
    }
  }

  function deleteEntry(obj, type) {
    let tmp;

    switch(type) {
      case 'work':
        tmp = workArray;
        tmp = tmp.filter(entry => entry.key !== obj.key);
        setWorkArray(tmp);
        setWorkEntries(<List list={tmp} formClass={'work'} callBack={updateEntry} warningCallBack={displayWarning} />);
        break;
      case 'volunteer':
        tmp = volunteerArray;
        tmp = tmp.filter(entry => entry.key !== obj.key);
        setVolunteerArray(tmp);
        setVolunteerEntries(<List list={tmp} formClass={'volunteer'} callBack={updateEntry} warningCallBack={displayWarning} />);
        break;
      case 'education':
        tmp = educationArray;
        tmp = tmp.filter(entry => entry.key !== obj.key);
        setEducationArray(tmp);
        setEducationEntries(<List list={tmp} formClass={'education'} callBack={updateEntry} warningCallBack={displayWarning} />);
        break;
      case 'certification':
        tmp = certificationArray;
        tmp = tmp.filter(entry => entry.key !== obj.key);
        setCertificationArray(tmp);
        setCertificationEntries(<List list={tmp} formClass={'certification'} callBack={updateEntry} warningCallBack={displayWarning} />);
        break;
      case 'skill-soft':
        tmp = skillSoftArray;
        tmp = tmp.filter(entry => entry.key !== obj.key);
        setSkillSoftArray(tmp);
        setSkillSoftEntries(<List list={tmp} formClass={'skill-soft'} callBack={updateEntry} warningCallBack={displayWarning} />);
        break;
      case 'skill-technical':
        tmp = skillTechArray;
        tmp = tmp.filter(entry => entry.key !== obj.key);
        setSkillTechArray(tmp);
        setSkillTechEntries(<List list={tmp} formClass={'skill-technical'} callBack={updateEntry} warningCallBack={displayWarning} />);
        break;
      case 'award':
        tmp = awardArray;
        tmp = tmp.filter(entry => entry.key !== obj.key);
        setAwardArray(tmp);
        setAwardEntries(<List list={tmp} formClass={'award'} callBack={updateEntry} warningCallBack={displayWarning} />);
        break;
      case 'reference':
        tmp = referenceArray;
        tmp = tmp.filter(entry => entry.key !== obj.key);
        setReferenceArray(tmp);
        setReferenceEntries(<List list={tmp} formClass={'reference'} callBack={updateEntry} warningCallBack={displayWarning} />);
        break;

    }
  }

  function addEntry(event, formClass) {
    event.preventDefault();
    let form;
    if (formClass === 'skill-soft' || formClass === 'skill-technical') {
      form = document.getElementsByClassName('skill')[0];
    } else {
      form = document.getElementsByClassName(formClass)[0];
    }
    const obj = determineFormProcess(form, formClass);
    let temp;

    switch(formClass) {
      case 'work':
        temp = workArray;
        temp.push(obj);
        setWorkArray(temp);
        setWorkEntries(<List list={workArray} formClass={formClass} callBack={updateEntry} warningCallBack={displayWarning} />);
        setWorkExperienceForm(<></>);
        break;
      case 'volunteer':
        temp = volunteerArray;
        temp.push(obj);
        setVolunteerArray(temp);
        setVolunteerEntries(<List list={volunteerArray} formClass={formClass} callBack={updateEntry} warningCallBack={displayWarning} />);
        setVolunteerExperienceForm(<></>);
        break;
      case 'education':
        temp = educationArray;
        temp.push(obj);
        setEducationArray(temp);
        setEducationEntries(<List list={educationArray} formClass={formClass} callBack={updateEntry} warningCallBack={displayWarning} />);
        setEducationForm(<></>);
        break;
      case 'certification':
        temp = certificationArray;
        temp.push(obj);
        setCertificationArray(temp);
        setCertificationEntries(<List list={certificationArray} formClass={formClass} callBack={updateEntry} warningCallBack={displayWarning} />);
        setCertificationForm(<></>);
        break;
      case 'skill-soft':
        temp = skillSoftArray;
        temp.push(obj);
        setSkillSoftArray(temp);
        setSkillSoftEntries(<List list={skillSoftArray} formClass={formClass} callBack={updateEntry} warningCallBack={displayWarning} />);
        setSkillType('default');
        setSkillForm(<></>);
        break;
      case 'skill-technical':
        temp = skillTechArray;
        temp.push(obj);
        setSkillTechArray(temp);
        setSkillTechEntries(<List list={skillTechArray} formClass={formClass} callBack={updateEntry} warningCallBack={displayWarning} />);
        setSkillType('default');
        setSkillForm(<></>);
        break;
      case 'award':
        temp = awardArray;
        temp.push(obj);
        setAwardArray(temp);
        setAwardEntries(<List list={awardArray} formClass={formClass} callBack={updateEntry} warningCallBack={displayWarning} />);
        setAwardForm(<></>);
        break;
      case 'reference':
        temp = referenceArray;
        temp.push(obj);
        setReferenceArray(temp);
        setReferenceEntries(<List list={referenceArray} formClass={formClass} callBack={updateEntry} warningCallBack={displayWarning} />);
        setReferenceForm(<></>);
        break;
    }
  }

  function addWorkExperience() {
    const formClass = 'work';

    setWorkExperienceForm(
      <InputForm classes={formClass}>
        <InputSet label='Position' type='text' id='position' name='position' value='' option='input-im' />
        <InputSet label='Company Name' type='text' id='company' name='company' value='' option='input-im' />
        <div className='display-flex gap-16 flex-wrap'>
          <InputSet label='Start Date' type='text' id='start-date' name='start-date' value='' option='input-im' />
          <InputSet label='End Date' type='text' id='end-date' name='end-date' value='' option='input-im' />
        </div>
        <InputSet label='Job Description' id='job-description' name='job-description' value='' option='textarea-no-cb' />
        <div className='display-flex gap-16 flex-wrap'>
          <Button text='Add' classes='power flex-1' handleClick={() => addEntry(event, formClass)}/>
          <Button text='Cancel' classes='outline black flex-1' handleClick={() => setWorkExperienceForm(<></>)}/>
        </div>
      </InputForm>
    )
  }

  function addVolunteerExperience() {
    const formClass = 'volunteer';

    setVolunteerExperienceForm(
      <InputForm classes={formClass}>
        <div className='display-flex gap-16 flex-wrap'>
          <InputSet label='Position' type='text' id='position' name='position' value='' option='input-im' />
          <InputSet label='Organization' type='text' id='organization' name='organization' value='' option='input-im' />
        </div>
        <div className='display-flex gap-16 flex-wrap'>
          <InputSet label='Start Date' type='text' id='start-date' name='start-date' value='' option='input-im' />
          <InputSet label='End Date' type='text' id='end-date' name='end-date' value='' option='input-im' />
        </div>
        <InputSet label='Job Description' id='volunteer-description' name='volunteer-description' value='' option='textarea-no-cb' />
        <div className='display-flex gap-16 flex-wrap'>
          <Button text='Add' classes='power flex-1' handleClick={() => addEntry(event, formClass)} />
          <Button text='Cancel' classes='outline black flex-1' handleClick={() => setVolunteerExperienceForm(<></>)}/>
        </div>
      </InputForm>
    )
  }

  function addEducation() {
    const formClass = 'education';

    setEducationForm(
      <InputForm classes={formClass}>
          <div className='display-flex gap-16 flex-wrap'>
            <InputSet label='Degree' type='text' id='degree' name='degree' value='' option='input-im' />
            <InputSet label='Institution' type='text' id='institution' name='institution' value='' option='input-im' />
          </div>
          <div className='display-flex gap-16 flex-wrap'>
            <InputSet label='Start Date' type='text' id='start-date' name='start-date' value='' option='input-im' />
            <InputSet label='End Date' type='text' id='end-date' name='end-date' value='' option='input-im' />
          </div>
          <div className='display-flex gap-16 flex-wrap'>
            <Button text='Add' classes='power flex-1' handleClick={() => addEntry(event, formClass)} />
            <Button text='Cancel' classes='outline black flex-1' handleClick={() => setEducationForm(<></>)} />
          </div>
      </InputForm>
    )
  }

  function addCertification() {
    const formClass = 'certification';

    setCertificationForm(
      <InputForm classes={formClass}>
          <div className='display-flex gap-16 flex-wrap'>
            <InputSet label='Certification' type='text' id='certification' name='certification' value='' option='input-im' />
            <InputSet label='Institution' type='text' id='institution' name='institution' value='' option='input-im' />
          </div>
          <div className='display-flex gap-16 flex-wrap'>
            <InputSet label='Start Date' type='text' id='start-date' name='start-date' value='' option='input-im' />
            <InputSet label='End Date' type='text' id='end-date' name='end-date' value ='' option='input-im' />
          </div>
          <div className='display-flex gap-16 flex-wrap'>
            <Button text='Add' classes='power flex-1' handleClick={() => addEntry(event, formClass)} />
            <Button text='Cancel' classes='outline black flex-1' handleClick={() => setCertificationForm(<></>)}/>
          </div>
      </InputForm>
    )
  }

  function addSkill() {
    const formClass = 'skill';

    setSkillForm (
      <InputForm classes={formClass}>
        <InputSet label='Skill' type='text' id='skill' name='skill' value='' option='input-im' />
        <InputSelectSkill id='skill-type' name='skill-type' select={skillType} callback={setSkillType} />
        <div className='display-flex gap-16 flex-wrap'>
          <Button text='Add' classes='power flex-1' 
            handleClick={() => {
              const skillInputType = document.getElementById('skill-type');
              addEntry(event, `${formClass}-${skillInputType.value}`)}}
          />
          <Button text='Cancel' classes='outline black flex-1' handleClick={() => {setSkillForm(<></>); setSkillType('default')}}/>
        </div>
      </InputForm>
    )
  }

  function addAward() {
    const formClass = 'award';

    setAwardForm(
      <InputForm classes={formClass}>
          <InputSet label='Award' type='input' id='award' name='award' value='' option='input-im' />
          <div className='display-flex gap-16 flex-wrap'>
            <InputSet label='Organization' type='input' id='organization' name='organization' value='' option='input-im' />
            <InputSet label='Date Awarded' type='input' id='date' name='date' value='' option='input-im' />
          </div>
          <div className='display-flex gap-16 flex-wrap'>
            <Button text='Add' classes='power flex-1' handleClick={() => addEntry(event, formClass)} />
            <Button text='Cancel' classes='outline black flex-1' handleClick={() => setAwardForm(<></>)} />
          </div>
      </InputForm>
    )
  }

  function addReference() {
    const formClass = 'reference';

    setReferenceForm(
      <InputForm classes={formClass}>
          <div className='display-flex gap-16 flex-wrap'>
            <InputSet label='Name' type='text' id='name' name='name' value='' option='input-im' />
            <InputSet label='Position' type='text' id='position' name='position' value='' option='input-im' />
          </div>
          <div className='display-flex gap-16 flex-wrap'>
            <InputSet label='Contact Info (Phone or Email)' type='text' id='contact' name='contact' value=''option='input-im' />
          </div>
          <div className='display-flex gap-16 flex-wrap'>
            <Button text='Add' classes='power flex-1' handleClick={() => addEntry(event, formClass)} />
            <Button text='Cancel' classes='outline black flex-1' handleClick={() => setReferenceForm(<></>)} />
          </div>
      </InputForm>
    )
  }

  return (
    <main>
      <Warning entry={warningEntry} obj={deleteObj} visibility={warning} visibilityCallBack={setWarning} deleteCallBack={deleteEntry} />
      <div className='edit-area'>
        {options}
        <div className='input-area'>
          {area === 'info' &&
            <div className='display-flex flex-column gap-96'>
              <DropdownContainer containerName='Personal Details' containerType='no-entries'>
                <InputForm classes='personal-details padding-left-32'>
                  <div className='display-flex gap-16 flex-wrap'>
                    <InputSet label='First Name' type='text' id='fname' name='fname' value={firstName} option='input' callback={setFirstName} />
                    <InputSet label='Last Name' type='text' id='lname' name='lname' value={lastName} option='input' callback={setLastName} />
                  </div>
                  <InputSet label='Job Title' type='text' id='job-title' name='address' value={jobTitle} option='input' callback={setJobTitle} />
                  <InputSet label='Address' type='text' id='address' name='address' value={address} option='input' callback={setAddress} />
                  <div className='display-flex gap-16 flex-wrap'>
                    <InputSet label='State' id='state' name='state' option='select-state' select={state} callback={setState} />
                    <InputSet label='City' type='text' id='city' name='city' value={city} option='input' callback={setCity} />
                    <InputSet label='Zip Code' type='text' id='zip' name='zip' value={zipCode} option='input' callback={setZipCode} />
                  </div>
                  <div className='display-flex gap-16 flex-wrap'>
                    <InputSet label='Email' type='text' id='email' name='email' value={email} option='input' callback={setEmail} />
                    <InputSet label='Phone Number' type='text' id='phone' name='phone' value={phone} option='input' callback={setPhone} />
                  </div>
                </InputForm>
              </DropdownContainer>
              <DropdownContainer containerName='Summary Statement' containerType='no-entries'>
                <InputForm classes='summary-statement padding-left-32'>
                  <InputSet label='Summary' id='summary' name='summary' value={summary} option='textarea' callback={setSummary} />
                </InputForm>
              </DropdownContainer>
              <DropdownContainer containerName='Work Experience'>
                <Entries>
                  {workEntries}
                </Entries>
                {workExperienceForm}
                <Button text='Add Work Experience' classes='small bittersweet' imgClasses='bittersweet-filter' img={plusIcon} type='icon-text' handleClick={addWorkExperience}/>
              </DropdownContainer>
              <DropdownContainer containerName='Volunteer Experience'>
                <Entries>
                  {volunteerEntries}
                </Entries>
                {volunteerExperienceForm}
                <Button text='Add Volunteer Experience' classes='small bittersweet' imgClasses='bittersweet-filter' img={plusIcon} type='icon-text' handleClick={addVolunteerExperience} />
              </DropdownContainer>
              <DropdownContainer containerName='Education'>
                <Entries>
                  {educationEntries}
                </Entries>
                {educationForm}
                <Button text='Add Education' classes='small bittersweet' imgClasses='bittersweet-filter' img={plusIcon} type='icon-text' handleClick={addEducation}/>
              </DropdownContainer>
              <DropdownContainer containerName='Certifications'>
                <Entries>
                  {certificationEntries}
                </Entries>
                {certificationForm}
                <Button text='Add Certification' classes='small bittersweet' imgClasses='bittersweet-filter' img={plusIcon} type='icon-text' handleClick={addCertification}/>
              </DropdownContainer>
              <DropdownContainer containerName='Skills'>
                <div className='display-flex flex-column gap-16'>
                  <h3 className='slate-gray'>Soft Skills</h3>
                  <Entries>
                    {skillSoftEntries}
                  </Entries>
                </div>
                <div className='display-flex flex-column gap-16'>
                  <h3 className='slate-gray'>Technical Skills</h3>
                  <Entries>
                    {skillTechEntries}
                  </Entries>
                </div>
                {skillForm}
                <Button text='Add Skill' classes='small bittersweet' imgClasses='bittersweet-filter' img={plusIcon} type='icon-text' handleClick={addSkill} />
              </DropdownContainer>
              <DropdownContainer containerName='Awards'>
                <Entries>
                  {awardEntries}
                </Entries>
                {awardForm}
                <Button text='Add Award' classes='small bittersweet' imgClasses='bittersweet-filter' img={plusIcon} type='icon-text' handleClick={addAward} />
              </DropdownContainer>
              <DropdownContainer containerName='References'>
                <Entries>
                  {referenceEntries}
                </Entries>
                {referenceForm}
                <Button text='Add Reference' classes='small bittersweet' imgClasses='bittersweet-filter' img={plusIcon} type='icon-text' handleClick={addReference} />
              </DropdownContainer>
            </div>
          }
          {area === 'customize' &&
            <div className='display-flex flex-column gap-96'>
              <DropdownContainer containerName='Layout Style' containerType='no-entries'>
                  <InputForm>
                    <div className='display-flex gap-16 flex-wrap padding-left-32'>
                      <RadioImg id='traditional' name='design' value='traditional' src={design4} state={design} callback={setDesign} />  
                      <RadioImg id='banner' name='design' value='banner' src={design2} state={design} callback={setDesign} />       
                    </div>
                  </InputForm>
              </DropdownContainer>
              <DropdownContainer containerName='Layout Color Style' containerType='no-entries'>
                <div className='display-flex gap-16 padding-left-32'>
                  <InputSet label='Primary' id='primary-layout' name='primary-layout' option='color' classes='flex-column-reverse palette' value={layoutPrimaryColor} callback={setLayoutPrimaryColor} />
                </div>
              </DropdownContainer>
              <DropdownContainer containerName='Font Style'>
                <InputSet label='Font' id='font' name='font' option='select-font' select={font} callback={setFont} />
              </DropdownContainer>
              <DropdownContainer containerName='Color Style' containerType='no-entries'>
                <div className='display-flex flex-wrap gap-16 padding-left-32'>
                  <InputSet label='Body' id='body' name='body' option='color' classes='flex-column-reverse palette' value={bodyColor} callback={setBodyColor} />
                  <InputSet label='Primary' id='primary' name='primary' option='color' classes='flex-column-reverse palette' value={primaryColor} callback={setPrimaryColor} />
                  <InputSet label='Secondary' id='secondary' name='secondary' option='color' classes='flex-column-reverse palette' value={secondaryColor} callback={setSecondaryColor} />
                  <InputSet label='Tertiary' id='tertiary' name='tertiary' option='color' classes='flex-column-reverse palette' value={tertiaryColor} callback={setTertiaryColor} />
                </div>
              </DropdownContainer>
            </div>
          }
          <Footer />
        </div>
      </div>
      <div className='preview-area'>
        {design === 'banner' &&
          <Banner
            firstName={firstName}
            lastName={lastName}
            jobTitle={jobTitle}
            address={address}
            city={city}
            state={state}
            zipCode={zipCode}
            email={email}
            phone={phone}
            summary={summary}
            workExperience={workArray}
            volunteerExperience={volunteerArray}
            softSkills={skillSoftArray}
            technicalSkills={skillTechArray}
            education={educationArray}
            certification={certificationArray}
            awards={awardArray}
            references={referenceArray}
            body={bodyColor}
            primary={primaryColor}
            secondary={secondaryColor}
            tertiary={tertiaryColor}
            layoutPrimary={layoutPrimaryColor}
            font={font}
          />
        }
        {design === 'traditional' &&
          <Traditional
            firstName={firstName}
            lastName={lastName}
            jobTitle={jobTitle}
            address={address}
            city={city}
            state={state}
            zipCode={zipCode}
            email={email}
            phone={phone}
            summary={summary}
            workExperience={workArray}
            volunteerExperience={volunteerArray}
            softSkills={skillSoftArray}
            technicalSkills={skillTechArray}
            education={educationArray}
            certification={certificationArray}
            awards={awardArray}
            references={referenceArray}
            body={bodyColor}
            primary={primaryColor}
            secondary={secondaryColor}
            tertiary={tertiaryColor}
            layoutPrimary={layoutPrimaryColor}
            font={font}
          />
        }
      </div>
    </main>
  )
}

function App() {
  return (
    <>
      <Navigation />
      <Main />
    </>
  )
}

export default App

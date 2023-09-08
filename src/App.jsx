import { useState } from 'react'
import plusIcon from './assets/icon-plus.svg'
import design1 from './assets/resume-design-1.svg'
import design2 from './assets/resume-design-2.svg'
import design3 from './assets/resume-design-3.svg'
import design4 from './assets/resume-design-4.svg'
import { Navigation } from './components/Navigation'
import { Button } from './components/Button'
import { InputSet, InputForm, RadioImg, InputSelectSkill } from './components/Inputs'
import { Entries, List } from './components/Entries'
import { DropdownContainer } from './components/Dropdown'
import { Options } from './components/Options'
import {Traditional} from './components/Traditional'



function determineFormProcess(form, formName) {
  let obj;
  switch(formName) {
    case 'work':
      obj = {
        position: form.elements['position'].value,
        company: form.elements['company'].value,
        startDate: form.elements['start-date'].value,
        endDate: form.elements['end-date'].value,
        type: formName
      }
      break;
    case 'volunteer':
      obj = {
        position: form.elements['position'].value,
        organization: form.elements['organization'].value,
        startDate: form.elements['start-date'].value,
        endDate: form.elements['end-date'].value,
        type: formName
      };
      break;
    case 'education':
      obj = {
        degree: form.elements['degree'].value,
        institution: form.elements['institution'].value,
        startDate: form.elements['start-date'].value,
        endDate: form.elements['end-date'].value,
        type: formName
      }
      break;
    case 'certification':
      obj = {
        certification: form.elements['certification'].value,
        institution: form.elements['institution'].value,
        startDate: form.elements['start-date'].value,
        endDate: form.elements['end-date'].value,
        type: formName
      }
      break;
    case 'skill-soft':
      obj = {
        skill: form.elements['skill'].value,
        type: formName
      }
      break;
    case 'skill-technical':
      obj = {
        skill: form.elements['skill'].value,
        type: formName
      }
      break;
    case 'award':
      obj = {
        award: form.elements['award'].value,
        organization: form.elements['organization'].value,
        date: form.elements['date'].value,
        type: formName
      }
      break;
    case 'reference':
      obj = {
        name: form.elements['name'].value,
        position: form.elements['position'].value,
        contact: form.elements['contact'].value,
        type: formName
      }
      break;
  }
  return obj;
}

function EditArea() {
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Smith');
  const [address, setAddress] = useState('1234 Main Street');
  const [state, setState] = useState('CA');
  const [city, setCity] = useState('Redondo Beach');
  const [zipCode, setZipCode] = useState('90277');
  const [email, setEmail] = useState('jsmith@gmail.com');
  const [phone, setPhone] = useState('310-123-4567');

  const [summary, setSummary] = useState('Test');

  const [workExperienceForm, setWorkExperienceForm] = useState(<></>);
  const [volunteerExperienceForm, setVolunteerExperienceForm] = useState(<></>);
  const [educationForm, setEducationForm] = useState(<></>);
  const [certificationForm, setCertificationForm] = useState(<></>);
  const [skillForm, setSkillForm] = useState(<></>);
  const [awardForm, setAwardForm] = useState(<></>);
  const [referenceForm, setReferenceForm] = useState(<></>);

  const [workEntries, setWorkEntries] = useState(<></>);
  const [volunteerEntries, setVolunteerEntries] = useState(<></>);
  const [educationEntries, setEducationEntries] = useState(<></>);
  const [certificationEntries, setCertificationEntries] = useState(<></>);
  const [skillSoftEntries, setSkillSoftEntries] = useState(<></>);
  const [skillTechEntries, setSkillTechEntries] = useState(<></>);
  const [awardEntries, setAwardEntries] = useState(<></>);
  const [referenceEntries, setReferenceEntries] = useState(<></>);

  const [workArray, setWorkArray] = useState([]);
  const [volunteerArray, setVolunteerArray] = useState([]);
  const [educationArray, setEducationArray] = useState([]);
  const [certificationArray, setCertificationArray] = useState([]);
  const [skillSoftArray, setSkillSoftArray] = useState([]);
  const [skillTechArray, setSkillTechArray] = useState([]);
  const [awardArray, setAwardArray] = useState([]);
  const [referenceArray, setReferenceArray] = useState([]);

  const [skillType, setSkillType] = useState('default');

  const [design, setDesign] = useState('design-1');
  const [font, setFont] = useState('Inter');
  const [bodyColor, setBodyColor] = useState('#212529');
  const [primaryColor, setPrimaryColor] = useState('#FFFFFF');
  const [secondaryColor, setSecondaryColor] = useState('#EF233C');
  const [tertiaryColor, setTertiaryColor] = useState('#F27059');
  
  const [area, setArea] = useState('info');

  function restoreDefaults() {
    setDesign('design-1');
    setFont('Inter');
    setBodyColor('#212529');
    setPrimaryColor('#FFFFFF');
    setSecondaryColor('#EF233C');
    setTertiaryColor('#F27059');
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

  const [options, setOptions] = useState(
    <Options showInput={displayInput} showCustomize={displayCustomize}>
      <Button text='Clear Resume' classes='red' type='outline' handleClick={clearAllFields} />
    </Options>);

  function clearAllFields() {
    setFirstName('');
    setLastName('');
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

  function addEntry(event, formClass) {
    console.log(formClass);
    event.preventDefault();
    let form;
    if (formClass === 'skill-soft' || formClass === 'skill-technical') {
      form = document.getElementsByClassName('skill')[0];
    } else {
      form = document.getElementsByClassName(formClass)[0];
    }
    const obj = determineFormProcess(form, formClass);
    console.log(obj);
    let temp;
  
    switch(formClass) {
      case 'work':
        temp = workArray;
        temp.push(obj);
        setWorkArray(temp);
        setWorkEntries(<List list={workArray} formClass={formClass} />);
        setWorkExperienceForm(<></>);
        break;
      case 'volunteer':
        temp = volunteerArray;
        temp.push(obj);
        setVolunteerArray(temp);
        setVolunteerEntries(<List list={volunteerArray} formClass={formClass} />);
        setVolunteerExperienceForm(<></>);
        break;
      case 'education':
        temp = educationArray;
        temp.push(obj);
        setEducationArray(temp);
        setEducationEntries(<List list={educationArray} formClass={formClass} />);
        setEducationForm(<></>);
        break;
      case 'certification':
        temp = certificationArray;
        temp.push(obj);
        setCertificationArray(temp);
        setCertificationEntries(<List list={certificationArray} formClass={formClass} />);
        setCertificationForm(<></>);
        break;
      case 'skill-soft':
        temp = skillSoftArray;
        temp.push(obj);
        setSkillSoftArray(temp);
        setSkillSoftEntries(<List list={skillSoftArray} formClass={formClass} />);
        setSkillType('default');
        setSkillForm(<></>);
        break;
        case 'skill-technical':
          temp = skillTechArray;
          temp.push(obj);
          setSkillTechArray(temp);
          setSkillTechEntries(<List list={skillTechArray} formClass={formClass} />);
          setSkillType('default');
          setSkillForm(<></>);
          break;
      case 'award':
        temp = awardArray;
        temp.push(obj);
        setAwardArray(temp);
        setAwardEntries(<List list={awardArray} formClass={formClass} />);
        setAwardForm(<></>);
        break;
      case 'reference':
        temp = referenceArray;
        temp.push(obj);
        setReferenceArray(temp);
        setReferenceEntries(<List list={referenceArray} formClass={formClass} />);
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
        <InputSet label='Skill' type='text' id='skill' name='skill' option='input-im' />
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
            <InputSet label='Email Address' type='text' id='email' name='email' value=''option='input-im' />
            <InputSet label='Phone Number' type='text' id='phone' name='phone' value='' option='input-im' />
          </div>
          <div className='display-flex gap-16 flex-wrap'>
            <Button text='Add' classes='power flex-1' handleClick={() => addEntry(event, formClass)} />
            <Button text='Cancel' classes='outline black flex-1' handleClick={() => setReferenceForm(<></>)} />
          </div>
      </InputForm>
    )
  }

  return (
    <>
      <div className='edit-area'>
        {options}
        <div className='input-area'>
          {area === 'info' &&
            <>
              <DropdownContainer containerName='Personal Details' containerType='no-entries'>
                <InputForm classes='personal-details padding-left-32'>
                  <div className='display-flex gap-16 flex-wrap'>
                    <InputSet label='First Name' type='text' id='fname' name='fname' value={firstName} option='input' callback={setFirstName} />
                    <InputSet label='Last Name' type='text' id='lname' name='lname' value={lastName} option='input' callback={setLastName} />
                  </div>
                  <InputSet label='Address' type='text' id='address' name='address' value={address} option='input' callback={setAddress} />
                  <div className='display-flex gap-16 flex-wrap'>
                    <InputSet label='State' id='state' name='state' option='select-state' select={state} callback={setState} />
                    <InputSet label='City' type='text' id='city' name='city' value={city} option='input' callback={setCity} />
                    <InputSet label='Zip Code' type='text' id='zip' name='zip' value={zipCode} option='input' callback={setZipCode} />
                  </div>
                  <InputSet label='Email' type='text' id='email' name='email' value={email} option='input' callback={setEmail} />
                  <InputSet label='Phone Number' type='text' id='phone' name='phone' value={phone} option='input' callback={setPhone} />
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
            </>
          }
          {area === 'customize' &&
            <>
              <DropdownContainer containerName='Layout Style' containerType='no-entries'>
                <div className='display-flex flex-column gap-16 padding-left-32'>
                  <InputForm>
                    <div className='display-flex gap-16'>
                      <RadioImg id='design-1' name='design' value='design-1' src={design1} state={design} callback={setDesign} />
                      <RadioImg id='design-2' name='design' value='design-2' src={design2} state={design} callback={setDesign} />
                      <RadioImg id='design-3' name='design' value='design-3' src={design3} state={design} callback={setDesign} />
                      <RadioImg id='design-4' name='design' value='design-4' src={design4} state={design} callback={setDesign} />         
                    </div>
                  </InputForm>
                </div>
              </DropdownContainer>
              <DropdownContainer containerName='Font Style'>
                <InputSet label='Font' id='font' name='font' option='select-font' select={font} callback={setFont} />
              </DropdownContainer>
              <DropdownContainer containerName='Color Style' containerType='no-entries'>
                <div className='display-flex gap-16 padding-left-32'>
                  <InputSet label='Body' id='body' name='body' option='color' classes='flex-column-reverse palette' value={bodyColor} callback={setBodyColor} />
                  <InputSet label='Primary' id='primary' name='primary' option='color' classes='flex-column-reverse palette' value={primaryColor} callback={setPrimaryColor} />
                  <InputSet label='Secondary' id='secondary' name='secondary' option='color' classes='flex-column-reverse palette' value={secondaryColor} callback={setSecondaryColor} />
                  <InputSet label='Tertiary' id='tertiary' name='tertiary' option='color' classes='flex-column-reverse palette' value={tertiaryColor} callback={setTertiaryColor} />
                </div>
              </DropdownContainer>
            </>
          }
        </div>
      </div>
    </>
  )
}

function PreviewArea() {
  return (
    <>
      <div className='preview-area'>
        <Traditional/>
      </div>
    </>
  )
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

  const [summary, setSummary] = useState('I am UI/UX Designer who assists companies with improving their application interfaces.');

  const [workExperienceForm, setWorkExperienceForm] = useState(<></>);
  const [volunteerExperienceForm, setVolunteerExperienceForm] = useState(<></>);
  const [educationForm, setEducationForm] = useState(<></>);
  const [certificationForm, setCertificationForm] = useState(<></>);
  const [skillForm, setSkillForm] = useState(<></>);
  const [awardForm, setAwardForm] = useState(<></>);
  const [referenceForm, setReferenceForm] = useState(<></>);

  const [workEntries, setWorkEntries] = useState(<></>);
  const [volunteerEntries, setVolunteerEntries] = useState(<></>);
  const [educationEntries, setEducationEntries] = useState(<></>);
  const [certificationEntries, setCertificationEntries] = useState(<></>);
  const [skillSoftEntries, setSkillSoftEntries] = useState(<></>);
  const [skillTechEntries, setSkillTechEntries] = useState(<></>);
  const [awardEntries, setAwardEntries] = useState(<></>);
  const [referenceEntries, setReferenceEntries] = useState(<></>);

  const [workArray, setWorkArray] = useState([]);
  const [volunteerArray, setVolunteerArray] = useState([]);
  const [educationArray, setEducationArray] = useState([]);
  const [certificationArray, setCertificationArray] = useState([]);
  const [skillSoftArray, setSkillSoftArray] = useState([]);
  const [skillTechArray, setSkillTechArray] = useState([]);
  const [awardArray, setAwardArray] = useState([]);
  const [referenceArray, setReferenceArray] = useState([]);

  const [skillType, setSkillType] = useState('default');

  const [design, setDesign] = useState('design-1');
  const [font, setFont] = useState('Inter');
  const [bodyColor, setBodyColor] = useState('#212529');
  const [primaryColor, setPrimaryColor] = useState('#FFFFFF');
  const [secondaryColor, setSecondaryColor] = useState('#EF233C');
  const [tertiaryColor, setTertiaryColor] = useState('#F27059');

  const [area, setArea] = useState('info');

  const [options, setOptions] = useState(
    <Options showInput={displayInput} showCustomize={displayCustomize}>
      <Button text='Clear Resume' classes='red' type='outline' handleClick={clearAllFields} />
    </Options>);

  function restoreDefaults() {
    setDesign('design-1');
    setFont('Inter');
    setBodyColor('#212529');
    setPrimaryColor('#FFFFFF');
    setSecondaryColor('#EF233C');
    setTertiaryColor('#F27059');
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

  function addEntry(event, formClass) {
    console.log(formClass);
    event.preventDefault();
    let form;
    if (formClass === 'skill-soft' || formClass === 'skill-technical') {
      form = document.getElementsByClassName('skill')[0];
    } else {
      form = document.getElementsByClassName(formClass)[0];
    }
    const obj = determineFormProcess(form, formClass);
    console.log(obj);
    let temp;

    switch(formClass) {
      case 'work':
        temp = workArray;
        temp.push(obj);
        setWorkArray(temp);
        setWorkEntries(<List list={workArray} formClass={formClass} />);
        setWorkExperienceForm(<></>);
        break;
      case 'volunteer':
        temp = volunteerArray;
        temp.push(obj);
        setVolunteerArray(temp);
        setVolunteerEntries(<List list={volunteerArray} formClass={formClass} />);
        setVolunteerExperienceForm(<></>);
        break;
      case 'education':
        temp = educationArray;
        temp.push(obj);
        setEducationArray(temp);
        setEducationEntries(<List list={educationArray} formClass={formClass} />);
        setEducationForm(<></>);
        break;
      case 'certification':
        temp = certificationArray;
        temp.push(obj);
        setCertificationArray(temp);
        setCertificationEntries(<List list={certificationArray} formClass={formClass} />);
        setCertificationForm(<></>);
        break;
      case 'skill-soft':
        temp = skillSoftArray;
        temp.push(obj);
        setSkillSoftArray(temp);
        setSkillSoftEntries(<List list={skillSoftArray} formClass={formClass} />);
        setSkillType('default');
        setSkillForm(<></>);
        break;
        case 'skill-technical':
          temp = skillTechArray;
          temp.push(obj);
          setSkillTechArray(temp);
          setSkillTechEntries(<List list={skillTechArray} formClass={formClass} />);
          setSkillType('default');
          setSkillForm(<></>);
          break;
      case 'award':
        temp = awardArray;
        temp.push(obj);
        setAwardArray(temp);
        setAwardEntries(<List list={awardArray} formClass={formClass} />);
        setAwardForm(<></>);
        break;
      case 'reference':
        temp = referenceArray;
        temp.push(obj);
        setReferenceArray(temp);
        setReferenceEntries(<List list={referenceArray} formClass={formClass} />);
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
        <InputSet label='Skill' type='text' id='skill' name='skill' option='input-im' />
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
      <div className='edit-area'>
        {options}
        <div className='input-area'>
          {area === 'info' &&
            <>
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
            </>
          }
          {area === 'customize' &&
            <>
              <DropdownContainer containerName='Layout Style' containerType='no-entries'>
                <div className='display-flex flex-column gap-16 padding-left-32'>
                  <InputForm>
                    <div className='display-flex gap-16'>
                      <RadioImg id='design-1' name='design' value='design-1' src={design1} state={design} callback={setDesign} />
                      <RadioImg id='design-2' name='design' value='design-2' src={design2} state={design} callback={setDesign} />
                      <RadioImg id='design-3' name='design' value='design-3' src={design3} state={design} callback={setDesign} />
                      <RadioImg id='design-4' name='design' value='design-4' src={design4} state={design} callback={setDesign} />         
                    </div>
                  </InputForm>
                </div>
              </DropdownContainer>
              <DropdownContainer containerName='Font Style'>
                <InputSet label='Font' id='font' name='font' option='select-font' select={font} callback={setFont} />
              </DropdownContainer>
              <DropdownContainer containerName='Color Style' containerType='no-entries'>
                <div className='display-flex gap-16 padding-left-32'>
                  <InputSet label='Body' id='body' name='body' option='color' classes='flex-column-reverse palette' value={bodyColor} callback={setBodyColor} />
                  <InputSet label='Primary' id='primary' name='primary' option='color' classes='flex-column-reverse palette' value={primaryColor} callback={setPrimaryColor} />
                  <InputSet label='Secondary' id='secondary' name='secondary' option='color' classes='flex-column-reverse palette' value={secondaryColor} callback={setSecondaryColor} />
                  <InputSet label='Tertiary' id='tertiary' name='tertiary' option='color' classes='flex-column-reverse palette' value={tertiaryColor} callback={setTertiaryColor} />
                </div>
              </DropdownContainer>
            </>
          }
        </div>
      </div>
      <div className='preview-area'>
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
        />
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

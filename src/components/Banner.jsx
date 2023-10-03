import home from '../assets/home.svg'
import envelope from '../assets/envelope.svg'
import phone from '../assets/phone.svg'

function Section({ classes, children, visibility }) {
  if (classes === undefined) {
    classes = '';
  }
  return (
    <div className={`display-flex flex-column gap-8 ${visibility} ${classes}`}>
      {children}
    </div>
  )
}

function Container({ direction, gap, children }) {
  if (direction === 'row') {
    return (
      <div className='display-flex gap-48'>
        {children}
      </div>
    )
  } else {
    if (gap === '4') {
      return (
        <div className='display-flex flex-column gap-4'>
          {children}
        </div>
      )
    } else if (gap === '8') {
      return (
        <div className='display-flex flex-column gap-8'>
          {children}
        </div>
      )
    } 
    else if (gap === '16') {
      return (
        <div className='display-flex flex-column gap-16'>
          {children}
        </div>
      )
    } else if (gap === '32') {
      return (
        <div className='display-flex flex-column gap-32'>
          {children}
        </div>
      )
    }
  }
}

function SkillsContainer({ children, visibility }) {
  return (
    <div className={'display-flex flex-column flex-1 gap-4 ' + visibility}>
      {children}
    </div>
  )
}

function GeneralEntry({ main, detail, subDetail, visibility, body, secondary }) {
  if (visibility) {
    return (
      <div className='display-flex flex-column'>
        <strong style={body}>{main}</strong>
        <p style={body}>{detail}</p>
        <p style={secondary}>{subDetail}</p>
      </div>
    )
  }
}

function JobEntry({ jobTitle, company, startDate, endDate, description, visibility, body, secondary }) {
  console.log(visibility);
  if (visibility) {
    return (
      <div className='display-flex flex-column'>
        <div className='display-flex gap-48 justify-space-between'>
          <div>
            <p style={body}><strong>{jobTitle}</strong> / {company}</p>
          </div>
          <div>
            <p style={secondary}>{startDate} - {endDate}</p>
          </div>
        </div>
        <div style={body}>
          <p>{description}</p>
        </div>
      </div>
    )
  }
}

function VolunteerEntry({ position, organization, startDate, endDate, description, visibility, body, secondary }) {
  if (visibility) {
    return (
      <div className='display-flex flex-column'>
        <div className='display-flex gap-48 justify-space-between'>
          <div>
            <p style={body}><strong>{position}</strong> / {organization}</p>
          </div>
          <div>
            <p style={secondary}>{startDate} - {endDate}</p>
          </div>
        </div>
        <div style={body}>
          <p>{description}</p>
        </div>
      </div>
    )
  }
}

function SoftSkillListings({ array }) {
  let string = '';

  for (let i = 0; i < array.length; i += 1) {
    if (array[i].visibility) {
      string = string.concat(array[i].skill, ', ');
    }
  }

  string = string.substring(0, string.length-2);
  return (
    <div>
      <p>
        {string}
      </p>
    </div>
  )
}

function TechnicalSkillListings({ array }) {
  let string = '';

  for (let i = 0; i < array.length; i += 1) {
    if (array[i].visibility) {
      string = string.concat(array[i].skill, ', ');
    }
  }

  string = string.substring(0, string.length-2);
  return (    
    <div>
      <p>
        {string}
      </p>
    </div>
  )
}

function EducationListings({ array, body, secondary }) {
  return (
    <>
      {array.map((entry) => {
        return <GeneralEntry key={entry.degree} main={entry.degree} detail={entry.institution} subDetail={`${entry.startDate} - ${entry.endDate}`} visibility={entry.visibility} body={body} secondary={secondary} />
      })}
    </>
  )
}

function CertificationListings({ array, body, secondary }) {
  return (
    <>
      {array.map((entry) => {
        return <GeneralEntry key={entry.certification} main={entry.certification} detail={entry.institution} subDetail={`${entry.startDate} - ${entry.endDate}`} visibility={entry.visibility} body={body} secondary={secondary} />
      })}
    </>
  )
}

function AwardListings({ array, body, secondary }) {
  return (
    <>
      {array.map((entry) => {
        return <GeneralEntry key={entry.award} main={entry.award} detail={entry.organization} subDetail={entry.date} visibility={entry.visibility} body={body} secondary={secondary} />
      })}
    </>
  )
}

function JobListings({array, body, secondary}) {
  return (
    <>
      {array.map((entry) => {
        console.log(entry.visibility);
        return <JobEntry key={entry.key} jobTitle={entry.position} company={entry.company} startDate={entry.startDate} endDate={entry.endDate} description={entry.description} visibility={entry.visibility} body={body} secondary={secondary} />
      })}
    </>
  )
}

function VolunteerListings({array, body, secondary}) {
  return (
    <>
      {array.map((entry) => {
        return <VolunteerEntry key={entry.position} position={entry.position} organization={entry.organization} startDate={entry.startDate} endDate={entry.endDate} description={entry.description} visibility={entry.visibility} body={body} secondary={secondary} />
      })}
    </>
  )
}

function ReferenceListings({ array, body, secondary }) {
  return (
    <>
      {array.map((entry) => {
        return <GeneralEntry key={entry.name} main={entry.name} detail={entry.position} subDetail={entry.contact} visibility={entry.visibility} body={body} secondary={secondary} />
      })}
    </>
  )
}

function assignCityStateZip(city, state, zip) {
  let cityStateZip = `${city}, ${state} ${zip}`;

  if (city === '') {
    if (state !== 'default') {
      cityStateZip = `${city} ${state} ${zip}`;
    } else {
      cityStateZip = `${city} ${zip}`;
    }
  } else {
    if (state !== 'default') {
      cityStateZip = `${city}, ${state} ${zip}`;
    } else {
      cityStateZip = `${city}, ${zip}`;
    }
  }

  return cityStateZip;
}

function assignFont(option) {
  let fontClass;
  switch(option) {
    case 'Inter Regular':
      fontClass = 'inter';
      break;
    case 'Montserrat Regular':
      fontClass = 'montserrat';
      break;
    case 'Georgia':
      fontClass = 'georgia';
      break;
    case 'Oswald':
      fontClass = 'oswald';
  }

  return fontClass;
}

function setVisibility(array) {
  console.log(array);
  if (array.length === 0) {
    return 'hidden';
  } else {
    for (let i = 0; i < array.length; i += 1) {
      if (array[i].visibility === true) {
        return '';
      }
    }
    return 'hidden';
  }
}

function setVisibilitySkills(softArray, technicalArray) {
  if (softArray.length === 0 && technicalArray.length === 0) {
    return 'hidden';
  } else {
    for (let i = 0; i < softArray.length; i += 1) {
      if (softArray[i].visibility === true) {
        return ''
      }
    }
    for (let i = 0; i < technicalArray.length; i += 1) {
      if (technicalArray[i].visibility === true) {
        return '';
      }
    }
    return 'hidden';
  }
}

export function Banner(props) {
  let cityStateZip = assignCityStateZip(props.city, props.state, props.zipCode);
  
  const fontClass = assignFont(props.font);

  console.log('loading banner');

  const layoutPrimary = {
    backgroundColor: props.layoutPrimary,
  }
  const body = {
    color: props.body,
  }
  const primary = {
    color: props.primary,
  }
  const secondary = {
    color: props.secondary,
  }
  const tertiary = {
    color: props.tertiary,
  }

  return (
    <div className={'page ' + fontClass}>
      <div className='banner'>
        <header style={layoutPrimary}>
          <div className='display-flex flex-column gap-4'>
            <h1 style={primary}>{props.firstName} {props.lastName}</h1>
            <h2 style={primary}>{props.jobTitle}</h2>
          </div>
        </header>
        <main style={body}>
          <div className='display-flex flex-column gap-32 column'>
            <Section>
              <h1 style={tertiary}>Contact</h1>
              <Container gap='4'>
                <div className='display-flex gap-16'>
                  <div className='home-img'>
                    <img src={home}/>
                  </div>
                  <div>
                    <p>{props.address}</p>
                    <p>{cityStateZip}</p>
                  </div>
                </div>
                <div className='display-flex gap-16 align-center'>
                  <img src={envelope}/>
                  <div>
                    <p>{props.email}</p>
                  </div>
                </div>
                <div className='display-flex gap-16 align-center'>
                  <img src={phone}/>
                  <div>
                    <p>{props.phone}</p>
                  </div>
                </div>
              </Container>
            </Section>
            <Section visibility={setVisibility(props.education)}>
              <h1 style={tertiary}>Education</h1>
              <Container gap='8'>
                <EducationListings array={props.education} body={body} secondary={secondary}/>
              </Container>
            </Section>
            <Section visibility={setVisibility(props.certification)}>
              <h1 style={tertiary}>Certifications</h1>
              <Container gap='8'>
                <CertificationListings array={props.certification} body={body} secondary={secondary}/>
              </Container>
            </Section>
            <Section visibility={setVisibilitySkills(props.softSkills, props.technicalSkills)}>
              <h1 style={tertiary}>Skills</h1>
              <Container gap='8'>
                <SkillsContainer visibility={setVisibility(props.softSkills)}>
                  <h2 style={body}>Soft</h2>
                  <SoftSkillListings array={props.softSkills}/>
                </SkillsContainer>
                <SkillsContainer visibility={setVisibility(props.technicalSkills)}>
                  <h2 style={body}>Technical</h2>
                  <TechnicalSkillListings array={props.technicalSkills}/>
                </SkillsContainer>
              </Container>
            </Section>
            <Section visibility={setVisibility(props.awards)}>
              <h1 style={tertiary}>Awards</h1>
              <Container gap='8'>
                <AwardListings array={props.awards} body={body} secondary={secondary}/>
              </Container>
            </Section>
          </div>
          <div className='display-flex flex-column gap-32 main'>
            <Section>
              <h1 style={tertiary}>Summary</h1>
              <Container gap='4'>
                <p>{props.summary}</p>
              </Container>
            </Section>
            <Section visibility={setVisibility(props.workExperience)}>
              <h1 style={tertiary}>Work Experience</h1>
              <Container gap='4'>
                <JobListings array={props.workExperience} body={body} secondary={secondary}/>
              </Container>
            </Section>
            <Section visibility={setVisibility(props.volunteerExperience)}>
              <h1 style={tertiary}>Volunteer Experience</h1>
              <Container gap='4'>
                <VolunteerListings array={props.volunteerExperience} body={body} secondary={secondary}/>
              </Container>
            </Section>
            <Section visibility={setVisibility(props.references)}>
              <h1 style={tertiary}>References</h1>
              <Container gap='4'>
                <ReferenceListings array={props.references} body={body} secondary={secondary}/>
              </Container>
            </Section>
          </div>
        </main>
      </div>
    </div>
  )
}
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

function Container({ direction, children }) {
  if (direction === 'row') {
    return (
      <div className='container display-flex gap-80'>
        {children}
      </div>
    )
  } else {
    return (
      <div className='container display-flex flex-column gap-16'>
        {children}
      </div>
    )
  }
}

function JobEntry({ jobTitle, company, startDate, endDate, description, visibility, body, secondary }) {
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

function GeneralEntry({ main, detail, subDetail, visibility, body, secondary }) {
  if (visibility) {
    return (
      <div className='display-flex flex-column flex-1'>
        <strong style={body}>{main}</strong>
        <p style={body}>{detail}</p>
        <p style={secondary}>{subDetail}</p>
      </div>
    )
  }
}

function SkillsContainer({ children, visibility }) {
  return (
    <div className={'display-flex flex-column flex-1 gap-4 ' + visibility}>
      {children}
    </div>
  )
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

function JobListings({array, body, secondary}) {
  return (
    <>
      {array.map((entry) => {
        return <JobEntry key={entry.key} jobTitle={entry.position} company={entry.company} startDate={entry.startDate} endDate={entry.endDate} description={entry.description} visibility={entry.visibility} body={body} secondary={secondary} />
      })}
    </>
  )
}

function VolunteerListings({array, body, secondary}) {
  return (
    <>
      {array.map((entry) => {
        return <VolunteerEntry key={entry.key} position={entry.position} organization={entry.organization} startDate={entry.startDate} endDate={entry.endDate} description={entry.description} visibility={entry.visibility} body={body} secondary={secondary} />
      })}
    </>
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

export function Traditional(props) {
  let cityStateZip = assignCityStateZip(props.city, props.state, props.zipCode);
  
  const fontClass = assignFont(props.font);

  const layoutPrimary = {
    borderColor: props.layoutPrimary,
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
      <div className='traditional'>
        <header className='display-flex justify-space-between'>
          <div>
            <h1 style={primary}>{props.firstName} {props.lastName}</h1>
            <h2 style={secondary}>{props.jobTitle}</h2>
          </div>
          <div>
            <p style={body}>{props.address} <br />
              {cityStateZip}
            </p>
            <p style={body}>{props.email}</p>
            <p style={body}>{props.phone}</p>
          </div>
        </header>
        <hr style={layoutPrimary}/>
        <main className='display-flex flex-column gap-48'>
          <Section>
            <h1 style={tertiary}>Summary</h1>
            <Container>
              <p style={body}>{props.summary}</p>
            </Container>
          </Section>
          <Section visibility={setVisibility(props.workExperience)}>
            <h1 style={tertiary}>Work Experience</h1>
              <Container>
                <JobListings array={props.workExperience} body={body} secondary={secondary}/>
              </Container>
          </Section>
          <Section visibility={setVisibility(props.volunteerExperience)}>
            <h1 style={tertiary}>Volunteer Experience</h1>
            <Container>
              <VolunteerListings array={props.volunteerExperience} body={body} secondary={secondary}/>
            </Container>
          </Section>
          <Section visibility={setVisibilitySkills(props.softSkills, props.technicalSkills)}>
            <h1 style={tertiary}>Skills</h1>
            <Container direction='row'>
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
          <div className='display-flex gap-48 column-gap-80 flex-wrap'>
            <Section classes='flex-grow-1' visibility={setVisibility(props.education)}>
              <h1 style={tertiary}>Education</h1>
              <Container direction='row'>
                <EducationListings array={props.education} body={body} secondary={secondary}/>
              </Container>
            </Section>
            <Section classes='flex-grow-1' visibility={setVisibility(props.certification)}>
              <h1 style={tertiary}>Certifications</h1>
              <Container>
                <CertificationListings array={props.certification} body={body} secondary={secondary}/>
              </Container>
            </Section>
            <Section classes='flex-grow-1' visibility={setVisibility(props.awards)}>
              <h1 style={tertiary}>Awards</h1>
              <Container>
                <AwardListings array={props.awards} body={body} secondary={secondary}/>
              </Container>
            </Section>
            <Section classes='flex-grow-1' visibility={setVisibility(props.references)}>
              <h1 style={tertiary}>References</h1>
              <Container>
                <ReferenceListings array={props.references} body={body} secondary={secondary}/>
              </Container>
            </Section>
          </div>
        </main>
      </div>
    </div>
  )
}
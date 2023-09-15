function Section({ classes, children }) {
  if (classes === undefined) {
    classes = '';
  }
  return (
    <div className={'display-flex flex-column gap-8 '+ classes}>
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

function SkillsContainer({ children }) {
  return (
    <div className='display-flex flex-column flex-1 gap-4'>
      {children}
    </div>
  )
}

function Skills({ skill }) {
  return (
    <div>
      {skill}
    </div>
  )
}

function GeneralEntry({ main, detail, subDetail, body, secondary }) {
  return (
    <div className='display-flex flex-column'>
      <strong style={body}>{main}</strong>
      <p style={body}>{detail}</p>
      <p style={secondary}>{subDetail}</p>
    </div>
  )
}

function JobEntry({ jobTitle, company, startDate, endDate, body, secondary }) {
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
      <ul style={body}>
        <li>Body Small. Most fonts have a particular weight which corresponds to one of the numbers in Common weight name mapping.</li>
        <li>However some fonts, called variable fonts, can support a range of weights with a more or less fine granularity, and this can give the designer a much closer degree of control over the chosen weight.</li>
      </ul>
    </div>
  )
}

function VolunteerEntry({ position, organization, startDate, endDate, body, secondary }) {
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
      <ul style={body}>
        <li>Body Small. Most fonts have a particular weight which corresponds to one of the numbers in Common weight name mapping.</li>
        <li>However some fonts, called variable fonts, can support a range of weights with a more or less fine granularity, and this can give the designer a much closer degree of control over the chosen weight.</li>
      </ul>
    </div>
  )
}

function SoftSkillListings({ array }) {
  return (
    <>
      {array.map((entry) => {
        return <Skills key={entry.skill} skill={entry.skill} />
      })}
    </>
  )
}

function TechnicalSkillListings({ array }) {
  return (
    <>
      {array.map((entry) => {
        return <Skills key={entry.skill} skill={entry.skill} />
      })}
    </>
  )
}

function EducationListings({ array, body, secondary }) {
  return (
    <>
      {array.map((entry) => {
        return <GeneralEntry key={entry.degree} main={entry.degree} detail={entry.institution} subDetail={`${entry.startDate} - ${entry.endDate}`} body={body} secondary={secondary} />
      })}
    </>
  )
}

function CertificationListings({ array, body, secondary }) {
  return (
    <>
      {array.map((entry) => {
        return <GeneralEntry key={entry.certification} main={entry.certification} detail={entry.institution} subDetail={`${entry.startDate} - ${entry.endDate}`} body={body} secondary={secondary} />
      })}
    </>
  )
}

function AwardListings({ array, body, secondary }) {
  return (
    <>
      {array.map((entry) => {
        return <GeneralEntry key={entry.award} main={entry.award} detail={entry.organization} subDetail={entry.date} body={body} secondary={secondary} />
      })}
    </>
  )
}

function JobListings({array, body, secondary}) {
  return (
    <>
      {array.map((entry) => {
        return <JobEntry key={entry.position} jobTitle={entry.position} company={entry.company} startDate={entry.startDate} endDate={entry.endDate} body={body} secondary={secondary} />
      })}
    </>
  )
}

function VolunteerListings({array, body, secondary}) {
  return (
    <>
      {array.map((entry) => {
        return <VolunteerEntry key={entry.position} position={entry.position} organization={entry.organization} startDate={entry.startDate} endDate={entry.endDate} body={body} secondary={secondary} />
      })}
    </>
  )
}

function ReferenceListings({ array, body, secondary }) {
  return (
    <>
      {array.map((entry) => {
        return <GeneralEntry key={entry.name} main={entry.name} detail={entry.position} subDetail={entry.contact} body={body} secondary={secondary} />
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

export function Banner(props) {
  console.log(props.summary);
  let cityStateZip = assignCityStateZip(props.city, props.state, props.zipCode);
  
  const fontClass = assignFont(props.font);

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
                <p>{props.address}<br/>
                  {cityStateZip}</p>
                <p>{props.email}</p>
                <p>{props.phone}</p>
              </Container>
            </Section>
            <Section>
              <h1 style={tertiary}>Education</h1>
              <Container gap='8'>
                <EducationListings array={props.education} body={body} secondary={secondary}/>
              </Container>
            </Section>
            <Section>
              <h1 style={tertiary}>Certifications</h1>
              <Container gap='8'>
                <CertificationListings array={props.certification} body={body} secondary={secondary}/>
              </Container>
            </Section>
            <Section>
              <h1 style={tertiary}>Skills</h1>
              <Container gap='8'>
                <SkillsContainer>
                  <h2 style={body}>Soft</h2>
                  <SoftSkillListings array={props.softSkills}/>
                </SkillsContainer>
                <SkillsContainer>
                  <h2 style={body}>Technical</h2>
                  <TechnicalSkillListings array={props.technicalSkills}/>
                </SkillsContainer>
              </Container>
            </Section>
            <Section>
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
            <Section>
              <h1 style={tertiary}>Work Experience</h1>
              <Container gap='4'>
                <JobListings array={props.workExperience} body={body} secondary={secondary}/>
              </Container>
            </Section>
            <Section>
              <h1 style={tertiary}>Volunteer Experience</h1>
              <Container gap='4'>
                <VolunteerListings array={props.volunteerExperience} body={body} secondary={secondary}/>
              </Container>
            </Section>
            <Section>
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
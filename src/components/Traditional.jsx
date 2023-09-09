function Section({ classes, children }) {
  if (classes === undefined) {
    classes = '';
  }
  return (
    <div className={'display-flex flex-column gap-8 ' + classes}>
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

function JobEntry({ jobTitle, company, startDate, endDate }) {
  return (
    <div className='display-flex flex-column'>
      <div className='display-flex gap-48 justify-space-between'>
        <div>
          <p><strong>{jobTitle}</strong> / {company}</p>
        </div>
        <div>
          <p className='primary'>{startDate} - {endDate}</p>
        </div>
      </div>
      <ul>
        <li>Body Small. Most fonts have a particular weight which corresponds to one of the numbers in Common weight name mapping.</li>
        <li>However some fonts, called variable fonts, can support a range of weights with a more or less fine granularity, and this can give the designer a much closer degree of control over the chosen weight.</li>
      </ul>
    </div>
  )
}

function VolunteerEntry({ position, organization, startDate, endDate }) {
  return (
    <div className='display-flex flex-column'>
      <div className='display-flex gap-48 justify-space-between'>
        <div>
          <p><strong>{position}</strong> / {organization}</p>
        </div>
        <div>
          <p className='primary'>{startDate} - {endDate}</p>
        </div>
      </div>
      <ul>
        <li>Body Small. Most fonts have a particular weight which corresponds to one of the numbers in Common weight name mapping.</li>
        <li>However some fonts, called variable fonts, can support a range of weights with a more or less fine granularity, and this can give the designer a much closer degree of control over the chosen weight.</li>
      </ul>
    </div>
  )
}

function GeneralEntry({ main, detail, subDetail }) {
  return (
    <div className='display-flex flex-column flex-1'>
      <strong>{main}</strong>
      <p>{detail}</p>
      <p className='primary'>{subDetail}</p>
    </div>
  )
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

function JobListings({array}) {
  return (
    <>
      {array.map((entry) => {
        return <JobEntry key={entry.position} jobTitle={entry.position} company={entry.company} startDate={entry.startDate} endDate={entry.endDate} />
      })}
    </>
  )
}

function VolunteerListings({array}) {
  return (
    <>
      {array.map((entry) => {
        return <VolunteerEntry key={entry.position} position={entry.position} organization={entry.organization} startDate={entry.startDate} endDate={entry.endDate} />
      })}
    </>
  )
}

function EducationListings({ array }) {
  return (
    <>
      {array.map((entry) => {
        return <GeneralEntry key={entry.degree} main={entry.degree} detail={entry.institution} subDetail={`${entry.startDate} - ${entry.endDate}`} />
      })}
    </>
  )
}

function CertificationListings({ array }) {
  return (
    <>
      {array.map((entry) => {
        return <GeneralEntry key={entry.certification} main={entry.certification} detail={entry.institution} subDetail={`${entry.startDate} - ${entry.endDate}`} />
      })}
    </>
  )
}

function AwardListings({ array }) {
  return (
    <>
      {array.map((entry) => {
        return <GeneralEntry key={entry.award} main={entry.award} detail={entry.organization} subDetail={entry.date} />
      })}
    </>
  )
}

function ReferenceListings({ array }) {
  return (
    <>
      {array.map((entry) => {
        return <GeneralEntry key={entry.name} main={entry.name} detail={entry.position} subDetail={entry.contact} />
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

export function Traditional(props) {
  let cityStateZip = assignCityStateZip(props.city, props.state, props.zipCode);

  return (
    <div className='page'>
      <div className='traditional'>
        <header className='display-flex justify-space-between'>
          <div>
            <h1>{props.firstName} {props.lastName}</h1>
            <h2>{props.jobTitle}</h2>
          </div>
          <div>
            <p>{props.address} <br />
              {cityStateZip}
            </p>
            <p>{props.email}</p>
            <p>{props.phone}</p>
          </div>
        </header>
        <hr/>
        <main className='display-flex flex-column gap-48'>
          <Section>
            <h1>Summary</h1>
            <Container>
              <p>{props.summary}</p>
            </Container>
          </Section>
          <Section>
            <h1>Work Experience</h1>
              <Container>
                <JobListings array={props.workExperience}/>
              </Container>
          </Section>
          <Section>
            <h1>Volunteer Experience</h1>
            <Container>
              <VolunteerListings array={props.volunteerExperience}/>
            </Container>
          </Section>
          <Section>
            <h1>Skills</h1>
            <Container direction='row'>
              <SkillsContainer>
                <h2>Soft</h2>
                <SoftSkillListings array={props.softSkills}/>
              </SkillsContainer>
              <SkillsContainer>
                <h2>Technical</h2>
                <TechnicalSkillListings array={props.technicalSkills}/>
              </SkillsContainer>
            </Container>
          </Section>
          <div className='display-flex gap-48 column-gap-80 flex-wrap'>
            <Section classes='flex-grow-1'>
              <h1>Education</h1>
              <Container direction='row'>
                <EducationListings array={props.education}/>
              </Container>
            </Section>
            <Section classes='flex-grow-1'>
              <h1>Certifications</h1>
              <Container>
                <CertificationListings array={props.certification}/>
              </Container>
            </Section>
            <Section classes='flex-grow-1'>
              <h1>Awards</h1>
              <Container>
                <AwardListings array={props.awards}/>
              </Container>
            </Section>
            <Section classes='flex-grow-1'>
              <h1>References</h1>
              <Container>
                <ReferenceListings array={props.references}/>
              </Container>
            </Section>
          </div>
        </main>
      </div>
    </div>
  )
}
function Home({ fill }) {
  return (
    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M7.40921 0.807119C7.16847 0.619876 6.83137 0.619876 6.59063 0.807119L0.590625 5.47379C0.428234 5.60009 0.333252 5.79429 0.333252 6.00002V13.3334C0.333252 13.8638 0.543966 14.3725 0.919038 14.7476C1.29411 15.1226 1.80282 15.3334 2.33325 15.3334H11.6666C12.197 15.3334 12.7057 15.1226 13.0808 14.7476C13.4559 14.3725 13.6666 13.8638 13.6666 13.3334V6.00002C13.6666 5.79429 13.5716 5.60009 13.4092 5.47379L7.40921 0.807119ZM9.66659 14H11.6666C11.8434 14 12.013 13.9298 12.138 13.8048C12.263 13.6797 12.3333 13.5102 12.3333 13.3334V6.32608L6.99992 2.17793L1.66659 6.32608V13.3334C1.66659 13.5102 1.73682 13.6797 1.86185 13.8048C1.98687 13.9298 2.15644 14 2.33325 14H4.33325V8.00002C4.33325 7.63183 4.63173 7.33335 4.99992 7.33335H8.99992C9.36811 7.33335 9.66659 7.63183 9.66659 8.00002V14ZM5.66659 14V8.66669H8.33325V14H5.66659Z" fill={fill}/>
    </svg>
  )
}

function Envelope({ fill }) {
  return (
    <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M9.02319e-05 1.98844C-1.78854e-05 1.99502 -2.87838e-05 2.00159 5.72241e-05 2.00817V10C5.72241e-05 11.1015 0.898534 12 2.00006 12H12.6667C13.7682 12 14.6667 11.1015 14.6667 10V2.00824C14.6668 2.00161 14.6668 1.99498 14.6667 1.98834C14.6604 0.892144 13.7644 0 12.6667 0H2.00006C0.902391 0 0.00635083 0.892197 9.02319e-05 1.98844ZM1.40444 1.70263C1.5147 1.48462 1.74142 1.33333 2.00006 1.33333H12.6667C12.9254 1.33333 13.1521 1.48462 13.2623 1.70263L7.33339 5.8529L1.40444 1.70263ZM13.3334 3.28044V10C13.3334 10.3651 13.0319 10.6667 12.6667 10.6667H2.00006C1.63491 10.6667 1.33339 10.3651 1.33339 10V3.28044L6.95108 7.21282C7.18063 7.3735 7.48615 7.3735 7.7157 7.21282L13.3334 3.28044Z" fill={fill} />
    </svg>
  )
}

function Phone({ stroke }) {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.2587 10.9467V12.9467C14.2595 13.1324 14.2215 13.3162 14.1471 13.4863C14.0727 13.6564 13.9636 13.8091 13.8268 13.9346C13.69 14.0602 13.5285 14.1557 13.3526 14.2152C13.1767 14.2747 12.9903 14.2968 12.8054 14.2801C10.754 14.0572 8.78341 13.3562 7.05208 12.2334C5.4413 11.2098 4.07564 9.84418 3.05208 8.2334C1.9254 6.4942 1.22424 4.51406 1.00541 2.4534C0.988751 2.26904 1.01066 2.08324 1.06974 1.90781C1.12883 1.73239 1.22379 1.57119 1.34859 1.43448C1.47339 1.29777 1.62528 1.18854 1.79461 1.11375C1.96393 1.03895 2.14697 1.00024 2.33208 1.00006H4.33208C4.65562 0.99688 4.96927 1.11145 5.21459 1.32242C5.4599 1.53339 5.62013 1.82636 5.66541 2.14673C5.74983 2.78678 5.90638 3.41522 6.13208 4.02006C6.22177 4.25868 6.24119 4.51801 6.18802 4.76732C6.13485 5.01663 6.01132 5.24547 5.83208 5.42673L4.98541 6.2734C5.93445 7.94243 7.31638 9.32436 8.98541 10.2734L9.83208 9.42673C10.0133 9.24749 10.2422 9.12396 10.4915 9.07079C10.7408 9.01762 11.0001 9.03704 11.2387 9.12673C11.8436 9.35243 12.472 9.50898 13.1121 9.5934C13.4359 9.63909 13.7317 9.8022 13.9431 10.0517C14.1545 10.3013 14.2669 10.6198 14.2587 10.9467Z" stroke={stroke} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

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
                    <Home fill={props.layoutPrimary} />
                  </div>
                  <div>
                    <p>{props.address}</p>
                    <p>{cityStateZip}</p>
                  </div>
                </div>
                <div className='display-flex gap-16 align-center'>
                  <Envelope fill={props.layoutPrimary} />
                  <div>
                    <p>{props.email}</p>
                  </div>
                </div>
                <div className='display-flex gap-16 align-center'>
                  <Phone stroke={props.layoutPrimary} />
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
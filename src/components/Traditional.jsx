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

function JobEntry({ jobTitle, company, dates }) {
  return (
    <div className='display-flex flex-column'>
      <div className='display-flex gap-48 justify-space-between'>
        <div>
          <p><strong>{jobTitle}</strong> / {company}</p>
        </div>
        <div>
          <p className='primary'>{dates}</p>
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

function Skills({ entry }) {
  return (
    <div>
      {entry}
    </div>
  )
}

export function Traditional() {
  return (
    <div className='page'>
      <div className='traditional'>
        <header className='display-flex justify-space-between'>
          <div>
            <h1>John Smith</h1>
            <h2>Game Developer</h2>
          </div>
          <div>
            <p>1234 Main Street <br />
              San Diego, Ca. 92093
            </p>
            <p>jsmith@gmail.com</p>
            <p>760-123-4567</p>
          </div>
        </header>
        <hr/>
        <main className='display-flex flex-column gap-48'>
          <Section>
            <h1>Summary</h1>
            <Container>
              <p>Body Small. Most fonts have a particular weight which corresponds to one of the numbers in Common weight name mapping.</p>
            </Container>
          </Section>
          <Section>
            <h1>Work Experience</h1>
              <Container>
                <JobEntry jobTitle='Job Title' company='Company' dates='October 2016 - December 2021'/>
                <JobEntry jobTitle='Job Title' company='Company' dates='October 2016 - December 2021'/>
              </Container>
          </Section>
          <Section>
            <h1>Skills</h1>
            <Container direction='row'>
              <SkillsContainer>
                <h2>Soft</h2>
                <Skills entry='Project Management, Delegation, Customer Service, Communication' />
              </SkillsContainer>
              <SkillsContainer>
                <h2>Technical</h2>
                <Skills entry='C++, C#, Unreal, Unity, Figma, VR/AR' />
              </SkillsContainer>
            </Container>
          </Section>
          <div className='display-flex gap-48 column-gap-80 flex-wrap'>
            <Section classes='flex-grow-1'>
              <h1>Education</h1>
              <Container direction='row'>
                <GeneralEntry
                  main='Computer Science, Bachelor of Science'
                  detail='Embry Riddle Aeronautical University'
                  subDetail='2011-2015'
                />
                <GeneralEntry
                  main='Computer Science, Bachelor of Science'
                  detail='Embry Riddle Aeronautical University'
                  subDetail='2011-2015'
                />
              </Container>
            </Section>
            <Section classes='flex-grow-1'>
              <h1>Certifications</h1>
              <Container>
                <GeneralEntry
                  main='Certificate'
                  detail='Institution'
                  subDetail='2011-2015'
                />
              </Container>
            </Section>
            <Section classes='flex-grow-1'>
              <h1>Awards</h1>
              <Container>
                <GeneralEntry
                  main='Award'
                  detail='Institution'
                  subDetail='2011-2015'
                />
              </Container>
            </Section>
            <Section classes='flex-grow-1'>
              <h1>References</h1>
              <Container>
                <GeneralEntry
                  main='Magnus Larsson'
                  detail='Manager'
                  subDetail='888-123-4567'
                />
              </Container>
            </Section>
          </div>
        </main>
      </div>
    </div>
  )
}
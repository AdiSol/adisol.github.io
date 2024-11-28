import uniqid from 'uniqid'
import { programming_skills, technical_skills, hobbies} from '../../portfolio'
import './Skills.css'

const Skills = () => {
  // if (!programmingskills.length) return null

  return (
    <div>
      <section className='section skills' id='skills'>
        <h2 className='section__title'>Programming Skills</h2>
        <ul className='skills__list'>
          {programming_skills.map((skill) => (
            <li key={uniqid()} className='skills__list-item btn btn--plain'>
              {skill}
            </li>
          ))}
        </ul>
      </section>
      <section className='section skills' id='skills'>
        <h2 className='section__title'>Technical Skills</h2>
        <ul className='skills__list'>
          {technical_skills.map((skill) => (
            <li key={uniqid()} className='skills__list-item btn btn--plain'>
              {skill}
            </li>
          ))}
        </ul>
      </section>
      <section className='section skills' id='skills'>
        <h2 className='section__title'>Hobbies and Interests</h2>
        <ul className='skills__list'>
          {hobbies.map((skill) => (
            <li key={uniqid()} className='skills__list-item btn btn--plain'>
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Skills

import CoreConcept from './CoreConcept';
import { CORE_CONCEPTS } from '../../data.js';

function CoreConcepts() {
  return (
    <section id="core-concepts">
        <h2>Time to get started!</h2>
        <ul>
        {/* <CoreConcept {...CORE_CONCEPTS[0]}/>
        <CoreConcept {...CORE_CONCEPTS[1]}/>
        <CoreConcept {...CORE_CONCEPTS[2]}/>
        <CoreConcept {...CORE_CONCEPTS[3]}/> */}
        {CORE_CONCEPTS.map((concept) => <CoreConcept key={concept.title} {...concept} />)}
        </ul>
    </section>
  );
}

export default CoreConcepts;
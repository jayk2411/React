import { useState } from 'react';
import TabButton from '../TabButton/TabButton';
import Tabs from '../Tabs/Tabs';
import Section from '../Section/Section';
import { EXAMPLES } from '../../data.js';
import './Examples.css';

function Examples() {

    const [selectedTopic, setSelectedTopic] = useState();

    function handleTabSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    }

    let tabContent = <p>Please select a topic.</p>;
    if(selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre><code>{EXAMPLES[selectedTopic].code}</code></pre>
            </div>
        );
    }

  return (
    <Section title="Examples" id="examples">
        <Tabs button={
            <>
                <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleTabSelect('components')}>Components</TabButton>
                <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleTabSelect('jsx')}>JSX</TabButton>
                <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleTabSelect('props')}>Props</TabButton>
                <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleTabSelect('state')}>State</TabButton>
            </>
        }>
            {tabContent}
        </Tabs>
        {/* <menu>
        </menu> */}
        {/* {!selectedTopic ? <p>Please select a topic.</p> : <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre><code>{EXAMPLES[selectedTopic].code}</code></pre>
        </div>} */}
        {/* {tabContent} */}
    </Section>
  );
}

export default Examples;
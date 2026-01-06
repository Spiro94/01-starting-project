import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx"
import { useState } from "react";
import Tabs from "./Tabs.jsx";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState()
    function handleSelect(selectedButton) {
        console.log(`${selectedButton} tab selected`);
        setSelectedTopic(selectedButton)
    }
    let tabsContent = <><TabButton isSelected={selectedTopic == EXAMPLES.components} onClick={() => handleSelect(EXAMPLES.components)}>Components</TabButton>
        <TabButton isSelected={selectedTopic == EXAMPLES.jsx} onClick={() => handleSelect(EXAMPLES.jsx)}>JSX</TabButton>
        <TabButton isSelected={selectedTopic == EXAMPLES.props} onClick={() => handleSelect(EXAMPLES.props)}>Props</TabButton>
        <TabButton isSelected={selectedTopic == EXAMPLES.state} onClick={() => handleSelect(EXAMPLES.state)}>State</TabButton></>;


    return (
        <Section title="Examples" id="examples">
            <Tabs buttons={tabsContent}  >
                {selectedTopic ? (<div id="tab-content">
                    <h3>{selectedTopic.title}</h3>
                    <p>{selectedTopic.description}</p>
                    <pre><code>{selectedTopic.code}</code></pre>
                </div>) : <p>Please select a topic to see the example code.</p>}
            </Tabs>
        </Section>
    );
}
import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS, EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import { useState } from "react";

export default function Main() {
    const [selectedTopic, setSelectedTopic] = useState()
    function handleSelect(selectedButton) {
        console.log(`${selectedButton} tab selected`);
        setSelectedTopic(selectedButton)
    }

    return (
        <main>
            <section id="core-concepts">
                <h2>Core Concepts</h2>
                <ul>
                    {CORE_CONCEPTS.map((concept) => (
                        <CoreConcept
                            key={concept.title}
                            {...concept}
                        />
                    ))}
                </ul>
            </section>
            <section id="examples">
                <h2>Examples</h2>
                <menu>
                    <TabButton isSelected={selectedTopic == EXAMPLES.components} onSelect={() => handleSelect(EXAMPLES.components)}>Components</TabButton>
                    <TabButton isSelected={selectedTopic == EXAMPLES.jsx} onSelect={() => handleSelect(EXAMPLES.jsx)}>JSX</TabButton>
                    <TabButton isSelected={selectedTopic == EXAMPLES.props} onSelect={() => handleSelect(EXAMPLES.props)}>Props</TabButton>
                    <TabButton isSelected={selectedTopic == EXAMPLES.state} onSelect={() => handleSelect(EXAMPLES.state)}>State</TabButton>
                </menu>
                {selectedTopic ? <div id="tab-content">
                    <h3>{selectedTopic.title}</h3>
                    <p>{selectedTopic.description}</p>
                    <pre><code>{selectedTopic.code}</code></pre>
                </div> : <p>Please select a topic to see the example code.</p>}
            </section>
        </main>
    );
}